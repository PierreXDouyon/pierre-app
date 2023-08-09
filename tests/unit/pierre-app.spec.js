// when the user loads the app they should see an example of a movie's details and description,
//  along with a recommend button

// screen on first load
describe("pierre-app.vue", () => {

// GenreSelector Component
describe("GenreSelector Component", () => {
  it("displays 'Pick a Genre' text and dropdown menu (Genres = action, romance, comedy, drama)", () => {
    // Test if the component displays the "Pick a Genre" text and a dropdown menu.
    // Vue.js Code: Use <p> and <select> tags to create the text and dropdown elements.
    // Interaction: User sees the "Pick a Genre" text and can select a genre from the dropdown.
  });

     // MovieList Component
     describe("MovieList Component", () => {
      it("should display three MovieDetails components stacked on top of each other", () => {
        // Test if the MovieList component displays three MovieDetails components stacked on top of each other.
        // Vue.js Code: Use v-for directive to render three MovieDetails components.
        // Interaction: User sees three movie details components stacked.
      });

  // MovieDetails Component
  describe("MovieDetails Component", () => {
    it("should renders movie details (image, title, genre, release date, IMDB rating) from array in props.movie-details when passed", () => {
      // Test if movie details (image, title, genre, release date, IMDB rating) are retrieved from an array in app.vue and displayed.
      // Vue.js Code: Access movie details from the array in app.vue and display them using props.
      // Interaction: User sees movie details displayed on the screen.
    });

    // it("should access and display specific movie details (title, genre, description etc.) from the array in props.movie-details", () => {
    //   // Test if specific movie details (title, genre, release date, IMDB rating) are accessed from the array in app.vue and displayed.
    //   // Vue.js Code: Access specific movie details from the array in app.vue and display them using props.
    //   // Interaction: User sees specific movie details displayed on the screen.
    // });

    // it("should display a sample movie's image from array in props.movie-details", () => {
    //   // Test if a sample movie's image is displayed.
    //   // Vue.js Code: Access the example movie's image from the passed props.
    //   // Information Source: Example movie data passed as props.
    // });

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

    // it("should display an example movie's title", () => {
    //   // Test if the movie's title is displayed.
    //   // Vue.js Code: Access the example movie's title from the passed props.
    //   // Information Source: Example movie data passed as props.
    // });

    // it("should display an example movie's genre", () => {
    //   // Test if the movie's genre is displayed.
    //   // Vue.js Code: Access the example movie's genre from the passed props.
    //   // Information Source: Example movie data passed as props.
    // });

    // it("should display an example movie's release date", () => {
    //   // Test if the movie's release date is displayed.
    //   // Vue.js Code: Access the example movie's release date from the passed props.
    //   // Information Source: Example movie data passed as props.
    // });

    // it("should display an example movie's IMDB rating", () => {
    //   // Test if the movie's IMDB rating is displayed.
    //   // Vue.js Code: Access the example movie's IMDB rating from the passed props.
    //   // Information Source: Example movie data passed as props.
    // });
  });
});
});


});
