import './App.css';
import Home from './components/Home'
import {
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="favorites" element={<FavList />} /> */}
    </Routes>
    </>
  );
}

export default App;
