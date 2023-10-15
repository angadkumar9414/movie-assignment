function MovieCard(props){
    const movie = props.moviecard
    // console.log(movie)
    return(
      <div className="movie-card">
        <div className="movie-thumbnail">
            <img
         src= {`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
          <h2 className="movie-title">{movie.title}</h2>
        </div>
        
        
      </div>

    )
}

export default MovieCard;