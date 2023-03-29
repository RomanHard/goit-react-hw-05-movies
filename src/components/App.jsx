import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
     <nav>
        <NavLink><a href="/">Home</a></NavLink>
        <NavLink> <a href="/Movies">Movies</a></NavLink>
     </nav>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/Movies" element={<div>Movies</div>} />    
        <Route path="*" element={<div>Not Found</div>} />   
        <Route path="Cast" element={<div>Cast</div>} />
        <Route path="Reviews" element={<div>Reviews</div>} />
      </Routes>
    </div>
  );
};
