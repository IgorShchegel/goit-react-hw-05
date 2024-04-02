import { useEffect, useState } from "react";

import MovieList from '../../components/MovieList/MovieList';
 import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { dayMovie } from "../../service/movieApi";
import Loader from "../../components/Loader/Loader";


const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
   const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoader(true);

      try {
        const response = await dayMovie();
        setTrendingMovies(response.data.results);
      } catch (error) {
        setError(error)
      } finally {
        setLoader(false);
      }
    };

    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {loader && <Loader />}
      {error && <ErrorMessage message={error}/>}

      {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
    </div>
  )
}

export default HomePage