import "./App.css";
import { useState } from "react";

function Berhitung (){
    const [hitungan, setHitungan] = useState(0);

    const tambahHitungan = () =>{
        setHitungan(hitungan+1);
        console.log(hitungan);
    }

    const kurangHitungan = () => {
        setHitungan(hitungan-1);
    }
    return (
        <div>
            <h3>{hitungan}</h3>
            <button onClick={tambahHitungan}>Tambah</button>
            <button onClick={kurangHitungan}>Kurang</button>
        </div>
        
    )
}

export default Berhitung;