export const MovieCard = ({ movieData }) => {
  return (
    <div className="movieCard">
      <div className="movie-img">
        <img
          src={movieData.Poster}
          alt={movieData.Title}
          title={movieData.Title}
        />
      </div>
      <div className="movie-info">
        <h2>
          {movieData.Title} ({movieData.Year})
        </h2>
        <p>Type: {movieData.Type}</p>
      </div>
    </div>
  );
};
