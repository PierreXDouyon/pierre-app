/// MovieDetails Component
describe("MovieDetails Component", () => {
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