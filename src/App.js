import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieList from "./pages/movieList";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/moviesList" element={<MovieList />}></Route>
          <Route exact path="/contacts" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
