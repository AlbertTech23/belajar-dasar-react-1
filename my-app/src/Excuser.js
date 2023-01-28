import Axios from 'axios';
import { useState } from 'react';
import './App.css';

function Excuser (){
    
    const [generatedExcuse,setGeneratedExcuse] = useState('')
    const fetchData = (excuse) => {
        Axios.get (`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res)=>{
            setGeneratedExcuse(res.data[0].excuse)
        })
    }

    return (
        <div>
            <h1>Generate An Excuse</h1>
            <button onClick={()=>fetchData("party")}>Party</button>
            <button onClick={()=>fetchData("family")}>Family</button>
            <button onClick={()=>fetchData("office")}>Office</button>
            <p>{generatedExcuse}</p>
        </div>
    );
}

export default Excuser;