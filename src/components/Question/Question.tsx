import './Question.scss';
import { useCallback, useState } from 'react';
import { ReactComponent as TextIcon } from '../../img/text.svg'
import { ReactComponent as CircleIcon } from '../../img/circle.svg'
import { ReactComponent as CheckBoxIcon } from '../../img/check-box.svg'
import { ReactComponent as ListIcon } from '../../img/list.svg'
import { ReactComponent as CalendarIcon } from '../../img/calendar.svg'
import { ReactComponent as ClockIcon } from '../../img/clock.svg'
import { ReactComponent as AddPhotoIcon } from '../../img/add-photo.svg'
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

function Question() {
    const [type, setType] = useState("text");
    const [question, setQuestion] = useState<string>("");
    // const [typeAndQuestion, setTypeAndQuestion] = useState({
    //     type: "text",
    //     question: "any question",
    // });

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
        setType(button.value);
        // let copyTypeAndQuestion = typeAndQuestion;
        // copyTypeAndQuestion.type = button.value;
        // console.log(button.value);
        // setTypeAndQuestion(copyTypeAndQuestion);
    };

    function inputHandler(e: any) {
        e.preventDefault();
        setQuestion(e.target.value);
    }

    const returnQuestion = useCallback(() => {
        return question;
    }, [question]);

    return (
        <main className="question">
            <div className="question-type">
                <button className="question-type__item" onClick={buttonHandler} value="text">
                    <TextIcon className="question-type__img" />
                    <p className='question-type__text'>Текст</p>
                </button>
                <button className="question-type__item" onClick={buttonHandler} value="one-of-list">
                    <CircleIcon className="question-type__img" />
                    <p className='question-type__text'>Один из списка</p>
                </button>
                <button className="question-type__item" onClick={buttonHandler} value="check-box">
                    <CheckBoxIcon className="question-type__img" />
                    <p className='question-type__text'>Несколько из списка</p>
                </button>
                <button className="question-type__item" onClick={buttonHandler} value="list">
                    <ListIcon className="question-type__img" />
                    <p className='question-type__text'>Выпадающий список</p>
                </button>
                <button className="question-type__item" onClick={buttonHandler} value="date">
                    <CalendarIcon className="question-type__img" />
                    <p className='question-type__text'>Дата</p>
                </button>
                <button className="question-type__item" onClick={buttonHandler} value="time">
                    <ClockIcon className="question-type__img" />
                    <p className='question-type__text'>Время</p>
                </button>
            </div>
            <div className="question-name">
                <input type="text" onChange={inputHandler} className="question-name__input" placeholder='Вопрос' />
                <AddPhotoIcon className="question-name__img" />
            </div>
            <QuestionAnswer type={type} returnQuestion={returnQuestion} />
        </main>
    );
}

export default Question;