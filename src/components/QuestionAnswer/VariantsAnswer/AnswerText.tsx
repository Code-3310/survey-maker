import { useState } from 'react';
import '../QuestionAnswer.scss';


function AnswerText(props: any) {
    return (
        <>
            <div className="answer-text">
                <input className="answer-text__input" placeholder="Развернутый ответ" disabled />
            </div>
            <button className="answer__button" onClick={props.callback}>Сохранить</button>
        </>
    );
}

export default AnswerText;