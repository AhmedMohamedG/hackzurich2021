import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Question(props) {
  const {questionObj : question,Counter} = props;
  console.log( 'min', question.answers[0].number)
  console.log( 'max', question.answers[ question.answers.length -1].number)
  //const marks = []

  /*
  question.answers.forEach(answer => {
    marks.push({
      value: parseInt(answer.number, 10),
      label: answer.text,
    })
  })
  */
  const marks = [
    {
      value: 0,
      label: 'bad',
    },
    {
      value: 1,
      label: '',
    },
    {
      value: 2,
      label: '',
    },
    {
      value: 3,
      label: '',
    },
    {
      value: 4,
      label: 'excellent',
    },
  ];
    
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
        

    <div className="slideContainer">

    <Box sx={{ width: 300}} alignItems="center">
      <Slider
        aria-label="Custom marks"
        getAriaValueText={valuetext}
        step={null}
        defaultValue={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={0} //question.answers[0].number
        max={4}
      />
    </Box>
    </div>


   </div>
  );
}

export default Question;