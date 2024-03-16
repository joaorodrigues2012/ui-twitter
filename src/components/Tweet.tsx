import './Tweet.css'
import {ArrowsClockwise, ChatCircle, Heart} from "phosphor-react";
import {Link} from "react-router-dom";

interface TweetProps{
    content: string
}

export function Tweet({ content }: TweetProps) {
    return (
        <Link to="/status" className="tweet">
            <img src="https://i.pinimg.com/originals/fa/8a/5e/fa8a5e96b89a7c10fac879658694eac7.jpg" alt="perfil"/>
            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Victor</strong>
                    <span>@victor</span>
                </div>
                <p>{content}</p>
                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle/>
                        20
                    </button>
                    <button type="button">
                        <ArrowsClockwise/>
                        20
                    </button>
                    <button type="button">
                        <Heart/>
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}