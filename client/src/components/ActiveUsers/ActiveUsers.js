import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../../context.js";
import './ActiveUsers.css';

const ActiveUsers = ({onUserClick}) => {
    const socket = useContext(SocketContext);

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        socket.on('users', (users) =>{
            setUsers(users)
        });

        socket.on("user connected", id => {
            setUsers((current) => [...current, id])
        })

        socket.on("user disconnect", id => {
            setUsers((current) => current.filter(x => x !== id));
        })
        return () =>{
            socket.off('send message');
            socket.off('user connected');
            socket.off('user disconnect');
        }
    }, [socket])

    return(
        <ul className='activeUsers'>
            {users.map(x => <li onClick={(e) => onUserClick(e)} className='user' key={users.indexOf(x)}>{x}</li>)}
        </ul>
    )
}

export default ActiveUsers