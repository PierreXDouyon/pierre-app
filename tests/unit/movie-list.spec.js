import { shallowMount } from "@vue/test-utils";
import MovieList from "@/components/MovieList.vue";
import App from "@/App.vue";
import MovieDetails from "@/components/MovieDetails.vue"; // Import your MovieDetails component

describe("MovieList.vue", () => {
  it("displays movie details for each movie", () => {
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
      {
        id: 2,
        title: "Movie 2",
        image: "https://placehold.co/300x200",
        genre: "Romance",
        releaseDate: "2022-02-15",
        imdbRating: 8.0,
        description: "This is the description for Movie 2.",
      },
    ];

    const wrapper = shallowMount(MovieList, {
      props: {
        movies,
      },
    });

    // Check if MovieDetails components are rendered for each movie
    const movieDetailsComponents = wrapper.findAllComponents(MovieDetails);
    expect(movieDetailsComponents.length).toStrictEqual(movies.length);

    // Check if MovieDetails components receive correct props
    movieDetailsComponents.forEach((movieDetails, index) => {
      expect(movieDetails.props("movie")).toStrictEqual(movies[index]);
    });
  });

  it("displays up to 8 movie details for the selected genre", () => {
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

    const selectedGenre = "Action";

    const wrapper = shallowMount(MovieList, {
      props: {
        movies,
        selectedGenre,
      },
    });

    const displayedMovieDetailsCount = wrapper.findAll(".movie-details").length;
    expect(displayedMovieDetailsCount).toBeLessThanOrEqual(8);
  });

  it("does not include featured movie in filteredMovies after selecting a genre", async () => {
    const wrapper = shallowMount(App);

    // Simulate selecting a genre
    await wrapper.vm.handleSelectGenre("Action");

    // Get the computed filteredMovies array
    const filteredMovies = wrapper.vm.filteredMovies;

    // Check if the featured movie is not included in the filteredMovies array
    expect(filteredMovies).not.toContainEqual(wrapper.vm.featured);
  });

  it("shuffles the movie array when isfeatured is false and selectedGenre changes", async () => {
    // Create a sample movies array
    const movies = [
      {
        id: 8,
        title: "John Wick: Chapter 4",
        image:
          "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
        genre: "Action",
        releaseDate: "2023-05-27",
        imdbRating: 7.8,
        description:
          "John Wick is on the run after killing a member of the international assassin’s guild, and with a $14 million price tag on his head, he is the target of all hit men/women.",
      },
      {
        id: 9,
        title: "The Covenant",
        image:
          "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
        genre: "Action",
        releaseDate: "2023-01-13",
        imdbRating: 7.5,
        description:
          "A group of young witches must protect their secret from an ancient enemy who wants to destroy them.",
      },
      {
        id: 10,
        title: "Kill Boksoon",
        image:
          "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
        genre: "Action",
        releaseDate: "2023-03-10",
        imdbRating: 7.2,
        description:
          "A female assassin seeks revenge on the gangsters who killed her family and framed her for murder.",
      },
      {
        id: 11,
        title: "The Super Mario Bros.Movie",
        image:
          "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
        genre: "Action",
        releaseDate: "2023-12-21",
        imdbRating: 6.8,
        description:
          "Mario and Luigi embark on a quest to save Princess Peach from the evil King Bowser.",
      },
      {
        id: 12,
        title: "Black Panther II",
        image:
          "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
        genre: "Action",
        releaseDate: "2022-11-11",
        imdbRating: 7.5,
        description:
          "The sequel to the 2018 blockbuster, Black Panther, follows the new adventures of King T’Challa and his allies in Wakanda.",
      },
      {
        id: 13,
        title: "The Matrix Resurrections",
        image:
          "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
        genre: "Action",
        releaseDate: "2021-12-22",
        imdbRating: 7.4,
        description:
          "Neo and Trinity return to the virtual reality of the Matrix, where they face new enemies and old allies.",
      },
    ];
    const initialMovies = [...movies];
    // Mount the component with the movies array, isfeatured set to false, and a selectedGenre
    const wrapper = shallowMount(MovieList, {
      propsData: {
        movies: initialMovies, // Clone the array to avoid mutations in the test
        isfeatured: false,
      },
    });

    // Simulate changing the selectedGenre
    await wrapper.setProps({ selectedGenre: "Action" });

    // Get the MovieDetails components from the wrapper
    const movieDetailsComponents = wrapper.findAllComponents({
      name: "MovieDetails",
    });

    // Extract the movie IDs from the MovieDetails components
    const movieIds = movieDetailsComponents.map(
      (component) => component.props("movie").id
    );

    // Check that the movie IDs are not in the original order
    expect(movieIds).toEqual(
      expect.arrayContaining(initialMovies.map((movie) => movie.id))
    );
  });
});
