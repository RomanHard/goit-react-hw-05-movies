import { NavLink, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/Movies" element={<Movies />}>
          <Route path="Cast" element={<div>Cast</div>} />
          <Route path="Reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

