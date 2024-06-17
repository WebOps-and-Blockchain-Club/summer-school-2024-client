import Signup from './pages/Signup';
import Login from './pages/Login';
import Alert from './component/Alert';
import { useState } from 'react';
// import Login from './pages/Login';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




function App() {

  const [Mode,setMode] = useState("Dark Mode");//Wther dark mode is enabled or not
  const toggleMode=()=>{
    if (Mode === 'Dark Mode'){
      setMode("Light Mode");
      showAlert("Dark Mode is enabled","good");
      document.getElementById('mode').className = "dark h-full";
    }
    else{
      setMode("Dark Mode");
      showAlert("Light Mode is enabled","good");
      document.getElementById('mode').className = "light h-full";
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  return (
    <div  id="mode" className='light h-full'>
    <Router> 
    <Alert alert={alert}/>
    <Routes>
    <Route exact path="/" element={<Signup showAlert={showAlert} mode={Mode} toggleMode={toggleMode}/>}/>
    <Route exact path="/login" element={<Login showAlert={showAlert} mode={Mode} toggleMode={toggleMode}/>}/>
  </Routes>  
   </Router> 
   </div>
  );
}

export default App;
