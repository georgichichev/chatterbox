const url = 'http://localhost:3000/users/register';

export const register = (data) =>{
    return fetch(url, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}