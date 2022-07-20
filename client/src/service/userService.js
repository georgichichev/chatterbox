const url = 'http://localhost:3000/users';

export const register = (data) =>{
    return fetch(`${url}/register`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}

export const login = (data) =>{
    return fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}