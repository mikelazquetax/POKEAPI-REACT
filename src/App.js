
import "./styles/main.scss";
import Home from './pages/Home/Home';
import SinglePokemon from './pages/SinglePokemon/SinglePokemon';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"




function App() {

  return (
    <div  className="App">
 
    <Router>
    <Routes>
    <Route path= "/" element={<Home/>} />
    
    <Route path="SinglePokemon/:pname" element={<SinglePokemon/>} />
      </Routes>
     </Router>

    </div>
  );
}

export default App;
