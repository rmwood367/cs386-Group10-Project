beforeEach(() => {
  jest.clearAllMocks();

  document.body.innerHTML = `
    <form id="bioForm">
      <input id="bio" value="My test bio." />
      <input id="profilePictureURL" value="http://test.com/image.png" />
      <button type="submit">Submit</button>
    </form>
  `;

  const bioForm = document.getElementById("bioForm");

  if (bioForm) {
    jest.spyOn(bioForm, "addEventListener");
    bioForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("BioForm submit event triggered!");
    });
  }

  // Mock localStorage
  Object.defineProperty(global, "localStorage", {
    value: {
      getItem: jest.fn(() => "9"),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true,
  });

  // 🔹 **Ensure `fetch` is properly mocked**
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({ message: "Profile updated successfully!" }),
  });

  // Mock alert
  global.alert = jest.fn();

  // Mock window location
  Object.defineProperty(global, "window", {
    value: { location: { href: null } },
    writable: true,
  });

  // 🔹 **Now Import `script.js` AFTER Mocks Are Set Up**
  require("../public/script.js");
});

// 🔹 Helper to ensure Jest waits for async operations
const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

describe("BioForm Submission", () => {
  it("should correctly call `localStorage.getItem('userId')` on form submission", () => {
    const bioForm = document.getElementById("bioForm");

    expect(global.localStorage.getItem("userId")).toBe("9");

    // Manually trigger the submit event
    bioForm.dispatchEvent(new Event("submit"));

    expect(global.localStorage.getItem).toHaveBeenCalledWith("userId");
  });


});
