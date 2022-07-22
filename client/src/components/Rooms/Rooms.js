import {useContext, useEffect, useState} from "react";
import {getAllRooms} from "../../service/roomService.js";
import {RoomCard} from "./RoomCard/RoomCard.js";
import {RoomsContext} from "../../contexts/roomsContext.js";

const Rooms = () => {
    const {rooms, setRooms} = useContext(RoomsContext);

    useEffect(() =>{
        getAllRooms()
            .then(result => setRooms(result));
    }, []);



    return (
        <>
            <h1>Rooms</h1>
            <div>
                {rooms.map(x => <RoomCard key={x._id} room={x}/>)}
            </div>
        </>
    )
}

export default Rooms