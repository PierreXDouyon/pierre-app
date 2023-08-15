<template>
  <div id="app">
    <h1>MOVIE RECOMMENDER 9000</h1>
    <GenreSelector
      :genres="genres"
      :selectedGenre="selectedGenre"
      :selectGenre="handleSelectGenre"
    />
    <h1
      class="featured-movie"
      id="featured-movie"
      style="
        text-shadow: 2.5px 2.5px 0 white !important;
        font-size: 5.1rem !important;
      "
    >
      Featured Movie
    </h1>
    <MovieDetails :movie="featured" :isfeatured="true" />
    <MovieList
      :movies="filteredMovies"
      :selectedGenre="selectedGenre"
      :isfeatured="false"
    />
    <ScrollToTop />
  </div>
</template>
<script>
import GenreSelector from "./components/GenreSelector.vue";
import MovieList from "./components/MovieList.vue";
import MovieDetails from "./components/MovieDetails.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default {
  name: "App",

  components: {
    GenreSelector,
    MovieList,
    MovieDetails,
    ScrollToTop,
  },
  data() {
    return {
      featured: {},
      genres: ["Action", "Romance", "Comedy", "Drama"],
      movies: [
        {
          id: 1,
          title: "Mission: Impossible Dead Reckoning Part One",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-07-14",
          imdbRating: 8.0,
          description:
            "Ethan Hunt and his team must stop a rogue faction of the Syndicate from unleashing a deadly virus.",
        },
        {
          id: 2,
          title: "Barbie",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2023-06-23",
          imdbRating: 7.4,
          description:
            "Barbie suffers a crisis that leads her to question her world and her existence.",
        },
        {
          id: 3,
          title: "Green Book",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2018-11-16",
          imdbRating: 8.2,
          description:
            "A working - class Italian- American bouncer becomes the driver of an African - American classical pianist on a tour of venues through the 1960s American South.",
        },
        {
          id: 4,
          title: "Game Night",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2018-02-23",
          imdbRating: 6.9,
          description:
            "A group of friends who meet regularly for game nights find themselves entangled in a real - life mystery.",
        },
        {
          id: 5,
          title: "They Cloned Tyrone",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-02-18",
          imdbRating: 6.7,
          description:
            "A trio of unlikely heroes uncover a sinister plot involving cloned celebrities, a mad scientist, and a secret government agency.",
        },
        {
          id: 6,
          title: "The Flash",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-11-04",
          imdbRating: 6.9,
          description:
            "Barry Allen, a forensic scientist who gains super-speed after being struck by lightning, travels back in time to save his mother’s life and alters history.",
        },
        {
          id: 7,
          title: "Sympathy for the Devil",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-08-25",
          imdbRating: 5.6,
          description:
            "A former assassin teams up with a priest to stop a cult from unleashing hell on Earth.",
        },
        {
          id: 8,
          title: "John Wick: Chapter 4",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-05-27",
          imdbRating: 7.8,
          description:
            "John Wick is on the run after killing a member of the international assassin’s guild, and with a $14 million price tag on his head, he is the target of all hit men/women.",
        },
        {
          id: 9,
          title: "The Covenant",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-01-13",
          imdbRating: 7.5,
          description:
            "A group of young witches must protect their secret from an ancient enemy who wants to destroy them.",
        },
        {
          id: 10,
          title: "Kill Boksoon",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-03-10",
          imdbRating: 7.2,
          description:
            "A female assassin seeks revenge on the gangsters who killed her family and framed her for murder.",
        },
        {
          id: 11,
          title: "The Super Mario Bros.Movie",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-12-21",
          imdbRating: 6.8,
          description:
            "Mario and Luigi embark on a quest to save Princess Peach from the evil King Bowser.",
        },
        {
          id: 12,
          title: "Black Panther II",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2022-11-11",
          imdbRating: 7.5,
          description:
            "The sequel to the 2018 blockbuster, Black Panther, follows the new adventures of King T’Challa and his allies in Wakanda.",
        },
        {
          id: 13,
          title: "The Matrix Resurrections",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2021-12-22",
          imdbRating: 7.4,
          description:
            "Neo and Trinity return to the virtual reality of the Matrix, where they face new enemies and old allies.",
        },
        {
          id: 14,
          title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-06-16",
          imdbRating: 7.6,
          description:
            "The Turtles face their greatest challenge yet when they encounter an army of mutants created by the Shredder.",
        },
        {
          id: 15,
          title: "Happiness for Beginners",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2023-02-14",
          imdbRating: 7.2,
          description:
            "A woman joins a wilderness survival course after a bad breakup and finds love in unexpected places.",
        },
        {
          id: 16,
          title: "A Star Is Born",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2018-10-05",
          imdbRating: 7.6,
          description:
            "A musician helps a young singer find fame as his own career spirals downward.",
        },
        {
          id: 17,
          title: "Love, Simon",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2018-03-16",
          imdbRating: 7.6,
          description:
            "A closeted gay teen struggles with coming out to his family and friends.",
        },
        {
          id: 18,
          title: "Crazy Rich Asians",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2018-08-15",
          imdbRating: 6.9,
          description:
            "A woman travels to Singapore with her boyfriend and discovers his family is extremely wealthy and influential.",
        },
        {
          id: 19,
          title: "If Beale Street Could Talk",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2018-12-25",
          imdbRating: 7.1,
          description:
            "A young couple in Harlem face challenges when the man is falsely accused of a crime and the woman tries to prove his innocence.",
        },
        {
          id: 20,
          title: "Blame",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2018-01-05",
          imdbRating: 5.8,
          description:
            "A high school drama teacher develops a taboo relationship with an unstable student who becomes obsessed with him.",
        },
        {
          id: 21,
          title: "Mary Shelley",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2018-05-25",
          imdbRating: 6.4,
          description:
            "The life and love story of the author of Frankenstein and her relationship with poet Percy Bysshe Shelley.",
        },
        {
          id: 22,
          title: "The Guernsey Literary and Potato Peel Pie Society",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2018-04-20",
          imdbRating: 7.4,
          description:
            "A writer forms an unexpected bond with the residents of Guernsey Island in the aftermath of World War II.",
        },
        {
          id: 23,
          title: "To All the Boys I’ve Loved Before",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2018-08-17",
          imdbRating: 7.1,
          description:
            "A teenage girl’s secret love letters are exposed and wreak havoc on her love life.",
        },
        {
          id: 24,
          title: "Call Me by Your Name",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2017-11-24",
          imdbRating: 7.8,
          description:
            "In 1980s Italy, romance blossoms between a seventeen- year - old student and the older man hired as his father’s research assistant.",
        },
        {
          id: 25,
          title: "The Big Sick",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2017-07-14",
          imdbRating: 7.5,
          description:
            "Comedian Kumail Nanjiani and grad student Emily Gardner fall in love but struggle as their cultures clash.When Emily contracts an illness.",
        },
        {
          id: 26,
          title: "The Shape of Water",
          image:
            "https://placehold.co/300x200/C724B1/eee?font=raleway&text=ROMANCE",
          genre: "Romance",
          releaseDate: "2017 - 12 - 22",
          imdbRating: 7.3,
          description:
            "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that's held in captivity.",
        },
        {
          id: 27,
          title: "Meg 2: The Trench",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-04-21",
          imdbRating: 7.4,
          description:
            "Jonas Taylor and his team return to the depths of the ocean to stop a new threat: a prehistoric shark bigger than the Megalodon.",
        },
        {
          id: 28,
          title: "Joker",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2019-10-04",
          imdbRating: 8.4,
          description:
            "A mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.He then embarks on a downward spiral of revolution and bloody crime.",
        },
        {
          id: 29,
          title: "Parasite",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2019-10-11",
          imdbRating: 8.6,
          description:
            "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        },
        {
          id: 30,
          title: "1917",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2020-01-10",
          imdbRating: 8.3,
          description:
            "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver his message.",
        },
        {
          id: 31,
          title: "The Trial of the Chicago 7",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2020-10-16",
          imdbRating: 7.8,
          description:
            "The story of seven people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago.",
        },
        {
          id: 32,
          title: "Nomadland",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2021-02-19",
          imdbRating: 7.4,
          description:
            "After losing everything in the Great Recession, a woman embarks on a journey through the American West, living as a van dweller.",
        },
        {
          id: 33,
          title: "The Father",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2021-02-26",
          imdbRating: 8.3,
          description:
            "A man refuses all assistance from his daughter as he ages.As he tries to make sense of his changing circumstances, he begins to doubt his loved ones.",
        },
        {
          id: 34,
          title: "Dune",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2021-10-22",
          imdbRating: 8.1,
          description:
            "Feature adaptation of Frank Herbert’s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset.",
        },
        {
          id: 35,
          title: "The Power of the Dog",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2021-12-01",
          imdbRating: 7.6,
          description:
            "Charismatic rancher Phil Burbank inspires fear and awe in those around him.When his brother brings home a new wife and her son.",
        },
        {
          id: 36,
          title: "Don’t Look Up",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2021-12-24",
          imdbRating: 7.3,
          description:
            "The story of two low - level astronomers, who must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.",
        },
        {
          id: 37,
          title: "The Tragedy of Macbeth",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2022-01-14",
          imdbRating: 8.4,
          description:
            "A Scottish lord becomes convinced by a trio of witches that he will become the next King of Scotland, and his ambitious wife supports him in his plans.",
        },
        {
          id: 38,
          title: "The Lost Daughter",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2021-12-17",
          imdbRating: 7.5,
          description:
            "A woman’s beach vacation takes a dark turn when she begins to confront the troubles of her past.",
        },
        {
          id: 39,
          title: "The Last Duel",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2021-10-15",
          imdbRating: 7.6,
          description:
            "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire by challenging him to a duel.",
        },
        {
          id: 40,
          title: "Bohemian Rhapsody",
          image:
            "https://placehold.co/300x200/3333ff/eee?font=raleway&text=DRAMA",
          genre: "Drama",
          releaseDate: "2018-11-02",
          imdbRating: 7.9,
          description:
            "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid(1985).",
        },
        {
          id: 41,
          title: "Guardians of the Galaxy Vol. 3",
          image:
            "https://placehold.co/300x200/ff6700/eee?font=raleway&text=ACTION",
          genre: "Action",
          releaseDate: "2023-07-14",
          imdbRating: 8.0,
          description:
            "The Guardians of the Galaxy continue their adventures across the cosmos and deal with the aftermath of Thanos’ snap.",
        },
        {
          id: 42,
          title: "Deadpool 2",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2018-05-18",
          imdbRating: 7.7,
          description:
            "Foul - mouthed mutant mercenary Wade Wilson(a.k.a.Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time - traveling cyborg Cable.",
        },
        {
          id: 43,
          title: "The Lego Movie 2: The Second Part",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2019-02-08",
          imdbRating: 6.6,
          description:
            "It’s been five years since everything was awesome and the citizens are facing a huge new threat: Lego Duplo invaders from outer space, wrecking everything faster than they can rebuild.",
        },
        {
          id: 44,
          title: "Knives Out",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2019-11-27",
          imdbRating: 7.9,
          description:
            "A detective investigates the death of a patriarch of an eccentric, combative family.",
        },
        {
          id: 45,
          title: "Jojo Rabbit",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2019-11-08",
          imdbRating: 7.9,
          description:
            "A young boy in Hitler’s army finds out his mother is hiding a Jewish girl in their home.",
        },
        {
          id: 46,
          title: "Borat Subsequent Moviefilm",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2020-10-23",
          imdbRating: 6.7,
          description:
            "Borat returns from Kazakhstan to America and this time he reveals more about the American culture, the COVID - 19 pandemic and the political elections.",
        },
        {
          id: 47,
          title: "Palm Springs",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2020-07-10",
          imdbRating: 7.4,
          description:
            "Stuck in a time loop, two wedding guests develop a budding romance while living the same day over and over again.",
        },
        {
          id: 48,
          title: "The King of Staten Island",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2020-06-12",
          imdbRating: 7.1,
          description:
            "Scott has been a case of arrested development since his firefighter dad died.He spends his days smoking weed and dreaming of being a tattoo artist until events force him to grapple with his grief and take his first steps forward in life.",
        },
        {
          id: 49,
          title: "Free Guy",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2021-08-13",
          imdbRating: 7.3,
          description:
            "A bank teller discovers that he’s actually an NPC inside a brutal, open world video game.",
        },
        {
          id: 50,
          title: "The Disaster Artist",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2017-12-08",
          imdbRating: 7.4,
          description:
            "When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.",
        },
        {
          id: 51,
          title: "Deadpool",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2016-02 - 12",
          imdbRating: 8.0,
          description:
            "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
        },
        {
          id: 52,
          title: "Zootopia",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2016-03-04",
          imdbRating: 8.0,
          description:
            "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
        },
        {
          id: 53,
          title: "The Nice Guys",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2016-05-20",
          imdbRating: 7.4,
          description:
            "In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.",
        },
        {
          id: 54,
          title: "La La Land",
          image:
            "https://placehold.co/300x200/F7BD02/eee?font=raleway&text=COMEDY",
          genre: "Comedy",
          releaseDate: "2016-12-09",
          imdbRating: 8.0,
          description:
            "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        },
      ],
      selectedGenre: null,
    };
  },

  computed: {
    filteredMovies() {
      let filteredArray = [];
      let randomIndex;
      if (this.selectedGenre) {
        filteredArray = this.movies.filter((movie) => {
          return movie.genre === this.selectedGenre;
        });
        randomIndex = Math.floor(Math.random() * filteredArray.length);
        this.getRandomFeaturedMovies(filteredArray);
        filteredArray.splice(randomIndex, 1);
      } else {
        let first3Movies = [];
        randomIndex = Math.floor(Math.random() * this.movies.length); // get the random index for the featured
        first3Movies = this.movies;
        this.getRandomFeaturedMovies(first3Movies);
        first3Movies.splice(randomIndex, 1);
        return first3Movies.slice(0, 4);
      }
      filteredArray.sort(() => Math.random() - 0.5);
      return filteredArray.slice(0, 8);
    },
  },
  methods: {
    getRandomFeaturedMovies(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const selectedMovie = array[randomIndex];
      array.splice(randomIndex, 1);
      this.featured = selectedMovie;
    },
    handleSelectGenre(genre) {
      this.selectedGenre = genre;
    },
  },
};
</script>

<style lang="scss">
$netflixRed: #790b10;
$netflixDarkRed: #8d0e14;
$netflixBlack: #160101;

body {
  background: linear-gradient(to bottom, $netflixBlack, $netflixDarkRed);
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  color: #fff;
  font-size: 16px;

  #genreTitle {
    font-family: "Archivo Narrow", sans-serif;
    font-size: 2.2rem;
    letter-spacing: 0.05em;
    text-shadow: 2.2px 2.2px 0 #767676;
    font-style: italic;
  }

  .featured-movie {
    color: #e50914;
  }

  h1 {
    font-size: 3.5rem;
    text-shadow: 4px 4px 0 #767575;
  }
}

.movie-description {
  max-width: 400px !important;
  margin: auto;
}

.featured-details,
.movie-details {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
  margin-top: 25px;
  padding-bottom: 25px;

  h2 {
    font-family: "Limelight", cursive;
    font-size: 1.69rem;
    -webkit-text-stroke: 0.275px red;
    text-shadow: 3px 3px 0 black;
    height: 55px;
    color: #fff;
    padding: 20px 0 30px 0;
    line-height: 1;
  }

  p {
    font-family: "Share Tech", sans-serif;
    font-size: 1.43rem;
    text-shadow: 3px 3px 0 black;
  }

  button {
    font-family: "Nunito", sans-serif;
    font-size: 1.2rem;
    text-shadow: 2px 2px 0 black;
    width: 250px;
    height: 40px;
    margin: auto;
    background-color: #e50914;
    border-radius: 25px;
    color: #fff;
    transition: transform 0.3s;
    letter-spacing: 0.065em;

    &:hover {
      opacity: 0.5;
      transform: scale(1.05);
    }
  }

  .movie-description {
    height: 165px;
  }
}

h1,
.genre-selector {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 10px auto -20px auto;
  font-family: "Share Tech", sans-serif;
  padding-top: 15px;
  ul {
    padding: initial;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: -25px auto auto auto;
    padding-bottom: 20px;
    gap: 20px;
    max-width: 520px;
    width: 100%;
  }

  li {
    list-style-type: none;
    text-align: center;
    font-family: "Nunito", sans-serif;
    font-size: 1.2rem;
    text-shadow: 2px 2px 0 black;
    width: calc((50% - 60px));
    height: 30px;
    background-color: #e50914;
    color: #fff;
    transition: transform 0.3s;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    letter-spacing: 0.04em;

    &:hover {
      opacity: 0.5;
      transform: scale(1.05);
    }
  }
}

#scrollToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  opacity: 0.7;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;
  behavior: "smooth";

  &:hover {
    opacity: 0.5;
    transform: scale(1.05);
  }

  &::before {
    content: "\2191";
    font-size: 34px;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background-color: #e50914;
    color: #fff;
    transition: background-color 0.3s;
  }
}

@media screen and (max-width: 980px) {
  #scrollToTop {
    bottom: 10px;
    right: 10px;

    &::before {
      font-size: 20px;
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
  }
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 5.7rem !important;
  }

  .featured-details,
  .movie-details {
    img {
      width: 765px;
      height: 450px;
    }

    h2 {
      font-size: 3.2rem;
    }

    button {
      height: 40px;
      width: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  }
}

@media screen and (max-width: 414px) {
  .featured-details {
    button {
      margin-bottom: 30px;
    }

    img {
      width: 310px !important;
      margin: auto;
    }

    h2 {
      max-width: 300px;
      margin: auto;
      padding-top: 20px;
    }
  }

  .movie-description {
    p {
      max-width: 300px !important;
      margin: auto;
    }
  }

  .movie-list {
    .movie-details {
      img {
        width: 300px !important;
        margin: auto;
      }

      h2 {
        max-width: 300px !important;
        margin: auto;
      }
    }
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .featured-details {
    img {
      width: 500px;
      height: 300px;
    }
  }

  .movie-details {
    img {
      width: 400px !important;
      height: 250px !important;
    }

    h2 {
      width: 400px;
      margin: auto;
    }

    p {
      width: 400px;
    }
  }
}

@media (min-width: 414px) and (max-width: 576px) {
  .featured-details {
    img {
      width: 400px;
      height: 300px;
    }

    h2 {
      width: 400px;
      margin: auto;
    }

    p {
      width: 400px;
      display: inline-block;
    }
  }

  .movie-details {
    img {
      width: 300px !important;
      height: 250px !important;
    }

    h2 {
      width: 300px;
      margin: auto;
    }

    p {
      width: 300px;
    }
  }
}

@media screen and (max-width: 1448px) {
  .movie-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 20px;

    .movie-details {
      align-items: start;

      img {
        width: 100%;
        height: 300px;
      }
    }
  }
}

@media screen and (min-width: 1448px) {
  .movie-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 20px;

    .movie-details {
      align-items: start;

      img {
        width: 100%;
        height: 300px;
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .movie-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 0px;

    .movie-details {
      align-items: start;

      img {
        width: 100%;
        height: 300px;
        margin-bottom: -25px;
      }
    }
  }
}

@media screen and (min-width: 980px) {
  #genreTitle {
    font-size: 2.2rem !important;
  }

  .featured-details {
    h2 {
      font-size: 4rem !important;
    }

    p {
      font-size: 1.8rem !important;
      margin-bottom: 70px;
    }
  }
  .movie-details {
    h2 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.65rem;
    }

    .movie-description {
      padding-bottom: 10px;
    }
  }

  button,
  li {
    font-size: 1.2rem;
  }
}
</style>
