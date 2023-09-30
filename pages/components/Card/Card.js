import { useStateContext } from '@/pages/context/StateContext';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import { sun1,sun2, moon } from '@/assets/icons';
import { useAuthContext } from '@/pages/context/AuthContext';


const Card = () => {
  const { patients } = useStateContext()
  const [list, setList] = useState([])
  const [male,setMale] = useState(1)
  const [female,setFemale] = useState(0)
  const [greeting,setGreeting] = useState('Good Morning')
  const [emoji, setEmoji] = useState(sun1)
  const [quote, setQuote] = useState()

  const data = [
      ["Patients", "By sex"],
      ["Male", male ],
      ["Female", female]
    ]
    const options = {
      title: `Total patients ${patients?patients.length:''}`,
    };

  useEffect(() => {
    patients?
    patients.map(patient =>{
      if(patient.sex === "male"){
        setMale(male+1)
      } else if(patient.sex === "female"){
        setFemale(female+1)
      }
    }):console.log('patient not loaded')
    loadQuote()
    loadGreeting()
},[patients])

const loadGreeting =  () => {
  const time = new Date().getHours();

  if (time<12){
      setGreeting('Good Morning')
      setEmoji(sun1)
  } else if (time<17){
      setGreeting('Good Afternoon')
      setEmoji(sun2)
  } else if (time<23){
      setGreeting('Good Evening')
      setEmoji(moon)
  }
}

const loadQuote = async () => {
  const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7906c647abmsh22ecee665c24578p1e92f4jsn8c3b5b074ac9',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setQuote(result?.content)
  } catch (error) {
    console.error(error);
  }
}
  return (
    <div className="row mx-2">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <div style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems: 'flex-start',
              marginBottom:'1.5rem'
            }}>
              <h5 className="card-title">{greeting} Doctor</h5>
              <Image
                src={emoji}
                alt="sun"
                style={{
                  marginTop:"-10px",
                  marginRight:"-10px",
                }}
                width={40}
                height={40}
              />
            </div>
            <p className="card-text">{quote?quote:"Medicine is not only a science; it is also an art.It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided. - Paracelsus"}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"200px"}
            />
          </div>
        </div>
      </div> 
  </div>
  )
}

export default Card