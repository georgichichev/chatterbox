export const getToken = () =>{
    const user = sessionStorage.getItem('user');
    return JSON.parse(user).accessToken
}