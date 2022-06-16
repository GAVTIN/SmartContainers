import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Inventory from "./Views/Inventory";
import KegAv from "./Views/KegAv";
import ProdAv from "./Views/ProdAv";
import Retail from "./Views/Retail";
// import Title from './Components/Title';
import SideBar from "./Views/SideBar";
import Title from "./Components/Title";

import {ProdName,ProdValue} from './Data/RetailData'
import {Product,Count} from './Data/InventoryData'



function App() {

  return (
    <BrowserRouter>
      <div className="main-class">
        <div className="left-content">
          <Title />
          <SideBar />
        </div>
        <div className="right-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory name={Product} value={Count}/>} />
            <Route path="/availability" element={<KegAv />} />
            <Route path="/product" element={<ProdAv />} />
            <Route path="/retail" element={<Retail name={ProdName} value={ProdValue} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
