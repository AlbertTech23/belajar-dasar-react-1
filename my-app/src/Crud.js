import './App.css';
import React, { useState } from 'react';

function ToDoList (){
    const [daftarKerja,setDaftarKerja] = useState([]);
    const [tambahDaftarKerja,setTambahDaftarKerja] = useState("");
    
    const handleChange =(event) => {
        setTambahDaftarKerja(event.target.value)
    };

    const addTask = () => {
        const task = {
            id: daftarKerja.length === 0 ? 1 : daftarKerja[daftarKerja.length-1].id +1,
            taskName: tambahDaftarKerja,
        };
        setDaftarKerja([...daftarKerja, task]);
    };

    const delTask = (id) => {
        setDaftarKerja(daftarKerja.filter((task)=> (task.id !== id)));
    }

    return(
        <div className='App'>
            <div className='addTask'>
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='list'>
            {daftarKerja.map((task)=>{
                return(
                    <div>
                        <h1>{task.taskName}</h1>
                        <button onClick={() => delTask(task.id)}>X</button>
                    </div>
                )
            })}
            </div> 
        </div>
    )
}

export default ToDoList;