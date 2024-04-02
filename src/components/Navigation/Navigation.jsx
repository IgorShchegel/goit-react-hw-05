import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import css from "./Navigation.module.css"


const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
     <li> <NavLink to="/">Home</NavLink></li>
          <li>  <NavLink to="/movies">Movies</NavLink></li>
          </ul>
        </nav>
    </header>
       <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      
    </div>
  )
}

export default Navigation