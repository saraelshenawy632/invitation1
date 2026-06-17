import Navbar from "./components/Navbar";
import Home from './components/home'
import Music from "./components/Music";
import Wishes from "./components/wishes";
import Details from "./components/details";
import RSVP from "./components/RSVP";
import { Routes, Route } from "react-router-dom";
import "./App.css";


function App(){

return(

<div className="app">
  <Navbar/>

  <main>
    <Routes>
        <Route path="/" element={<Home/>}/>

<Route 
path="/details" 
element={<Details/>}
/>
 <Route path="/wish" element={<Wishes/>}/>
<Route path="/RSVP" element={<RSVP />}/>
    </Routes>
  </main>


<Music />
</div>

)

}

export default App;
