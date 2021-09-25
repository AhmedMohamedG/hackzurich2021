import React, { useState } from 'react';
import Prom from './Prom.js'
function PatientDashboard(props) {
  const {user, proms} = props;
  
  return (
    <div className="Patientdashboard">
{proms.map(prom =>{
    return <Prom prom={prom} />
})
}    </div>
  );
}

export default PatientDashboard;
