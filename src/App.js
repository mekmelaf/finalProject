import "../src/assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/nav";
import Footer from "./Components/footer";
import Exploration from "./Pages/exploration"
import Interactives from "./Pages/interactives"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home";


function App() {
 
  return (
    <div className="App">
      
      <BrowserRouter>
          <NavBar/>    
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Explorations" element={<Exploration/>}/>
            <Route path="/Interactives" element={<Interactives/>}/>
          </Routes> 
          <Footer/>
      </BrowserRouter>
        
    </div>
  )
}

export default App;