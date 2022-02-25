import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
//import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Quiz from "./components/Quiz";
import './Style.css';


const App = () => {
  return (
      <div>
        <Routes>
          <Route exact path='/' element={ <Homepage/> } />
          <Route path="/quiz/apsc" element={<Quiz/>} />
        </Routes>
      </div>
  );
}

export default App;
