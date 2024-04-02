import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation/Navigation';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  
  return (
    <div>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
           <Route path="*" element={<NotFoundPage />} />
       
        </Routes>
        </Suspense>
      </div>
  )
}

export default App
