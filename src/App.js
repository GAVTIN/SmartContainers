import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Inventory from "./Components/Inventory";
import KegAv from "./Components/KegAv";
import ProdAv from "./Components/ProdAv";
import Retail from "./Components/Retail";
// import Title from './Components/Title';
import SideBar from "./Components/SideBar";
import Title from "./Components/Title";
import {Data} from './Data/Data'

const count = {};
Data.forEach(e => count[e.Product] ? count[e.Product]++ : count[e.Product] = 1 );
const nam = [Object.getOwnPropertyNames(count)]
const frq = [Object.values(count)]



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
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/availability" element={<KegAv />} />
            <Route path="/product" element={<ProdAv />} />
            <Route path="/retail" element={<Retail name={nam} freq={frq} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
