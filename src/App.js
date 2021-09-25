import './App.css';
import {get_breastcancerPROM} from './data/dummyData';
import users from './data/dummyUserData';
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import VoiceRecorder from './VoiceRecorder';
import PatientDashboard from './PatientDashboard'
import Router from './Router'
import Button from '@mui/material/Button';
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";
import NavBar from './NavBar'
function App() {
  console.log('json data', JSON.parse(get_breastcancerPROM('patient1','patient1')))
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [user, setUser] = useState(false);
  const [proms, setProms] = useState([]);
  let history = useHistory();


  const getProms = (obj) =>{
    const {userName , userID , conditions} = obj;
    const proms = [];
    conditions.forEach(element => {
  
        if(element ==='breastCancer'){
              proms.push(JSON.parse(get_breastcancerPROM(userName,userID)))
              }
        if(element === 'lungCancer'){
          proms.push(JSON.parse(get_breastcancerPROM(userName,userID)))
          }
        if(element === 'colonCancer') {
          proms.push(JSON.parse(get_breastcancerPROM(userName,userID)))
        }
      setProms(proms)
     console.log(proms)
    });
    
      
  }

  const handleCLick = e =>{
    e.preventDefault();
    setIsLogedIn(false);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const userName = e.target.nameInput.value;
    const userID = e.target.idInput.value;
    const userObject = users.find(elem => elem.userName === userName && elem.userID === userID )
    if(userObject){
      setIsLogedIn(true);
      setUser(userObject);
      getProms(userObject);
      history.push('/Patientdashboard')
    }else{
     document.getElementById('loginFormMsg').innerText = 'You have entered the wrong name or ID, please try again.'
    }
  }
  return (
    <div className="App">
      <nav className="App-nav">
        <Button onClick={e => handleCLick(e)}>
          logOut
        </Button>
        <NavBar />
      </nav>
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
          <Button 
          type="submit"
          value="LogIN"
          >
            Login
            </Button>
          <p id="loginFormMsg"></p>
      </form>:
     <Router 
        user= {user}
        proms = {proms}
     />
      }
    </div>
  );
}

export default withRouter(App);
