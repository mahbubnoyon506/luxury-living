import './App.css';
import 'tw-elements';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;


