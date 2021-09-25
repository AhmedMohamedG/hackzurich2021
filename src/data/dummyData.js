const breastcancerPROM = {
    sections:[
    {tytle:'NoTitle',
    questions:[{
        type:'MultiAnswers',
        text:'Do you have any trouble doing strenuous activities, like carrying a heavy shopping bag or a suitcase?',
        answers:[{text: 'Not at all', number:'1'},{text:'A little',number:'2'}]
    },
    {
        type:'MultiAnswers',
        text:'Do you have any trouble taking a long walk?',
        answers:[{text: 'Not at all', number:'1'},{text:'A little',number:'2'}]
    },
    ],},
    {tytle:'During the past week:',    
    questions:[{
            type:'MultiAnswers',
            text:'Were you limited in doing either your work or other daily activities?',
            answers:[{text: 'Not at all', number:'1'},
            {text:'A little',number:'2'}]
        },
        {
            type:'MultiAnswers',
            text:'Were you limited in pursuing your hobbies or other leisure time activities?',
            answers:[
                {text: 'Not at all', number:'1'},
                {text:'A little',number:'2'}
                ]
        },
        ]
    }

]
    
}


export const send_breastcancerPROM = (patientName,patientID )=>{
    const questionsObject = { patientName,patientID,breastcancerPROM }
    return JSON.stringify(questionsObject);
}
