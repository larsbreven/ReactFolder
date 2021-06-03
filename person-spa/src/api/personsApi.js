import axios from 'axios';

/*function getAllPersons() {
    $.get("demo_test.asp", function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
    
}*/

export default function getPersons() {
    return fetch('https://localhost:44341/api/React')
        .then(data => data.json());
}

export async function getPersonById(id) {
    try {
        let response = await fetch('https://localhost:44341/api/React/' + id);
        //console.log(response);
        let json = await response.json();
        //console.log(json);
        return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function createPerson(person) {

    try {
        let response = await axios.post('https://localhost:44341/api/React/', {
            City: person.City,
            Name: person.Name,
            Phone: person.Phone
        });
        console.log(response);
        let json = await response.data;
        //console.log(json);
        return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function deletePerson(id) {

    try {
        let response = await axios.delete('https://localhost:44341/api/React/' + id);
        console.log(response);

        return true;
    }
    catch (e) {
        console.log('Error!', e);
        return false;
    }
}

/*
async function getJson() {
    try {
        let response = await fetch('/users.json');
        let json = await response.json();
        console.log(json);
    }
    catch (e) {
        console.log('Error!', e);
    }
}
*/