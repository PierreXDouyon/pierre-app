<template>
  <div class="movie-list">
    <MovieDetails
      v-for="movie in filteredMovies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieDetails from "./MovieDetails.vue";

export default {
  name: "MovieList",
  components: {
    MovieDetails,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
