import React from "react";
// import { Data } from "../Data/Data";
import Chart from 'react-apexcharts'

const Inventory = () => {
  
  return (

    <div className="container-fluid mb-5">
    <Chart
    type="bar"
    width={1380}
    height={700}

    series={[
        {
            name:"The Inventory Data",
            data:[6, 55, 9, 9, 12, 6, 3]
            
        }
        
    ]}


    options={
            {
            title:{
                text: "Bar Chart",
                style: {fontSize:40}
            },
            plotOptions: {
            bar: {
            borderRadius: 4,
            horizontal: true,
                }
            },
            xaxis:{
                categories:["Pale Ale", "India Pale Ale", "Red Ale", "Sour", "Lager", "Stout", "Session Pale Ale"]
                },
            yaxis:{
                labels:{
                    formatter:(val)=>{return `${val}`}
                }
            }
            }
    }
            />
    </div>
  );
};

export default Inventory;
