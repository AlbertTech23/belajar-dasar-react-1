import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function Catfact (){
    // fetch ("https://catfact.ninja/fact")
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data);
    // });

    const [faktaKucing,setFaktaKucing]=useState('');

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setFaktaKucing(res.data.fact);
        });
    }
    useEffect (()=>{
        fetchCatFact();
    },[]);

   


    return (
      <div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{faktaKucing}</p>
      </div>  
    );
}

export default Catfact;