<template>
  <div id="app">
    <h1>My Movie App</h1>
    <GenreSelector
      :genres="genres"
      :selectedGenre="selectedGenre"
      :selectGenre="handleSelectGenre"
    />
    <MovieList :movies="filteredMovies" :selectedGenre="selectedGenre" />
  </div>
</template>
<!--pass genres array + selectedGenre as props to genreselector, 
pass handleSelectGenre method as prop to genreselector, 
pass the filteredMovies array as a prop to MovieList, 
pass the selectedGenre data as a prop to MovieList -->
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
      genres: ["Action", "Romance", "Comedy", "Drama"],
      movies: [
        {
          id: 1,
          title: "Movie 1",
          image: "https://placehold.co/300x200",
          genre: "Action",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 2,
          title: "Movie 2",
          image: "https://placehold.co/300x200",
          genre: "Romance",
          releaseDate: "2022-02-15",
          imdbRating: 8.0,
          description: "This is the description for Movie 2.",
        },
        {
          id: 3,
          title: "Movie 3",
          image: "https://placehold.co/300x200",
          genre: "Comedy",
          releaseDate: "2022-03-30",
          imdbRating: 7.2,
          description: "This is the description for Movie 3.",
        },
        {
          id: 4,
          title: "Movie 4",
          image: "https://placehold.co/300x200",
          genre: "Action",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 5,
          title: "Movie 5",
          image: "https://placehold.co/300x200",
          genre: "Comedy",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 6,
          title: "Movie 6",
          image: "https://placehold.co/300x200",
          genre: "Drama",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 7,
          title: "Movie 7",
          image: "https://placehold.co/300x200",
          genre: "Action",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 8,
          title: "Movie 8",
          image: "https://placehold.co/300x200",
          genre: "Action",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 9,
          title: "Movie 9",
          image: "https://placehold.co/300x200",
          genre: "Comedy",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 10,
          title: "Movie 10",
          image: "https://placehold.co/300x200",
          genre: "Drama",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 11,
          title: "Movie 1",
          image: "https://placehold.co/300x200",
          genre: "Drama",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 12,
          title: "Movie 12",
          image: "https://placehold.co/300x200",
          genre: "Romanace",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
        {
          id: 13,
          title: "Movie 13",
          image: "https://placehold.co/300x200",
          genre: "Romance",
          releaseDate: "2022-01-01",
          imdbRating: 7.5,
          description: "This is the description for Movie 1.",
        },
      ],
      selectedGenre: null,
    };
  },
  computed: {
    filteredMovies() {
      let filteredArray = [];
      if (!this.selectedGenre) {
        filteredArray = this.movies.slice(0, 3); // Display the first three movies by default
      } else {
        filteredArray = this.movies.filter((movie) => {
          return movie.genre === this.selectedGenre; // filter the array data with selected genre
        });
      }

      // Shuffle the filtered array to get a random order, like palindrome, Swap elements at indices 'i' and 'j' to shuffle the array
      for (let i = filteredArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredArray[i], filteredArray[j]] = [
          filteredArray[j],
          // temp store element at index j
          filteredArray[i],
          // place  element at index i to index j
        ];
      }

      return filteredArray; // return the filtered movies
    },
  },
  methods: {
    handleSelectGenre(genre) {
      this.selectedGenre = genre;
    },
    // updates the selectedGenre data with the provided genre
  },
};
</script>

<style lang="scss">
.movie-details {
  padding: 20px 0 50px 0;
  display: grid;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
}

h1,
.genre-selector {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  ul {
    padding: initial;
  }
  li {
    list-style-type: none;
    text-align: center;
  }
}

@media screen and (min-width: 768px) {
  .movie-details {
    img {
      width: 600px;
      height: 400px;
    }

    button {
      height: 200%;
      width: 50%;
      display: flex;
      /* text-align: center; */
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  }
}
</style>
