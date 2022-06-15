import React, { useEffect, useState } from "react";
import { Data } from "../Data/Data";
import {FaTemperatureHigh} from 'react-icons/fa'
import {FcChargeBattery} from 'react-icons/fc'
import {GiFullWoodBucketHandle} from 'react-icons/gi'
import GoogleMap from "./GoogleMaps";
import "../App.css";
export default function Home() {
  const [val, setVal] = useState([]);
  const [dat, setDat] = useState([]);
  useEffect(() => {
    setDat(Data);
  }, [val]);
//   const loc = {
//       lat : 35.7077714,
//       log : 51.2075668
//   };
  function handleChange(e) {
    let a = e.target.value;
    let b = a.split(",");
    setVal(b);
    console.log(parseFloat(b[4]))
  }
  
  return (
    <>
      <div className="id-selector">
        <label>TrackingId</label>
        <select name="TrackId" onChange={handleChange}>
          {dat.map((item) => (
            <option
              key={item.kegtrackerId}
              value={[
                item.kegtrackerId,
                item.temperature,
                item.volume,
                item.battery,
                item.latitude,
                item.longitude
              ]}
            >
              {item.kegtrackerId}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className="mid-page1">
            <div>
                <span className="mid2"><FaTemperatureHigh /></span>
                <h2>{val[1]}°C</h2>
            </div>
            <div className="mid1">
                <span className="mid1"><GiFullWoodBucketHandle/></span>
                <h4>Volume:{val[2]}%</h4>
            </div>
          
            <div className="mid1">
              <span className="mid1"><FcChargeBattery /></span>
              <h4>{val[3]}%</h4>
            </div>
        </div>
        <div className="bottom-page1">
          <button>{val[4]},{val[5]}</button>
          <GoogleMap lat={parseFloat(val[4])} lon={parseFloat(val[5])}/>

          {/* <h1>Latitude:{val[4]}</h1>
          <h1>Longitude:{val[5]}</h1> */}
        </div>
      </div>
    </>
  );
}

