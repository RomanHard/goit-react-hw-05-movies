import { NavLink, Route, Routes } from "react-router-dom";
import  MoviesPage  from "./movies/Movies";

export const App = () => {
  return (
    <div>
      <nav>
      <NavLink to="/" end>
    <span className="NavLink-text">Home</span>
      </NavLink>
    <NavLink to="/movies">
    <span className="NavLink-text">Movies</span>
  </NavLink> 
      </nav>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/Movies" element={<MoviesPage />}>
          <Route path="Cast" element={<div>Cast</div>} />
          <Route path="Reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

