<template>
  <div class="movie-list">
    <MovieDetails
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      :isfeatured="isfeatured"
    ></MovieDetails>
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
    selectedGenre: String,
    isfeatured: Boolean,
  },
};
</script>
