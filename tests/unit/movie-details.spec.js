/// MovieDetails Component
describe("MovieDetails Component", () => {
  it("should renders movie details (image, title, genre, release date, IMDB rating) from array in props.movie-details when passed", () => {
    // Test if movie details (image, title, genre, release date, IMDB rating) are retrieved from an array in app.vue and displayed.
    // Vue.js Code: Access movie details from the array in app.vue and display them using props.
    // Interaction: User sees movie details displayed on the screen.
  });

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
  
  it("displays movie details after a genre is clicked from the genre selector", () => {
    // Test if the component displays movie details after a genre is clicked.
    // Vue.js Code: Use props to pass example movie data to the component.
    // Interaction: User sees movie details after selecting a genre.
  });

  it("should access the movie details array from app.vue based on the selected genre to create a filtered array", () => {
    // Test if the component accesses the movie details array from app.vue based on the selected genre.
    // Vue.js Code: Use the selected genre to filter the movie details array from app.vue.
    // Interaction: Component retrieves movie details based on the selected genre.
  });

  it("should use Math.random to select a single random movie from the filtered array", () => {
    // Test if the component uses Math.random to select a random movie suggestion from the filtered array.
    // Vue.js Code: Use Math.random to generate a random index and select a movie.
    // Interaction: Component generates a random movie suggestion from the filtered array.
  });

  it("updates movie suggestion when a genre is clicked again", () => {
    // Test if clicking a genre again updates the movie suggestion.
    // Vue.js Code: Simulate clicking a genre, then clicking it again to trigger an updated movie suggestion.
    // Interaction: Clicking the same genre again should result in a different movie suggestion.
  });
  
});