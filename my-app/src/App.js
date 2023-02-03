import './App.css';
import Job from './Job';
import Ternary from './Ternary';
import List from './List';
import Planet from './Planets';
import Berhitung from './Berhitung';
import InputText from './InputText';
import ToDoList from './Crud';
import Effects from './Effects';
import Predict from './Predict';
import Catfact from './Catfact';
import Excuser from './Excuser';

function App() {
  return <div className='App'>
    <div>
      <h1>Tambahan</h1>
      <h1>Tambahan yang kedua</h1>
      <h2>Tambahan bentrok</h2>
      {/* <User name="Albert" age={18} email="albert@albert.com" />
      <Job salary={10000} position="FrontEnd Dev" company="UMN" /> */}
      {/* <User name="Jason" age={19} email="jason@albert.com" />
      <Job salary={5000} position="Marketing" company="UMN" />
      <User name="Rafael" age={20} email="rafael@albert.com" />
      <Job salary={7500} position="Designer" company="Petra" /> */}
    </div>
    <div>
      {/* <Ternary />
      <List />
      <Planet /> */}
    </div>
    <div>
      {/* <Berhitung />
      <InputText /> */}
    </div>
    <br></br>
    <div>
      {/* <ToDoList /> */}
    </div>
    <div>
      {/* <Effects /> */}
    </div>
    <div>
      <Predict />
      <Catfact />
      <Excuser />
    </div>
  </div>;
}
  // const User = (props)=>{
  //   return(
  //   <div>
  //     <h1>{props.name}</h1>
  //     <h1>{props.age}</h1>
  //     <h1>{props.email}</h1>
  //   </div>
  //   );
  // }
  export default App;