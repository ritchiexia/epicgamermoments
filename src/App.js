import "./styles.css";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Games from "./components/Games"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/games" element={<Games/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
