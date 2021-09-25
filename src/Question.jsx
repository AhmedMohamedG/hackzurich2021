import React, { useState } from 'react';

function Question(props) {
  const {questionObj : question,Counter} = props;
  return (
    <div id={`question${Counter}`}className="question">
        <p>{question.text}</p>
        {question.answers.map(answer => <span>
                                            {answer.number}
                                             {answer.text}
                                            </span>)}
   </div>
  );
}

export default Question;