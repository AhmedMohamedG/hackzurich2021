import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VoiceRecorder from './VoiceRecorder';
import { Accordion, Button,ProgressBar } from 'react-bootstrap';

function Question(props) {
  const {questionObj : question,Counter ,sectionLength ,index} = props;
  const progressPercentage = (((parseInt(index, 10) +1 )/ parseInt(sectionLength, 10)) *100).toFixed(1)
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

const handleClick_next = e=>{
  e.preventDefault();
  document?.getElementById?.(`question${Counter+1}`)?.scrollIntoView?.({behavior: "smooth"});
}

const handleClick_prev = e=>{
  e.preventDefault();
  document?.getElementById?.(`question${Counter-1}`)?.scrollIntoView?.({behavior: "smooth"});
}
  return (
    <div id={`question${Counter}`}className="question">
      <p>Progress for that section:</p>
      <ProgressBar now={progressPercentage} label={`${progressPercentage }%`} />
        <p className="questionText">{question.text}</p>
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
    
   
    <div className="questionMedia">
    </div>
    </div>

    <Accordion >
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <input  type="image"
            alt="Record"
            src="https://raw.githubusercontent.com/AhmedMohamedG/hackzurich2021/master/public/cam.png"
            />
    </Accordion.Header>
    <Accordion.Body>
        <input type="file" accept="image/*" capture/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>
    <input  type="image"
            alt="Record"
            src="https://raw.githubusercontent.com/AhmedMohamedG/hackzurich2021/master/public/mic.png"
            />
    
    </Accordion.Header>
    <Accordion.Body>
          <VoiceRecorder />
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Button 
variant="primary"
className='questionButtons'
onClick={e => handleClick_next(e)}>
  Next
</Button>
<Button 
variant="primary"
className='questionButtons'
onClick={e => handleClick_prev(e)}>
  Previous
</Button>
   </div>
  );
}

export default Question;