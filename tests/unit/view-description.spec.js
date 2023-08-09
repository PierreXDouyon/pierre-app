it("should hide(with movie description being set to false in the movie array)movie description initially", () => {
    // Test if the movie description is not visible initially with true and false test.
    // Vue.js Code: by default the descripyion value is false when clicked it becomes true.
  });

  it("should display 'View Description' button under movie details", () => {
    // Test if the component displays the 'View Description' button under movie details.
    // Vue.js Code: Use <button> tag to create the button element.
    // Interaction: User sees the 'View Description' button under movie details.
  });

  it("should show movie description from the array in props.movie-details when 'View Description' is clicked using $emit to toggle description visibility", () => {
    // Test if clicking the "View Description" button emits a custom event to show the movie's description.
    // Vue.js Code: Use a button with '@click' directive to emit a custom event.
    // Interaction: User clicks the button to view the movie's description.
  });
  