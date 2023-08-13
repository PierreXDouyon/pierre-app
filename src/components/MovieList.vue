<template>
  <div class="movie-list">
    <!-- Iterate through each movie in the 'movies' array -->
    <MovieDetails
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      :isfeatured="isfeatured"
    ></MovieDetails>
    <!-- uses the 'id' as a unique key for efficient rendering,
    passes the 'movie' object as a prop to the 'MovieDetails' component -->
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
    isfeatured: Boolean,
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
