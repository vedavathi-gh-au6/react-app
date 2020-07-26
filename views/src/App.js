import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Upload from "./component/Upload";
import ImageCarousel from "./component/ImageCarousel";
import NavBar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <NavBar />    
    <ImageCarousel />
    
    </div>
    );
}
export default App;