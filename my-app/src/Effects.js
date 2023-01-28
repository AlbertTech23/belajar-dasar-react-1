import './App.css';
import React, { useState } from 'react';
import { Text } from './Text';


function Effects(){
    const [showText,setShowText] = useState(false);

    return(
        <div>
            <button 
            onClick={()=>{
                setShowText(!showText)
                }}
            >
                Show Text
            </button>

            {showText &&  <Text />}
        </div>
    )
}

export default Effects;