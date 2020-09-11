This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2fc21282-c48d-4fe5-8877-2acdc7a49d4b/deploy-status)](https://app.netlify.com/sites/suspicious-murdock-524721/deploys)

## Shopify

This is a simple ReactJs App that utilises the free backend API built by [The Open Movie Database (OMDb API)](http://www.omdbapi.com/).

The App when successfully launched can be used to search for movies, and also for nominating your top favourite movies

## Installing locally

    $ git@github.com:Jobsy/shoppies.git
    $ cd shoppies
    $ npm install

## Using the Application locally

    When the user search for movies, the following API call is made:

    1) GET https://www.omdbapi.com/?s=${props.title.title}&apikey=[your api key]

    with content type header “application/json” JSON data of the format:

    Where props.title.title = to the movies title passed into the input field (this is a required field)

    The returned JSON look like:

      {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
        config: {url: "https://www.omdbapi.com/?s=rambo&apikey=6c37230a", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
        data:
        Response: "True"
        Search: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        totalResults: "45"
        __proto__: Object
        headers: {cache-control: "public, max-age=86400", content-type: "application/json; charset=utf-8", expires: "Thu, 10 Sep 2020 09:32:50 GMT", last-modified: "Thu, 10 Sep 2020 08:32:50 GMT"}
        request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
        status: 200
        statusText: ""

    Where the "Search" is an array of objects containing all the movies found. Below is how each movie object looks like

      0:
        Poster: "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg"
        Title: "Rambo"
        Type: "movie"
        Year: "2008"
        imdbID: "tt0462499"

    If the app is opened while the API requests are being made it show a suitable loading screen

## Using the Application via Browser

Simply navigate to the app's homepage [The Shoppies](https://suspicious-murdock-524721.netlify.app/).

Enter your favourite movie title (you can only search by title), then hit search button to view the search results for your movie title. It returns "Movie not found!" if movie title doesn't exit on the data base.

## Structure and Naming

```
    Shoppies
    |
    ├── build
    |
    ├── public
    |
    ├── src
    |
    ├── package-lock.json
    |
    ├── package.json
    |
    └── README.md

```
