import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from './MovieDetailsPage.module.css'
import { castMovie, detailsMovie, reviewsMovie } from "../../service/movieApi";


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
 
  const goBack = useRef(location?.state?.from ?? '/');
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  

  useEffect(() => {
    const fetchMovieDetails = async () => {
     
      setLoader(true);
      try {
        const detailsResponse = await detailsMovie(movieId);
        setMovieDetails(detailsResponse.data);
          
        const castResponse = await castMovie(movieId);
        setCast(castResponse.data.cast);

        const reviewsResponse = await reviewsMovie(movieId);
        setReviews(reviewsResponse.data.results);
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
       <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
        {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieDetails &&
        <div className={css.detail}>
      <div className={css.detail}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
        alt={movieDetails.title}
            /></div>
          <div>
          <h1>{movieDetails.title}({(movieDetails.release_date).slice(0, 4)})</h1>
          <p><b>Overview</b> :<br /> {movieDetails.overview}</p>
          <p><b>Genres</b> : {<ul className={css.list}>
    {movieDetails.genres.map((genre) => (
      <li key={genre.id}>
         
           <p>{genre.name}</p> {' '}
          
       
      </li>
    ))}
            </ul>}
            </p>
          </div>
        </div>
      }
      <p>Additional information</p>
      <div>
        <ul>
       <li> <Link to="cast">Cast</Link></li>
         <li> <Link to="reviews">Reviews</Link></li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast cast={cast} />} />
         <Route path="reviews" element={<MovieReviews reviews={reviews} />} /> 
        </Routes>
      </Suspense>
    
      
    </div>
  )
}

export default MovieDetailsPage