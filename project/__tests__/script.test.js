// __tests__/script.test.js (Create a test file)

// Mock the DOM elements and their values
document.getElementById = jest.fn((id) => {
    switch (id) {
      case 'bioForm':
        return {
          addEventListener: jest.fn(),
          submit: jest.fn(), // Mock the submit function if needed for triggering
        };
      case 'bio':
        return { value: 'My test bio.' };
      case 'profilePictureURL':
        return { value: 'http://test.com/image.png' };
      default:
        return null;
    }
  });
  
  // Mock localStorage
  global.localStorage = {
    getItem: jest.fn(() => 'user456'),
  };
  
  // Mock fetch
  global.fetch = jest.fn();
  
  // Mock window.location.href
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: { href: null },
    writable: true,
  });
  
  // Mock alert
  global.alert = jest.fn();
  
  // Import the script that contains your event listener (adjust the path as needed)
  require('../script.js');
  
  describe('BioForm Submission', () => {
    let submitHandler;
  
    beforeEach(() => {
      // Reset mocks before each test
      document.getElementById.mockClear();
      global.fetch.mockClear();
      global.localStorage.getItem.mockClear();
      global.alert.mockClear();
      window.location.href = null;
  
      // Get the submit handler for the bioForm
      const bioForm = document.getElementById('bioForm');
      submitHandler = bioForm.addEventListener.mock.calls.find(
        (call) => call[0] === 'submit'
      )[1];
    });
  
    it('should send a POST request to /update-profile with correct data on successful submission', async () => {
      // Simulate a successful fetch response
      global.fetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ message: 'Profile updated successfully!' }),
      });
  
      // Simulate form submission
      submitHandler({ preventDefault: jest.fn() });
  
      // Assertions
      expect(global.localStorage.getItem).toHaveBeenCalledWith('userId');
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'user456',
          bio: 'My test bio.',
          profilePictureURL: 'http://test.com/image.png',
        }),
      });
      expect(global.alert).toHaveBeenCalledWith('Profile updated successfully!');
      expect(window.location.href).toBe('displaypage.html');
    });
  
    it('should display an error alert and not redirect on failed submission', async () => {
      // Simulate a failed fetch response
      global.fetch.mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue({ message: 'Failed to update profile on server.' }),
      });
  
      // Simulate form submission
      submitHandler({ preventDefault: jest.fn() });
  
      // Assertions
      expect(global.localStorage.getItem).toHaveBeenCalledWith('userId');
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'user456',
          bio: 'My test bio.',
          profilePictureURL: 'http://test.com/image.png',
        }),
      });
      expect(global.alert).toHaveBeenCalledWith('Failed to update profile.');
      expect(window.location.href).toBeNull(); // Ensure no redirection
    });
  
    it('should display a generic error alert on fetch error', async () => {
      // Simulate a fetch error
      global.fetch.mockRejectedValue(new Error('Network error'));
  
      // Simulate form submission
      submitHandler({ preventDefault: jest.fn() });
  
      // Assertions
      expect(global.localStorage.getItem).toHaveBeenCalledWith('userId');
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'user456',
          bio: 'My test bio.',
          profilePictureURL: 'http://test.com/image.png',
        }),
      });
      expect(global.alert).toHaveBeenCalledWith('An error occurred while updating the profile.');
      expect(window.location.href).toBeNull(); // Ensure no redirection
    });
  });