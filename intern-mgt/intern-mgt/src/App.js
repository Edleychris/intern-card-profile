import React, {useState} from 'react';
import './App.css';
import Header from './component/Header/Header';
import InternCard from './component/InternCard';
import { Login } from './component/Form/Login';
import {internDetails} from './component/InternDetails';
import Button from './component/Button/Button';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = ()=>{
    setIsLoggedIn(true);
  }

  const handleLoggedOut =() => {
    setIsLoggedIn (false);
  }

  if (isLoggedIn){
    return (
      <div >
            <Header />
            <div className= 'app'>
            <Button onLogout = {handleLoggedOut} />
            <InternCard internData={internDetails} />
            </div>
      </div>
    )
  }
  return(
    <div>
    <Login onLogin={handleSubmit}/>
    </div>
  )

}
  export default App;