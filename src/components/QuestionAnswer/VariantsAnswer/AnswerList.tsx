import '../QuestionAnswer.scss';
import { useState } from 'react';

export interface ChechBoxProps {
    key: string;
    id: string;
}


function AnswerList() {
    const [listItem, setListItem] = useState<Array<JSX.Element>>([]);
    const [textInput, setTextInput] = useState<Array<string>>([]);


    const ListItem = (props: ChechBoxProps) => {
        return (
            <option value="" id={props.id}><input className="answer__label-input" type="text" placeholder="Вариант ответа" onChange={handleChangeInoput} /></option>
        );
    };


    const onAddBtnClick = (event: any) => {
        setListItem(listItem.concat(<ListItem key={String(listItem.length+1)} id={String(listItem.length+1)} />));
    };

    const handleChangeRadio=(e: any)=>{
        console.log(e.target.value);
    };

    const handleChangeInoput=(e: any)=>{
        setTextInput(e.target.value);
    };

    return (
        <div className="answer">
            <select className="answer__list">
                <option className="answer__option" value=""><label className="answer__label" htmlFor="0"><input className="answer__label-input" type="text" placeholder="Вариант ответа" onChange={handleChangeInoput} /></label></option>
                {listItem}
            </select>
            <button className="answer__item button-add" onClick={onAddBtnClick}>
                <input className="answer__radio input-plus" type="radio" name="" id="999" disabled />
                <label className="answer__label" htmlFor="999">Добавить</label>
            </button>
        </div>
    );
}

export default AnswerList;