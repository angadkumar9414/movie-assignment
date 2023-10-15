import MovieCard from "./MovieCard";

function Movies(props) {
  return (
    <ul className="movies">
    {props.moviesList.map(movie => (
      <li key={movie.id}>
        <MovieCard  moviecard = {movie} />
      </li>
))}
</ul>
    
  );
}

export default Movies;
