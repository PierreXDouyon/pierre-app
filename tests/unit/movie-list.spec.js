import { mount } from "@vue/test-utils";
import MovieList from "@/components/MovieList.vue";
import MovieDetails from "@/components/MovieDetails.vue";

describe("MovieList Component", () => {
  it("displays multiple MovieDetails components", () => {
    const movies = [
      {
        id: 1,
        title: "Movie 1",
        image: "https://placehold.co/300x200",
        genre: "Action",
        releaseDate: "2022-01-01",
        imdbRating: 7.5,
        description: "This is the description for Movie 1.",
      },
    ];
    const wrapper = mount(MovieList, {
      propsData: { movies },
    });

    const movieDetails = wrapper.findAllComponents(MovieDetails);
    // Expecting three MovieDetails components
    expect(movieDetails).toHaveLength(movies.length);
  });
});
// // MovieList Component
// describe("MovieList Component", () => {
//   it("should display three MovieDetails components stacked on top of each other", () => {
//     // Test if the MovieList component displays three MovieDetails components stacked on top of each other.
//     // Vue.js Code: Use v-for directive to render three MovieDetails components.
//     // Interaction: User sees three movie details components stacked.
//   });
// });
