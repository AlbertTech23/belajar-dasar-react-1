import "./App.css";

function Ternary(){
    const age = 19;
    const isGreen = true;


    return ( 
    <div className="Ternary">
        {age >=18 ? <h1 style={{color: "red"}}>OverAge</h1> : <h1 style={{color: "red"}}>UnderAge</h1>}
        <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>

        {isGreen && <button>Press The Button</button>}
    </div>
    );
}   

export default Ternary;