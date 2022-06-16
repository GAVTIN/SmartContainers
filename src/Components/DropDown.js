import React, { useEffect, useState } from "react";
import { Data } from "../Data/Data";
// import HomePageContainer from './HomePageContainer'
import "../App.css";
export default function DropDown({name}){
  const [val, setVal] = useState([]);
  const [tId, setTId] = useState(null);
  
  useEffect(() => {
    setVal(Data);
  }, [tId]);
  return (
    <div className="home-page">
      <div className="tracker">
        <label htmlFor="KegTracker ID">Location</label>
        <select name="KegTracker ID">
          {val.map((item, key) => (
            <option
              key={item.kegtrackerId}
              value={item.name}
              onSelect={(e) => setTId(e.target.value)}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};