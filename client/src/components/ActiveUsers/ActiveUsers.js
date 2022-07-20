import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../../context.js";

const ActiveUsers = () => {
    const socket = useContext(SocketContext);

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        socket.on('users', (users) =>{
            setUsers(users)
        });

        socket.on("user connected", id => {
            setUsers((current) => [...current, id])
        })
        return () =>{
            socket.off('send message');
            socket.off('user connected');
        }
    }, [])

    return(
        <ul>
            {users.map(x => <li key={users.indexOf(x)}>{x}</li>)}
        </ul>
    )
}

export default ActiveUsers