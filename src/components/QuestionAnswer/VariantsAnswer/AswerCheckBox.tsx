import '../QuestionAnswer.scss';
import { useState } from 'react';

export interface ChechBoxProps {
    key: string;
    id: string;
}

const CheckBox = (props: ChechBoxProps) => {
    return (
        <div className="answer__item">
            <input className="answer__check-box" type="checkbox" name="" id={props.id} />
            <label className="answer__label" htmlFor={props.id}><input className="answer__label-input" type="text" placeholder="Вариант ответа" /></label>
        </div>
    );
};

function AnswerCheckBox() {
    const [checkBox, setCheckBox] = useState<Array<JSX.Element>>([]);

    const onAddBtnClick = (event: any) => {
        setCheckBox(checkBox.concat(<CheckBox key={String(checkBox.length+1)} id={String(checkBox.length+1)} />));
    };

    return (
        <div className="answer">
            <div className="answer__item">
                <input className="answer__check-box" type="checkbox" name="" id="0" />
                <label className="answer__label" htmlFor="0"><input className="answer__label-input" type="text" placeholder="Вариант ответа" /></label>
            </div>
            {checkBox}
            <button className="answer__item button-add" onClick={onAddBtnClick}>
                <input className="answer__check-box input-plus" type="checkbox" name="" id="999" disabled />
                <label className="answer__label" htmlFor="999">Добавить</label>
            </button>
        </div>
    );
}

export default AnswerCheckBox;