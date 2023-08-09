<template>
  <div class="genre-selector">
    <label for="genre">Select a Genre:</label>
    <select id="genre" v-model="selectedGenre" @change="emitGenre">
      <option v-for="genre in genres" :value="genre" :key="genre">
        {{ genre }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    genres: Array,
  },
  setup(props, { emit }) {
    const selectedGenre = ref("");

    const emitGenre = () => {
      emit("genreSelected", selectedGenre.value);
    };

    return {
      selectedGenre,
      emitGenre,
    };
  },
};
</script>

<!-- Styles and other elements -->
