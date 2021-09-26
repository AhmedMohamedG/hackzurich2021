import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Question(props) {
  const {questionObj : question,Counter} = props;
  console.log( 'min',question.answers[0].number)
  console.log( 'max',question.answers[ question.answers.length -1].number)
  const marks = []

  question.answers.forEach(answer => {
    marks.push({
      value: parseInt(answer.number, 10),
      label: answer.text,
    })
  }) 
    
  console.log('marks', marks)
   
  /*const marks = [
    {
      value: question.answers[0].number,
      label: question.answers[0].text,
    },
    {
      value: question.answers[ question.answers.length -1].number,
      label: question.answers[ question.answers.length -1].text,
    },
  ];*/
  
  function valuetext(value) {
    return value;
  }

  return (
    <div id={`question${Counter}`}className="question">
        <p>{question.text}</p>
        

    <div className="sliedContainer">

    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        getAriaValueText={valuetext}
        step={null}
        defaultValue={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={parseInt(question.answers[0].number, 10)}
        max={parseInt(question.answers[ question.answers.length -1].number, 10)}
      />
    </Box>
    </div>
    <div>
    <input  type="image" 
            alt="Record"
            src="./mic.png"/>
    </div>

   </div>
  );
}

export default Question;