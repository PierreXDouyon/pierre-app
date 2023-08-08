# pierre-app

# Movie Recommendations App

Welcome to the Movie Recommendations App! This app lets users discover random movie suggestions at the click of a button. It utilizes an external movie database API to fetch movie information.

## Features

- Click the "Recommend" button to get a random movie suggestion.
- View movie details after receiving a recommendation.

## Technologies Used

- Vue.js
- External Movie Database API

## Getting Started

1. Clone the repository.
2. Navigate to the project folder.
3. Install dependencies using `npm install`.
4. Run the app using `npm run serve`.

## How to Use

1. Open the app in your web browser.
2. Click the "Recommend" button to receive a random movie suggestion.
3. Movie details will be displayed after receiving a recommendation.

## API Integration

To fetch movie data, this app utilizes the [External Movie Database API](https://rapidapi.com/SAdrian/api/moviesdatabase/) through Axios. Below is an example of how the API is used:

```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/seasons/%7BseriesId%7D',
  headers: {
    'X-RapidAPI-Key': 'd5527babbcmsh7bb944b972dcafap14db5ajsnb9bfec09dd0f',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
