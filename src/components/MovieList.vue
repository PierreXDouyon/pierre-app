<template>
  <div class="movie-list">
    <MovieDetails
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    ></MovieDetails>
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails.vue";

export default {
  props: {
    movies: Array,
  },
  components: {
    MovieDetails,
  },
};
</script>

<!-- Styles and other elements -->
