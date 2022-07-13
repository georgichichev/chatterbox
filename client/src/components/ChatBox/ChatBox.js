import './ChatBox.css'
import {io} from "socket.io-client";

const socket = io.connect('http://localhost:3000');

export const ChatBox = () => {
    return (
        <div style={{padding: 24}}>
            <ul className='chat'>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>
    )
}