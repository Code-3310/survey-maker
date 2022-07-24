import '../QuestionAnswer.scss';
import { useState } from 'react';

export interface Item {
    key: string;
    id: string;
    text: string;
}

export interface ChechBoxProps {
    key: string;
    id: string;
    name: string;
}


function AnswerList() {
    // const [item, setItem] = useState<Array<JSX.Element>>([]);
    // const [textInput, setTextInput] = useState<Array<string>>(["Вариант ответа"]);


    // const Item = (props: Item) => {
    //     return (
    //         <div className="answer__variant">
    //             <div className="answer__num">
    //                 <input className="answer__radio" type="radio" name="answer" />
    //                 <label className="answer__variant-label" htmlFor={props.id}>{Number(props.id) + 1}.</label>
    //             </div>
    //             <input className="answer__list-input" id={props.id} type="text" placeholder="Вариант ответа" onChange={handleChangeInoput} />
    //         </div>
    //     )
    // }
    const [listItem, setListItem] = useState<Array<JSX.Element>>([]);
    const [oneOfList, setOneOfList] = useState<Array<JSX.Element>>([]);
    const [textInput, setTextInput] = useState<Array<string>>(["Вариант ответа"]);
    const [radio, setRadio] = useState([{
        checked: false,
        value: "Вариант ответа",
    }])

    const ListItem = (props: Item) => {
        return (
            <option value="" id={props.id}>{props.text}</option>
        );
    };


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
            value: "Вариант ответа",
        })
        setRadio(copyRadio);
        console.log(radio);
        let copyTextInput = textInput;
        copyTextInput.push("Вариант ответа");
        setTextInput(copyTextInput);
    };


    // const onAddBtnClick = (event: any) => {
    //     let copyTextInput = textInput;
    //     copyTextInput.push("Вариант ответа");
    //     setTextInput(copyTextInput);
    //     setListItem(listItem.concat(<ListItem key={String(listItem.length + 1)} id={String(listItem.length + 1)} />));
    //     setItem(item.concat(<Item key={String(item.length + 1)} id={String(item.length + 1)} />));
    // };

    // const handleChangeInoput = (e: any) => {
    //     let id = e.target.id;
    //     let copyTextInput = textInput;
    //     copyTextInput[id] = e.target.value;
    //     setTextInput(copyTextInput);
    //     console.log(textInput);
    // };

    const radioHandler = (e: any) => {
        let copyRadio = radio;
        let id: number = e.target.id;
        for (let i = 0; i < copyRadio.length; i++) {
            copyRadio[i].checked = false;
        }
        copyRadio[id].checked = e.target.checked;
        setRadio(copyRadio);
        console.log(radio);
    };

    const inputHandler = (e: any) => {
        let id = e.target.name;
        let copyTextInput = textInput;
        copyTextInput[id] = e.target.value;
        setTextInput(copyTextInput);
        console.log(textInput);
    };

    const showList = () => {
        let copyListItem = listItem;
        copyListItem = [<ListItem key={String(listItem.length + 1)} id={String(listItem.length + 1)} text={textInput[0]} />];
        setListItem(copyListItem);
        console.log(copyListItem);
        for(let i = 0; i < textInput.length; i++) {
            // let copyListItem = listItem;
            // copyListItem.push(<ListItem key={String(i)} id={String(i)} text={textInput[i]} />);
            // setListItem(copyListItem);
            console.log(textInput)
           
            setListItem(listItem.concat(<ListItem key={String(listItem.length + 1)} id={String(listItem.length + 1)} text={textInput[i]} />));
            console.log(listItem);
        }
    }

    // const buttonHandler = () => {
    //     let copyRadio = radio;
    //     let copyTextInput = textInput;
    //     let result = {
    //         answer: [{}],
    //     }
    //     for(let i = 0; i < copyRadio.length; i++) {
    //         copyRadio[i].variant = copyTextInput[i];
    //     }
    //     result.answer = copyRadio;
    //     console.log(result);
    //     props.callback(result);
    // }

    return (
        <div className="answer">
            <div className="answer__wrapper">
                <div className="answer__variants">
                    {/* <div className="answer__variant">
                        <div className="answer__num">
                            <input className="answer__radio" type="radio" name="answer" />
                            <label className="answer__variant-label" htmlFor="0">1.</label>
                        </div>
                        <input className="answer__list-input" id="0" type="text" placeholder="Вариант ответа" onChange={handleChangeInoput} />
                    </div>
                    {item}
                    <button className="answer__item button-add" onClick={onAddBtnClick}>
                        <div className="answer__variant">
                             <label className="answer__variant-label">+</label><input className="answer__list-input" type="text" placeholder="Добавить" disabled />
                        </div>
                    </button>
                    <button className="answer__item button-add" onClick={onAddBtnClick}>
                        <input className="answer__radio input-plus" type="radio" name="" id="999" disabled />
                        <label className="answer__label" htmlFor="999">Добавить</label>
                    </button> */}
                    <div className="answer__item">
                        <input className="answer__radio" type="radio" onChange={radioHandler} name="answer" id="0" />
                        <label className="answer__label" htmlFor="0"><input className="answer__label-input" type="text" placeholder="Вариант ответа" onChange={inputHandler} name="0" /></label>
                    </div>
                    {oneOfList}
                    <button className="answer__item button-add" onClick={addRadio}>
                        <input className="answer__radio input-plus" type="radio" name="" id="999" disabled />
                        <label className="answer__label" htmlFor="999">Добавить</label>
                    </button>
                </div>
                <div className="answer__result">
                    <select className="answer__list">
                        {listItem}
                    </select>
                    <button className="answer__show" onClick={showList}>Посмотреть</button>
                </div>
            </div>
        </div>
    );
}

export default AnswerList;