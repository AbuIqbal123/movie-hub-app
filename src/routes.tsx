import { createBrowserRouter } from "react-router-dom";
import TvSeries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Mistake from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Mistake />,
  },
  {
    path: "/movies",
    element: <Movie />,
    errorElement: <Mistake />,
  },
  {
    path: "/TvSeries",
    element: <TvSeries />,
    errorElement: <Mistake />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
    errorElement: <Mistake />,
  },
]);
