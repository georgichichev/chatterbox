const url = 'http://localhost:3000/users';

export const register = (data) => {
    return fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
        if (res.ok !== true){
            throw new Error('Email is already taken.')
        }
        return res.json();
    })
}

export const login = (data) => {
    return fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.ok !== true){
                throw new Error('Invalid email or password.')
            }
            return res.json();
        })
}