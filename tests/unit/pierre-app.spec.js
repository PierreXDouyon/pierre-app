// when the user loads the app they should see an example of a movie's details and description,
//  along with a recommend button

// screen on first load
describe("pierre-app.vue", () => {
  // RecommendButton Component
  describe("RecommendButton Component", () => {
    it("should display a button", () => {
      // Test if a button is visible.
      // Vue.js Code: Use <button> tag to create the button element.
    });
  
    it("should label the button as 'Recommend'", () => {
      // Test if the button is labeled as 'Recommend'.
      // Vue.js Code: Use the text "Recommend" inside the button.
    });
  });

  // MovieDetails Component
  describe("MovieDetails Component", () => {
   // screen on first load
describe("pierre-app.vue", () => {
  // RecommendButton Component
  describe("RecommendButton Component", () => {
    it("should display a button", () => {
      // Test if a button is visible.
      // Vue.js Code: Use <button> tag to create the button element.
    });
  
    it("should label the button as 'Recommend'", () => {
      // Test if the button is labeled as 'Recommend'.
      // Vue.js Code: Use the text "Recommend" inside the button.
    });
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

    it("should display an example movie's title", () => {
      // Test if the movie's title is displayed.
      // Vue.js Code: Access the example movie's title from the passed props.
      // Information Source: Example movie data passed as props.
    });

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

// RecommendButton Component
describe("RecommendButton Component", () => {
  // it("displays a 'Recommend' button", () => {
  //   // Test if the "Recommend" button shows up.
  //   // Vue.js Code: Use <button> tag to create the button element.
  // });

  it("makes genre selector visible with 'Pick a Genre' text and dropdown menu (Genres = action, romance, comedy, drama) after 'Recommend' button is clicked with a true and false toggle", () => {
    // Test if clicking the "Recommend" button makes the genre selector visible.
    // Vue.js Code: Modify the button click function to toggle genre selector's visibility.
    // Interaction: Clicking the "Recommend" button triggers the visibility of the genre selector.
  });

  it("hides genre selector after a genre is clicked with a true and false toggle", () => {
    // Test if genre selector hides after a genre is clicked.
    // Vue.js Code: Modify the genre click function to hide the genre selector.
    // Interaction: After selecting a genre, the genre selector becomes hidden.
  });
});

// GenreSelector Component
// describe("GenreSelector Component", () => {
//   it("displays 'Pick a Genre' text and dropdown menu (Genres = action, romance, comedy, drama) with a true or false toggle", () => {
//     // Test if the component displays the "Pick a Genre" text and a dropdown menu.
//     // Vue.js Code: Use <p> and <select> tags to create the text and dropdown elements.
//     // Interaction: User sees the "Pick a Genre" text and can select a genre from the dropdown.
//   });

  // it("hides genre selector after a genre is clicked", () => {
  //   // Test if genre selector hides after a genre is clicked.
  //   // Vue.js Code: Modify the genre click function to hide the genre selector.
  //   // Interaction: After selecting a genre, the genre selector becomes hidden.
  // });

  it("should access the movie details array from app.vue and apply Math.random to generate a random movie suggestion after a genre has been clicked", async () => {
    // Test if the component accesses the movie details array from app.vue based on the selected genre.
    // Vue.js Code: Use the selected genre to filter the movie details array from app.vue.
    // Interaction: User selects a genre, component generates a random movie suggestion.
  });
});

// MovieDetails Component
describe("MovieDetails Component", () => {
  // it("displays 'View Description' button under movie details", () => {
  //   // Test if the component displays the 'View Description' button under movie details.
  //   // Vue.js Code: Use <button> tag to create the button element.
  //   // Interaction: User sees the 'View Description' button under movie details.
  // });

  // it("hides movie description initially", () => {
  //   // Test if the movie description is not visible initially.
  //   // Vue.js Code: Use CSS or data properties to control visibility.
  //   // Interaction: Movie description is hidden when the component loads.
  // });

  it("shows movie description when 'View Description' is clicked using $emit to toggle description visibility", () => {
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

  it("updates movie suggestion when 'Recommend' button is clicked and a subsequent genre is clicked", () => {
    // Test if clicking the "Recommend" button and then clicking a subsequent genre
    // provides a different movie suggestion.
    // Vue.js Code: Modify the picking function to update after a new genre is selected.
    // Interaction: Click "Recommend" button, select a genre, and observe updated movie suggestions.
  });
  
  it("updates movie suggestion with new click of the recommend button after a genre is clicked", () => {
    // Test if clicking the "Recommend" button again after a genre is clicked provides a different movie suggestion.
    // Vue.js Code: Modify the picking function to update with each new click.
    // Interaction: Click "Recommend" button, observe initial movie suggestion, click a genre,
    // click "Recommend" button again, and observe updated movie suggestion.
  });
});

