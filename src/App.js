//HOC
import DefaultHOC from "./HOC/default.hoc"
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie} />
    </>
  );
}
// / , /movie
export default App;