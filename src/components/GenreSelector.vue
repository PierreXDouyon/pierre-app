<template>
  <div class="genre-selector">
    <p id="genreTitle">Select your genre!</p>
    <ul>
      <li
        v-for="genre in genres"
        :key="genre"
        @click="selectGenre(genre)"
        class="genre"
      >
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
    selectedGenre: String, // Pass the selected genre as a prop
    selectGenre: Function, // Pass the selectGenre function as a prop
  },
};
</script>
