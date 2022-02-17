import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FavList from "./components/FavList";
import Navbarcom from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [favListData, setFavListData] = useState();

  async function getDataFromDB() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
    const data = await response.json();
    setFavListData(data);
  }

  useEffect(() => {
    getDataFromDB();
  }, []);

  return (
    <>
      <Navbarcom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<FavList favListData={favListData}/>} />
      </Routes>
    </>
  );
}

export default App;
