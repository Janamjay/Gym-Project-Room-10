import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Card from "./Pages/SuccessStory/Card";
import Navbar from './component/Navbar/Navbar'
import Classes from "./Pages/Classes/Classes";

import Footer from "./component/Footer/Footer";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/classes" Component={Classes} />
        <Route path="/success" Component={Card} />
      </Routes>
       {/* <Footer/>  */}
    </>
  );
}

export default App;
