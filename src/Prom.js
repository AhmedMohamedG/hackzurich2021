import React, { useState } from 'react';
import Question from './Question';
function Prom(props) {
  const {prom} = props;
  let questionsCounter = 0;
  return (
    <div className="App">
        {prom.questions.sections.map((section,index )=>{
            const sectionIndex = index;
            return(
                <div className="QuestionsSection">
                {section?.tytle !== 'NoTitle'?<h1>{ section?.tytle}</h1>:''}
                {section.questions.map((question,index) => {
                    questionsCounter++
                    return <Question 
                            Counter = {questionsCounter}
                            key={`${sectionIndex}-${index}`}
                            questionObj={question} />
                })}
                </div>

            )
        })}
   </div>
  );
}

export default Prom;