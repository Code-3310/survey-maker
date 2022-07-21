import '../QuestionAnswer.scss';
import { SyntheticEvent, useState } from 'react';

export interface ChechBoxProps {
    key: string;
    id: string;
    name: string;
}

interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
}

function AnswerOneOfList(props: any) {
    const [oneOfList, setOneOfList] = useState<Array<JSX.Element>>([]);
    const [textInput, setTextInput] = useState<Array<string>>([]);
    const [radio, setRadio] = useState([{
        checked: false,
        variant: "Вариант ответа",
    }])


    const OneOfList = (props: ChechBoxProps) => {
        return (
            <div className="answer__item">
                <input className="answer__radio" type="radio" onChange={radioHandler} name="answer" id={props.id} />
                <label className="answer__label" htmlFor={props.id}><input className="answer__label-input" type="text" placeholder="Вариант ответа" onChange={inputHandler} name={props.name} /></label>
            </div>
        );
    };


    const addRadio = (event: any) => {
        setOneOfList(oneOfList.concat(<OneOfList key={String(oneOfList.length + 1)} id={String(oneOfList.length + 1)} name={String(oneOfList.length + 1)} />));
        let copyRadio = radio;
        copyRadio.push({
            checked: false,
            variant: "Вариант ответа",
        })
        setRadio(copyRadio);
        let copyTextInput = textInput;
        copyTextInput.push("Вариант ответа");
        setTextInput(copyTextInput);
    };

    // const radioNewHandler = (e: any) => {
    //     let copyRadio = radio;
    //     copyRadio.push({
    //         checked: e.target.checked,
    //         answer: "Вариант"
    //     })
    //     setRadio(copyRadio);
    //     console.log(radio);
    // };

    const radioHandler = (e: any) => {
        let copyRadio = radio;
        let id: number = e.target.id;
        for(let i = 0; i < copyRadio.length; i++) {
            copyRadio[i].checked = false;
        }
        copyRadio[id].checked = e.target.checked;
        setRadio(copyRadio);
    };

    const inputHandler = (e: any) => {
        let copyTextInput = textInput;
        let id = e.target.name;
        copyTextInput[id] = e.target.value;
        setTextInput(copyTextInput);
    };

    const buttonHandler = () => {
        let copyRadio = radio;
        let copyTextInput = textInput;
        let result = {
            answer: [{}],
        }
        for(let i = 0; i < copyRadio.length; i++) {
            copyRadio[i].variant = copyTextInput[i];
        }
        result.answer = copyRadio;
        props.callback(result);
    }

    return (
        <div className="answer">
            <div className="answer__item">
                <input className="answer__radio" type="radio" onChange={radioHandler} name="answer" id="0" />
                <label className="answer__label" htmlFor="0"><input className="answer__label-input" type="text" placeholder="Вариант ответа" onChange={inputHandler} name="0" /></label>
            </div>
            {oneOfList}
            <button className="answer__item button-add" onClick={addRadio}>
                <input className="answer__radio input-plus" type="radio" name="" id="999" disabled />
                <label className="answer__label" htmlFor="999">Добавить</label>
            </button>
            <button className="answer__button" onClick={buttonHandler}>Сохранить</button>
        </div>
    );
}

export default AnswerOneOfList;