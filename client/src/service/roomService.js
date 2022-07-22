import {getToken} from "./auth.js";

const url = 'http://localhost:3000/rooms'

export const createRoom = (data) => {
    return fetch(url + '/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(data)
    }).then(res => {
        if(!res.ok){
            throw new Error('Provide token.')
        }
        return res.json();
    })
};

export const getAllRooms = () => {
    return fetch(url)
        .then(res => res.json())
}