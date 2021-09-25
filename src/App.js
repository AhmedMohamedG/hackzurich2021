import './App.css';
import {send_breastcancerPROM} from './data/dummyData';
import users from './data/dummyUserData';
import React, { useState } from 'react';

function App() {
  console.log('json data', JSON.parse(send_breastcancerPROM('patient1','patient1')))
  const [isLogedIn, setisLogedIn] = useState(false);
  const handleCLick = e =>{
    e.preventDefault();
    setisLogedIn(false)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const userName = e.target.nameInput.value;
    const userID = e.target.idInput.value;
    const userObject = users.find(elem => elem.userName === userName && elem.userID === userID )
    if(userObject){
      setisLogedIn(true)
    }else{
     document.getElementById('loginFormMsg').innerText = 'You have entered the wrong name or ID, please try again.'
    }
    console.log(userObject)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={e => handleCLick(e)}>
          logOut
        </button>
      </header>
      {
        !isLogedIn ?
        <form 
          id="logInform"
          onSubmit={(e)=> handleSubmit(e)}
        >
          <div>
            <label>
              Name:
            </label>
            <input type='text'
                    name="nameInput"
                    id="nameInput"
                    required 
                    placeholder="Name"
                    title="Enter your name"
            >
            </input>
          </div>
          <div>
            <label>
              ID:
            </label>
            <input type='text'
                    name="idInput"
                    id="idInput"
                    required 
                    placeholder="ID"
                    title="Enter your ID"
            >
            </input>
          </div>
          <input 
          type="submit"
          value="LogIN"
          />
          <p id="loginFormMsg"></p>
      </form>:
      'you are loged in'
      }
      
      
    </div>
  );
}

export default App;
