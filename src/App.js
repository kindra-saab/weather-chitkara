import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Form from './Components/Form/Form'
import Information from './Components/Information/Information';
import axios from 'axios'

function App() {
        let count=0;
        const [state,setState] = useState({})
    const getDataFromServer = (city)=>{
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`).then((res)=>{
         console.log(res.data)
         setState(res.data)
       }, count=1)
    }
  return (
    <div className="App">
     <h2 className="text-white">Weather App</h2>
     <Form getDataFromServer={getDataFromServer} />
     {Object.keys(state).length===0?<div><h2 className="text-danger">Data is Not Available</h2></div>:<Information info={state} />}
    </div>
  );
}

export default App;
