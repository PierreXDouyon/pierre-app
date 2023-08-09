<template>
  <div class="genre-selector">
    <p>Select a Genre:</p>
    <ul>
      <li v-for="genre in genres" :key="genre" @click="selectGenre(genre)">
        {{ genre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GenreSelector",
  props: {
    genres: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectGenre(genre) {
      this.$emit("selectGenre", genre);
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
