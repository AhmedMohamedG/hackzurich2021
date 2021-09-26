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

const jsonData = require('./ICHOM_PROM_breast_cancer.json')
export const get_breastcancerPROM = (patientName,patientID )=>{
    const questionsObject = { patientName,
                                 patientID,
                                 type:'breastcancerPROM',
                                 questions:jsonData }
    return JSON.stringify(questionsObject);
}

export const get_lungcancerPROM = (patientName,patientID )=>{
    const questionsObject = {patientName,
                                patientID,
                                type:'get_lungcancerPROM',
                                questions:breastcancerPROM }
    return JSON.stringify(questionsObject);
}

export const get_coloncancerPROM = (patientName,patientID )=>{
    const questionsObject = { patientName,
                                patientID,
                                type:'coloncancerPROM',
                                questions:breastcancerPROM  }
    return JSON.stringify(questionsObject);
}

