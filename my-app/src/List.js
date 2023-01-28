import "./App.css";

function List() {
    const users=[
        {name: "Dimas", age: 21}, {name: "Rafael", age: 19}, {name: "Gian", age: 18}];

    return (
        <div className="List"> 
            {users.map((user)=>{
                return <Tampil name={user.name} age={user.age}/>
            })}
        </div>
    ) 
}

const Tampil = (props) => {
    return <li>{props.name} {props.age}</li>
}

export default List;