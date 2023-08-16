import { shallowMount } from "@vue/test-utils";
import MovieDetails from "@/components/MovieDetails.vue";

describe("MovieDetails.vue", () => {
  it("displays movie details", () => {
    const movie = {
      id: 1,
      title: "Movie 1",
      image: "https://placehold.co/300x200",
      genre: "Action",
      releaseDate: "2022-01-01",
      imdbRating: 7.5,
      description: "This is the description for Movie 1.",
    };

    const wrapper = shallowMount(MovieDetails, {
      props: {
        movie,
      },
    });

    // Check if movie details are displayed
    expect(wrapper.find(".movie-details").exists()).toBe(true);
  });

  it("renders as a featured movie when isfeatured is true", () => {
    // Create a sample movie object
    const movie = {
      id: 1,
      title: "Featured Movie",
      image: "path/to/image.jpg",
      genre: "Action",
      releaseDate: "2023-08-01",
      imdbRating: 8.5,
      description: "A description for the featured movie.",
    };

    // Mount the component with isfeatured set to true
    const wrapper = shallowMount(MovieDetails, {
      propsData: {
        movie,
        isfeatured: true,
      },
    });

    // Check if the component is rendered with the featured-details class
    const featuredDetailsElement = wrapper.find(".featured-details");
    expect(featuredDetailsElement.exists()).toBe(true);

    // Check if the title is rendered
    expect(wrapper.find("h2").text()).toBe(movie.title);
  });

  it("renders as a regular movie when isfeatured is false", () => {
    // Create a sample movie object
    const movie = {
      id: 2,
      title: "Regular Movie",
      image: "path/to/image.jpg",
      genre: "Drama",
      releaseDate: "2023-08-15",
      imdbRating: 7.2,
      description: "A description for the regular movie.",
    };

    // Mount the component with isfeatured set to false
    const wrapper = shallowMount(MovieDetails, {
      propsData: {
        movie,
        isfeatured: false,
      },
    });

    // Check if the component is rendered with the movie-details class
    const movieDetailsElement = wrapper.find(".movie-details");
    expect(movieDetailsElement.exists()).toBe(true);

    // Check if the title is rendered
    expect(wrapper.find("h2").text()).toBe(movie.title);
  });
});
