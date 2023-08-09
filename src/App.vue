<template>
  <div id="app">
    <h1>My Movie App</h1>
    <GenreSelector></GenreSelector>
    <MovieList :movies="movies"></MovieList>
  </div>
</template>

<script>
import GenreSelector from "./components/GenreSelector.vue";
import MovieList from "./components/MovieList.vue";

export default {
  name: "App",
  components: {
    GenreSelector,
    MovieList,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "Movie 1",
          genre: "Action",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 2,
          title: "Movie 2",
          genre: "Romance",
          releaseDate: "2022-02-15",
          imdbRating: 8.0,
          description: "This is the description for Movie 2.",
        },
        {
          id: 3,
          title: "Movie 3",
          genre: "Comedy",
          releaseDate: "2022-03-30",
          imdbRating: 7.2,
          description: "This is the description for Movie 3.",
        },
      ],
    };
  },
  methods: {
    // Add your methods here
  },
};
</script>

<style lang="scss">
/* Your styles here */
</style>
