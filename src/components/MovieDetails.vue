<template>
  <div class="movie-details" v-if="movie.genre === selectedGenre"></div>
  <div :class="isfeatured ? 'featured-details' : 'movie-details'">
    <img :src="movie.image" alt="Movie Poster" />
    <h2>{{ movie.title }}</h2>
    <p>Genre: {{ movie.genre }}</p>
    <p>Release Date: {{ movie.releaseDate }}</p>
    <p>IMDB Rating: {{ movie.imdbRating }}</p>
    <ViewDescription :movie="movie"></ViewDescription>
  </div>
</template>

<script>
import ViewDescription from "./ViewDescription.vue";

export default {
  name: "MovieDetails",
  components: {
    ViewDescription,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    isfeatured: Boolean,
  },
};
</script>
