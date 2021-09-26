import React, { useState } from 'react';
import Question from './Question';
import { Badge } from 'react-bootstrap';

function Prom(props) {
  const {prom} = props;
  let questionsCounter = 0;
  return (
    <div className="promContanier">
        {prom.questions.sections.map((section,index )=>{
            const sectionIndex = index;
            return(
                <div className="QuestionsSection">
                {section?.tytle !== 'NoTitle'?<h1>{ section?.tytle}</h1>:''}
                {section.questions.map((question,index) => {
                    questionsCounter++
                    return <Question
                            sectionLength = {section.questions.length} 
                            index = {index}
                            Counter = {questionsCounter}
                            key={`${sectionIndex}-${index}`}
                            questionObj={question} />
                })}
                </div>

            )
        })}
        <Badge bg="success"  size="xxl">Thanks for filling the eProm</Badge>
   </div>
  );
}

export default Prom;