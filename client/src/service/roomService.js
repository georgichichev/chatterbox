import {getToken} from "./auth.js";

const url = 'http://localhost:3000/rooms'

export const createRoom = (data) => {
    return fetch(url + '/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
};

export const getAllRooms = () => {
    return fetch(url)
        .then(res => res.json())
}