<template>
  <div class="movie-details">
    <img :src="movie.image" :alt="movie.title" />
    <h2>{{ movie.title }}</h2>
    <p>Genre: {{ movie.genre }}</p>
    <p>Release Date: {{ movie.releaseDate }}</p>
    <p>IMDB Rating: {{ movie.imdbRating }}</p>
    <ViewDescription :description="movie.description" />
  </div>
</template>

<script>
import ViewDescription from "@/components/ViewDescription.vue";

export default {
  props: {
    movie: Object,
  },
  components: {
    ViewDescription,
  },
};
</script>

<!-- Styles and other elements -->
