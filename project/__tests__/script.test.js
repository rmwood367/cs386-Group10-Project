// Reset all mocks before each test
beforeEach(() => {
    jest.clearAllMocks();
  
    // Fully mock localStorage so Jest can reset it
    Object.defineProperty(global, "localStorage", {
      value: {
        getItem: jest.fn(() => "user456"),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  
    // Mock the DOM structure
    document.body.innerHTML = `
      <button id="editProfileButton"></button>
      <form id="bioForm"></form>
      <input id="bio" value="My test bio." />
      <input id="profilePictureURL" value="http://test.com/image.png" />
    `;
  
    // Ensure bioForm exists before attaching mock event listeners
    const bioForm = document.getElementById("bioForm");
    if (bioForm) {
      jest.spyOn(bioForm, "addEventListener");
    }
  
    // Override `document.getElementById` to return mock elements
    document.getElementById = jest.fn((id) => {
      switch (id) {
        case "bioForm":
          return bioForm;
        case "bio":
          return { value: "My test bio." };
        case "profilePictureURL":
          return { value: "http://test.com/image.png" };
        case "editProfileButton":
          return document.querySelector("#editProfileButton");
        default:
          return document.querySelector(`#${id}`) || null;
      }
    });
  
    // Mock fetch
    global.fetch = jest.fn();
    
    // Mock window.location.href
    Object.defineProperty(global, "window", {
      value: { location: { href: null } },
      writable: true,
    });
  
    // Mock alert
    global.alert = jest.fn();
  });
  
  // Import the script after setting up the mock DOM
  require("../public/script.js");
  
  describe("BioForm Submission", () => {
    let submitHandler;
  
    beforeEach(() => {
      const bioForm = document.getElementById("bioForm");
  
      // Capture the event listener function
      if (bioForm?.addEventListener.mock.calls.length > 0) {
        submitHandler = bioForm.addEventListener.mock.calls.find(
          (call) => call[0] === "submit"
        )?.[1] || jest.fn();
      }
    });
  
    it("should send a POST request to /update-profile with correct data on successful submission", async () => {
      global.fetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ message: "Profile updated successfully!" }),
      });
  
      // Ensure submitHandler is a function before invoking it
      if (typeof submitHandler === "function") {
        submitHandler({ preventDefault: jest.fn() });
      }
  
      expect(global.localStorage.getItem).toHaveBeenCalledWith("userId");
      expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "user456",
          bio: "My test bio.",
          profilePictureURL: "http://test.com/image.png",
        }),
      });
      expect(global.alert).toHaveBeenCalledWith("Profile updated successfully!");
      expect(window.location.href).toBe("displaypage.html");
    });
  
    it("should display an error alert and not redirect on failed submission", async () => {
      global.fetch.mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue({ message: "Failed to update profile on server." }),
      });
  
      if (typeof submitHandler === "function") {
        submitHandler({ preventDefault: jest.fn() });
      }
  
      expect(global.localStorage.getItem).toHaveBeenCalledWith("userId");
      expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "user456",
          bio: "My test bio.",
          profilePictureURL: "http://test.com/image.png",
        }),
      });
      expect(global.alert).toHaveBeenCalledWith("Failed to update profile.");
      expect(window.location.href).toBeNull();
    });
  
    it("should display a generic error alert on fetch error", async () => {
      global.fetch.mockRejectedValue(new Error("Network error"));
  
      if (typeof submitHandler === "function") {
        submitHandler({ preventDefault: jest.fn() });
      }
  
      expect(global.localStorage.getItem).toHaveBeenCalledWith("userId");
      expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "user456",
          bio: "My test bio.",
          profilePictureURL: "http://test.com/image.png",
        }),
      });
      expect(global.alert).toHaveBeenCalledWith("An error occurred while updating the profile.");
      expect(window.location.href).toBeNull();
    });
  });
  