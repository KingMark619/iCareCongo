import React,{useEffect,useRef} from 'react'
import './Card.module.css'
import Chart from 'chart.js/auto'
import Image from 'next/image';
import { arrowUp } from '@/assets/icons';


const Card = () => {
    const canvasEl = useRef(null);

  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [60, 52, 59];

    const labels = [
      "Jan",
      "Feb",
      "Mar",
    ];
    const data = {
      labels: labels,
      type:'line',
      datasets: [
        {
        //   backgroundColor: gradient,
          label: "Patients",
          data: weight,
        //   fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3
        }
      ]
    };
    const config = {
      type: "line",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });
  return (
    <div style={{
      maxWidth:'30%',
      width:'30%',
      backgroundColor:'white',
      padding: 10
    }}>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignContent:'center',
        }}>
            <p style={{
              fontWeight:'600',
              color:'black',
            }}>Offline Consultation</p>
            <p style={{
              fontWeight:'600',
              color:'black',
            }}>. . .</p>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignContent:'center',
        }}>
            <div  style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            alignContent:'center',
        }}>
                <p style={{
              fontWeight:'600',
              fontSize:28,
              color:'black',
            }}>101</p>
            <div style={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
            }}>
              <div style={{
                backgroundColor:'green',
                borderRadius:30,
                width:25,
                height:25,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
              }}>
                <Image
                src={arrowUp}
                alt='arrow'
                width={15}
                height={15}
              />
              </div>
                <p style={{
                    fontWeight:'600',
                    fontSize:12,
                    color:'green'
                  }}>3.41%</p>
            </div>
             
            </div>
            <div>
                {/* Progress Bar here */}
                <canvas id="myChart" ref={canvasEl} height="100" />
            </div>
        </div>
    </div>
  )
}

export default Card