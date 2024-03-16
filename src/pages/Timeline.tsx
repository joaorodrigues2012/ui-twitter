import {Header} from "../components/Header.tsx";
import {Separator} from "../components/Separator.tsx";
import {Tweet} from "../components/Tweet.tsx";
import './Timeline.css'
import {FormEvent, KeyboardEvent, useState} from "react";

export function Timeline() {
    const [newTweet, setNewTweet] = useState('')
    const [tweets, setTweets] = useState([
        'teste 1',
        'teste 2'
    ]);

    function createNewTweet(event: FormEvent) {
        event.preventDefault();
        setTweets([newTweet, ...tweets]);
        setNewTweet('')
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key == 'Enter' && (event.ctrlKey || event.metaKey)) {
            setTweets([newTweet, ...tweets]);
            setNewTweet('')
        }
    }

    return (
        <main className="timeline">
            <Header title="Home"/>
            <form onSubmit={createNewTweet} className="new-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://i.pinimg.com/originals/fa/8a/5e/fa8a5e96b89a7c10fac879658694eac7.jpg"
                         alt="perfil"/>
                    <textarea id="tweet" placeholder="What's happening?" onKeyDown={handleHotKeySubmit} value={newTweet}
                              onChange={(event) => {
                                  setNewTweet(event.target.value)
                              }}/>
                </label>
                <button type="submit">Tweet</button>
            </form>
            <Separator/>
            {tweets.map(tweet => {
                return <Tweet key={tweet} content={tweet}/>
            })}
        </main>
    )
}