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

        socket.on("user disconnect", id => {
            setUsers((current) => current.filter(x => x !== id));
        })
        return () =>{
            socket.off('send message');
            socket.off('user connected');
            socket.off('user disconnect');
        }
    }, [])

    return(
        <ul>
            {users.map(x => <li key={users.indexOf(x)}>{x}</li>)}
        </ul>
    )
}

export default ActiveUsers