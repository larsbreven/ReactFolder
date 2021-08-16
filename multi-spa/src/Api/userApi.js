import axios from "axios";

let apiUrl = 'https://localhost:44319/api/Jwt';

/*
export function setApiUrl(url) {
    apiUrl = url;
}
*/
var userToken = null;
export function getUserToken() {
    return userToken;
}


export async function loginUser(login) {

    try {
        let response = await axios.post(apiUrl + '/login', {
            UserName: login.userName,
            Password: login.password
        });
        //console.log("loginResponse", response);
        let json = await response.data;
        console.log("loginResponseJson", json);
        userToken = json.token;
        return "Ok";
    }
    catch (e) {
        console.log('Error!', e);
        return "Bad"
    }
}