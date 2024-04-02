import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { ErrorMessage } from "formik";
import { castMovie } from "../../service/movieApi";

const MovieCast = () => {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

  useEffect(() => {
    const fetchMovieDetails = async () => {
     
      setLoader(true);
      try {
        
        const castResponse = await castMovie(movieId);
        setCast(castResponse.data.cast);

      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
        
      }
    };

    fetchMovieDetails();
   
  }, [movieId]);


  return (
    <div>
       {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
    {cast.map((actor) => (
      <div key={actor.id}>
        {actor.profile_path ? <img
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
          alt={actor.name}
        /> : <img src={defaultImg}  alt={actor.name} width={200} />}
        <p>{actor.name}</p>
        <p>Character: {actor.character}</p>
      </div>
    ))}
  </div>
  )
}

export default MovieCast