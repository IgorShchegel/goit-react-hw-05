
const MovieCast = ({ cast }) => {
  return (
    <div>
    {cast.map((actor) => (
      <div key={actor.id}>
        <img
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
          alt={actor.name}
        />
        <p>{actor.name}</p>
        <p>Character: {actor.character}</p>
      </div>
    ))}
  </div>
  )
}

export default MovieCast