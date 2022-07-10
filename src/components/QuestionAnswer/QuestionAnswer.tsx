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
    const [answer, setAnswer] = useState({
        type: "default",
        answer: "example",
    })

    function sendJSON(answer: Object) {
        let copyProps = {
            type: props.type,
            question: props.returnQuestion(),
        };
        let send = Object.assign({}, copyProps, answer);
        console.log(send);
        let url = 'http://79.132.138.108/front-test';
        axios.post(url, send)
            .then(function (response: any) {
                console.log(response);
            })
            .catch(function (error: Error) {
                console.log(error);
            });
    }

    const callbackAnswer = useCallback((props: { type: string, answer: any } | { type?: string, answer: any }) => {
        let copyAnswer = answer;
        // copyAnswer.type = props.type;
        copyAnswer.answer = props.answer;
        setAnswer(copyAnswer);
        sendJSON(props);
    }, [props]);

    if (props.type == "one-of-list") {
        return (
            <div className="question-answer">
                <AnswerOneOfList callback={callbackAnswer} />
            </div>
        )
    } else if (props.type == "check-box") {
        return (
            <div className="question-answer">
                <AnswerCheckBox />
            </div>
        )
    } else if (props.type == "list") {
        return (
            <div className="question-answer">
                <AnswerList />
            </div>
        )
    } else if (props.type == "date") {
        return (
            <div className="question-answer">
                <AnswerCheckBox />
            </div>
        )
    } else if (props.type == "time") {
        return (
            <div className="question-answer">
                <AnswerCheckBox />
            </div>
        )
    } else {
        return (
            <div className="question-answer">
                <AnswerText callback={callbackAnswer} />
            </div>
        )
    }
}

export default QuestionAnswer;