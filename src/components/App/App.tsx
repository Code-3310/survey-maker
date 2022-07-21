import './App.scss';
import Hedaer from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Question from '../Question/Question';
import { useCallback, useState } from 'react';
import axios from 'axios';

export interface TypeData {
    type: string;
	question: string;
	options: string | undefined;
}

function App() {
	const [question, setQuestion] = useState<Array<JSX.Element>>([]);
	const [data, setData] = useState<Array<TypeData>>([]);

	const QuestionItem = (props: any) => {
        return (
            <p className="sidebar__text">{props.question}</p>
        );
    };

	const callbackQuestion = useCallback((props: any) => {
		let copyData = data;
		let newQuestion = {
			type: props.type,
			question: props.question,
			options: props.options,
		}
		copyData.push(newQuestion);
		setData(copyData);
		setQuestion(question.concat(<QuestionItem key={String(question.length + 1)} question={props.question} />));
		console.log(data);
		sendJSON(data);
	}, [question, data]);

	function sendJSON(answer: TypeData[]) {
        let url = 'http://79.132.138.108/front-test';
        axios.post(url, answer)
            .then(function (response: any) {
                console.log(response);
            })
            .catch(function (error: Error) {
                console.log(error);
            });
    }

	return (
		<>
			<Hedaer />
			<Sidebar question={question} />
			<Question callbackQuestion={callbackQuestion} />
		</>
	);
}

export default App;