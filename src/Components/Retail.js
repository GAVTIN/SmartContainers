import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'


const Retail = ({name, freq}) => {
    // const [nm, setNm] = useState([])
    useEffect(()=>{
        
    },[])
    

  return (
    <>
        <div className="conatiner-fluid mt-3 mb-3">
            <h1 className='box'>The Retail Full Product</h1>
            <Chart
            type="donut"
            width={1349}
            height={550}
            series={[1, 1, 14, 9, 9, 3, 2, 5, 9, 8, 8, 3, 6, 3, 3, 7, 3, 4, 1, 1]}
            // series={[...freq]}
            options={{
                labels:["Brewdog Pale", "Punk IPA", "Elvis Juice", "5AM Saint", "Quench Quake", "Lost Lager", "Duopolis", "Kingpin Gluten Free", "Triple Hazy Jane 9.5%", "Double Hazy", "Punk AF", "Lost AF", "Hoppy Christmas", "Jet Black Heart Nitro", "Get Out Claus", "Clockwork Tangerine", "Dead Pony Club", "Jagged Edge", "Indie", "Mistletoe Mafia"],
                // labels:[...name],
                title:{
                    text: "Product Availability"
                },
                plotOptions:{
                    pie:{
                        donut:{
                            labels:{
                                show:true,
                                total:{
                                    show:true
                                }
                            }
                        }
                    }
                }
            }}
            />
        </div>
    </>
  )
}

export default Retail