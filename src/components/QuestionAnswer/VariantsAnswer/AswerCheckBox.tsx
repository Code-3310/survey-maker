import '../QuestionAnswer.scss';
import { useState } from 'react';

export interface ChechBoxProps {
    key: string;
    id: string;
}

function AnswerCheckBox(props: any) {
    const [checkBox, setCheckBox] = useState<Array<JSX.Element>>([]);
    const [textInput, setTextInput] = useState<Array<string>>([]);
    const [checkBoxAnswer, setCheckBoxAnswer] = useState([{
        checked: false,
        value: "Вариант ответа",
    }])

    const CheckBox = (props: ChechBoxProps) => {
        return (
            <div className="answer__item">
                <input className="answer__check-box" type="checkbox" onChange={checkBoxHandler} name="answer-check-box" id={props.id} />
                <label className="answer__label" htmlFor={props.id}><input className="answer__label-input" type="text" onChange={inputHandler} placeholder="Вариант ответа" name={props.id} /></label>
            </div>
        );
    };

    const onAddBtnClick = () => {
        setCheckBox(checkBox.concat(<CheckBox key={String(checkBox.length+1)} id={String(checkBox.length+1)} />));
        let copyBox = checkBoxAnswer;
        copyBox.push({
            checked: false,
            value: "Вариант ответа",
        })
        setCheckBoxAnswer(copyBox);
        let copyTextInput = textInput;
        copyTextInput.push("Вариант ответа");
        setTextInput(copyTextInput);
    };

    const checkBoxHandler = (e: any) => {
        let copyBox = checkBoxAnswer;
        let id: number = e.target.id;
        copyBox[id].checked = e.target.checked;
        setCheckBoxAnswer(copyBox);
    };

    const inputHandler = (e: any) => {
        let copyTextInput = textInput;
        let id = e.target.name;
        copyTextInput[id] = e.target.value;
        setTextInput(copyTextInput);
    };

    const buttonHandler = () => {
        let copyBox = checkBoxAnswer;
        let copyTextInput = textInput;
        let result = {
            answer: [{}],
        }
        for(let i = 0; i < copyBox.length; i++) {
            copyBox[i].value = copyTextInput[i];
        }
        result.answer = copyBox;
        props.callback(result);
    }

    return (
        <div className="answer">
            <div className="answer__item">
                <input className="answer__check-box" type="checkbox" onChange={checkBoxHandler} name="answer-check-box" id="0" />
                <label className="answer__label" htmlFor="0"><input className="answer__label-input" type="text" onChange={inputHandler} placeholder="Вариант ответа" name="0" /></label>
            </div>
            {checkBox}
            <button className="answer__item button-add" onClick={onAddBtnClick}>
                <input className="answer__check-box input-plus" type="checkbox" name="" id="999" disabled />
                <label className="answer__label" htmlFor="999">Добавить</label>
            </button>
            <button className="answer__button" onClick={buttonHandler}>Сохранить</button>
        </div>
    );
}

export default AnswerCheckBox;