import {Header} from "../components/Header.tsx";
import {Separator} from "../components/Separator.tsx";
import {Tweet} from "../components/Tweet.tsx";
import './Status.css'
import {FormEvent, useState, KeyboardEvent} from "react";
import {PaperPlaneRight} from "phosphor-react";

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'concordo',
        'legal'
    ]);

    function createNewAnswer(event: FormEvent) {
        event.preventDefault();
        setAnswers([newAnswer, ...answers]);
        setNewAnswer('')
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key == 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answers]);
            setNewAnswer('')
        }
    }

    return (
        <main className="status">
            <Header title="Tweet"/>
            <Tweet content="testessssss"/>
            <Separator/>
            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://i.pinimg.com/originals/fa/8a/5e/fa8a5e96b89a7c10fac879658694eac7.jpg"
                         alt="perfil"/>
                    <textarea id="tweet" value={newAnswer} onKeyDown={handleHotKeySubmit} onChange={(event) => {
                        setNewAnswer(event.target.value)
                    }} placeholder="Tweet your answer"/>
                </label>
                <button type="submit"><PaperPlaneRight /><span>Answer</span></button>
            </form>

            {answers.map(answer => {
                return <Tweet key={answer} content={answer}/>
            })}
        </main>
    )
}