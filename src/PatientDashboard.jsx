import React, { useState } from 'react';
import Prom from './Prom.js'
function PatientDashboard(props) {
  const {user, proms} = props;
  
  return (
    <div className="App">
{proms.map(prom =>{
    return <Prom prom={prom} />
})
}    </div>
  );
}

export default PatientDashboard;
