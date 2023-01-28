import "./App.css";
import { useState } from "react";

function InputText (){
    const [shownText, setShownText] = useState(true);
    const [tulisText, setTulisText] = useState("");
    
    const handleTulisText = (event) =>{
        setTulisText(event.target.value);
    };
    return(
        <div className="Input">
            <button onClick={()=>{setShownText(false)}}>Show/Hide</button>
            <input type={"text"} onChange={handleTulisText}/>
            {tulisText}
        </div>
    )
}


export default InputText;