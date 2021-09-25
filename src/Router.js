import React , {Component,Fragment} from 'react';
import Dashboard from './Dashboard';
import PatientDashboard from './PatientDashboard';
import VoiceRecorder from './VoiceRecorder';

import {
  BrowserRouter ,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter 
} from 'react-router-dom'


function Router(props) {

  return(
      <Fragment>
          <div className="main">
			<Switch>
			<Route path={`/dashboard`}  
			   render={(props) => { return <Dashboard {...props}
				  />} 
				  }/>
            <Route path={`/Patientdashboard`}  
			   render={(...props) => { return <PatientDashboard {...arguments}
				  />} 
				  }/>
            <Route path={`/voicerecoreder`}  
			   render={(props) => { return <VoiceRecorder {...props}
				  />} 
				  }/> 
            </Switch>
          </div>
      </Fragment>
      )
}
export default Router;
      

      