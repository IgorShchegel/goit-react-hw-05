import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import {  searchMovie } from '../../service/movieApi';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';

const MoviesPage = () => {

  
  const [searchResults, setSearchResults] = useState([]);
    const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');



  
  useEffect(() => {
    const handleSearch = async () => {
      if (!searchQuery) return;
      setLoader(true);
      try {
        const response = await searchMovie(searchQuery);
        setSearchResults(response.data.results);
      } catch (error) {
        setError(error)
      } finally {
        setLoader(false);
      }
    };
    handleSearch();
  }, [searchQuery]);
  

  const onHandleSubmit = value => {
    setSearchParams({ query: value });
  };


  return (
    <div>
      <SearchForm searchQuery={searchQuery} onHandleSubmit={onHandleSubmit} />
       {loader && <Loader />}
      {error && <ErrorMessage message={error}/>}
      {searchResults.length>0 && <MovieList movies={searchResults} />}
      
    </div>
  )
}

export default MoviesPage