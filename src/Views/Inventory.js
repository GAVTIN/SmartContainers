import React from "react";
// import { Data } from "../Data/Data";
import Chart from 'react-apexcharts'

export default function Inventory(prop){
    const arr1 = prop.name;
    const arr2 = prop.value;
    console.log(arr2)
//   const arr = [6, 55, 9, 9, 12, 6, 3];
  return (

    <div className="container-fluid mb-5">
    <Chart
    type="bar"
    width={1380}
    height={700}
    
    series={[
        {
            name:"The Inventory Data",
            data:arr2,
            strokeColor: '#C23829'
            
        }
        
    ]}


    options={
            {
            title:{
                text: "Bar Chart",
                style: {fontSize:20}
            },
            plotOptions: {
            bar: {
            borderRadius: 4,
            horizontal: true,
                }
            },
            chart:{
                 stacked: true
            },
            xaxis:{
                // categories:["Pale Ale", "India Pale Ale", "Red Ale", "Sour", "Lager", "Stout", "Session Pale Ale"]
                categories:arr1
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
