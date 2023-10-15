import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "./Movies";

function App() {
  const [MovieList, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    moviesList();
  }, []);

  useEffect(() => {
    if (CheckMovies(query)) {
      moviesList();
    } else {
      searchList(query);
    }
},[query]);

  function moviesList() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then((res) => {
        setMovies(res.data.results);
        //  console.log(res.data.results);
      });
  }

  function searchList(query) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }
  // searchList();

  function onInput(inputQuery) {
    console.log(inputQuery);
    setQuery(inputQuery);
  }

  function CheckMovies(query){
if(query == ""){
  return true
}
return false

  }

  return (
    <div className="App">
      <div className="search-title">
 <input
        value={query}
        type="search"
        className="search"
        placeholder="Search For Movie Title..."
        onInput={(e) => onInput(e.target.value)}
      />
      </div>
     

      <Movies moviesList={MovieList} />
    </div>
  );
}

export default App;
