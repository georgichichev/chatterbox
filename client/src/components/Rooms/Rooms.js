import {useEffect, useState} from "react";
import {getAllRooms} from "../../service/roomService.js";
import {RoomCard} from "./RoomCard/RoomCard.js";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() =>{
        getAllRooms()
            .then(result => setRooms(result));
    }, []);

    const onEdit = (room) =>{
        setRooms((current) => current.map(x => x._id === room._id ? room : x))
    };

    return (
        <>
            <h1>Rooms</h1>
            <div>
                {rooms.map(x => <RoomCard key={x._id} onEdit={onEdit} room={x}/>)}
            </div>
        </>
    )
}

export default Rooms