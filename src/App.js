import {  BrowserRouter as Router } from 'react-router-dom';

import Navbar from "./Components/Navbar"
import FirstSection from "./Components/FirstSection";
import SVGComponent from "./Components/Svg";
import NotesSection from "./Components/SecondSection";
import styles from "./styles.css"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <FirstSection/>
        <SVGComponent/>
        <NotesSection/>
      </Router>

    </div>
  );
}

export default App;
