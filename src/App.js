import './App.css';
import 'tw-elements';
import {
  Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import MouseParticles from 'react-mouse-particles'

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <MouseParticles g={1} color="#251D58" cull="col,image-wrapper"/>
    </div>
  );
}

export default App;


