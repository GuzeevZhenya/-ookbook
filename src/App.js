import "./App.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Home";
import { About } from "./Components/Pages/About/About";
import { Contact } from "./Components/Pages/Contact/Contact";
import { NotFound } from "./Components/Pages/NotFound/NotFound";
import { Movie } from "./Components/Pages/Movie/Movie";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/home"} />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contacts"} element={<Contact />} />
        <Route path={"/movies/:title"} element={<Movie />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
