import { useState } from 'react';
import '../QuestionAnswer.scss';


function AnswerText(props: any) {
    const [text, setText] = useState({
        type: "text",
        answer: "Введите текст",
    })

    function textareaHandler(e: any) {
        e.preventDefault();
        let copyText = text;
        copyText.answer = e.target.value; 
        setText({
            type: "text",
            answer: e.target.value,
        });
    }

    function buttonHandler() {
        props.callback(text);
    }

    return (
        <>
            <div className="answer-text">
                <textarea className="answer-text__textarea" value={text.answer} onChange={textareaHandler} name="" id="" cols={30} rows={10} wrap='hard'></textarea>
            </div>
            <button className="answer__button" onClick={buttonHandler}>Сохранить</button>
        </>
    );
}

export default AnswerText;