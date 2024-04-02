import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reviewsMovie } from "../../service/movieApi";
import Loader from "../Loader/Loader";
import { ErrorMessage } from "formik";


const MovieReviews = () => {

   const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

   useEffect(() => {
    const fetchMovieDetails = async () => {
     
      setLoader(true);
      try {
        
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
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
    { reviews.length>0 ? reviews.map((review) => (
      <div key={review.id}>
        <h4>{review.author}</h4>
        <p>{review.content}</p>
      </div>
    )) : <p> We dont have any reviews for this movie </p>}
  </div>
  )
}

export default MovieReviews