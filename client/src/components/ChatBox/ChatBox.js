import './ChatBox.css'
import {io} from "socket.io-client";
import {useEffect, useState} from "react";
import {MessageForm} from "../MessageForm/MessageForm.js";
import {ChatLine} from "./ChatLine.js";

const socket = io.connect('http://localhost:3000');

export const ChatBox = () => {
    useEffect(() =>{
        socket.on('send message', (message) =>{
            setChat((current) => [...current, message]);
        })

        return () =>{
            socket.off('send message')
        }
    }, [])

    const [message, setMessage] = useState({name: '', content: ''});
    const [chat, setChat] = useState([]);

    const onFormSubmit = (message) =>{
        socket.emit('send message', message);
        setMessage({name: 'Georgi', content: ''})
    }

    const onInputChange = (e)=>{
        setMessage({name: 'Georgi', content: e.target.value})
    }

    return (
        <div style={{padding: 24}}>
            <ul className='chat'>
                {chat.map(x => <ChatLine key={chat.indexOf(x)} message={x}/>)}
            </ul>
            <MessageForm message={message} onInputChange={onInputChange} onFormSubmit={onFormSubmit}/>
        </div>
    )
}