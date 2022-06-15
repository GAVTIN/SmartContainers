import React, { useEffect, useState } from "react";
import { Data } from "../Data/Data";
// import HomePageContainer from './HomePageContainer'
import "../App.css";
const DropDown = () => {
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
              value={item.location}
              onSelect={(e) => setTId(e.target.value)}
            >
              {item.location}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown