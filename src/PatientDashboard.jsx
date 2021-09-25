import React, { useState } from 'react';
import Prom from './Prom.js'
function PatientDashboard(props) {
  const {user, proms} = props[0];
  
  return (
    <div className="Patientdashboard">
{proms.map(prom =>{
    return <Prom prom={prom} />
})
}    </div>
  );
}

export default PatientDashboard;
