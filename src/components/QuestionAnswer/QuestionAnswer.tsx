import { useCallback, useState } from 'react';
import axios from 'axios'
import './QuestionAnswer.scss';
import AnswerList from './VariantsAnswer/AnswerList';
import AnswerOneOfList from './VariantsAnswer/AnswerOneOfList';
import AnswerText from './VariantsAnswer/AnswerText';
import AnswerCheckBox from './VariantsAnswer/AswerCheckBox';

export interface Types {
    type: string;
    returnQuestion: any,
}

function QuestionAnswer(props: Types) {
    let typeForJSON = "text";

    // function sendJSON(answer: Object) {
    //     let copyProps = {
    //         type: props.type,
    //         question: props.returnQuestion(),
    //     };
    //     let send = Object.assign({}, copyProps, answer);
    //     console.log(send);
    //     let url = 'http://79.132.138.108/front-test';
    //     axios.post(url, send)
    //         .then(function (response: any) {
    //             console.log(response);
    //         })
    //         .catch(function (error: Error) {
    //             console.log(error);
    //         });
    // }

    const callbackAnswer = useCallback((answer: any) => {
        let json = {
            type: typeForJSON,
            question: "default",
            options: answer.answer,
        }
        console.log(json);
        props.returnQuestion(json);
    }, [props]);

    if (props.type == "one-of-list") {
        typeForJSON = "options";
        return (
            <div className="question-answer">
                <AnswerOneOfList callback={callbackAnswer} />
            </div>
        )
    } else if (props.type == "check-box") {
        typeForJSON = "options";
        return (
            <div className="question-answer">
                <AnswerCheckBox callback={callbackAnswer} />
            </div>
        )
    } else {
        return (
            <div className="question-answer">
                <AnswerText callback={callbackAnswer} />
            </div>
        )
    }
    // else if (props.type == "list") {
    //     return (
    //         <div className="question-answer">
    //             <AnswerCheckBox />
    //         </div>
    //     )
    // } else if (props.type == "date") {
    //     return (
    //         <div className="question-answer">
    //             <AnswerCheckBox />
    //         </div>
    //     )
    // } else if (props.type == "time") {
    //     return (
    //         <div className="question-answer">
    //             <AnswerCheckBox />
    //         </div>
    //     )
    
}

export default QuestionAnswer;