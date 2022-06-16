import React, { useEffect } from 'react';
import Chart from 'react-apexcharts'


export default function Retail(prop){
    // const [nm, setNm] = useState([])
    const arr1 = prop.name;
    const arr2 = prop.value;
    useEffect(()=>{
        
    },[])
    

  return (
    <>
        <h1 className='box'>Product Availability</h1>
        <div className="conatiner-fluid mt-2 mb-5">
            <div style={{"display":"flex"}}>
            <div style={{"display":"flex","border":"2px solid black","margin-left":"2rem"}}>
                <div style={{"width":"11rem"}}>
                {
                arr1.map((item) => (
                    <p key={item}>{item}</p>
                ))
                }
                </div>
                <div style={{"line-height":"1.15rem"}}>
                {
                arr2.map((item) => (
                    <p key={item}>{item}</p>
                ))
            }
                </div>
            </div>
            <Chart
            style={{"width":"50rem","position":"sticky"}}
            type="donut"
            width={1349}
            height={550}
            // series={[1, 1, 14, 9, 9, 3, 2, 5, 9, 8, 8, 3, 6, 3, 3, 7, 3, 4, 1, 1]}
            series={arr2}
            options={{
                // labels:["Brewdog Pale", "Punk IPA", "Elvis Juice", "5AM Saint", "Quench Quake", "Lost Lager", "Duopolis", "Kingpin Gluten Free", "Triple Hazy Jane 9.5%", "Double Hazy", "Punk AF", "Lost AF", "Hoppy Christmas", "Jet Black Heart Nitro", "Get Out Claus", "Clockwork Tangerine", "Dead Pony Club", "Jagged Edge", "Indie", "Mistletoe Mafia"],
                labels:arr1,
                plotOptions:{
                    pie:{
                        expandOnClick: true,
                        donut:{
                            labels:{
                                show:true,
                                total:{

                                    show:true,
                                    fontSize: 30,
                                    color: '#373d3f'

                                }
                            },
                            value: {
                                     show: false
                            },
                            dataLabels: {
                                    enabled: false,
                            }
                        }
                    }
                }
            }}
            />
            </div>
        </div>
    </>
  )
}