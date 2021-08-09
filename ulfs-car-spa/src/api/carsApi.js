import axios from 'axios';

/*function getAllCars() {
    $.get("demo_test.asp", function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
    
}*/

export default function getCars() {
    return fetch('https://localhost:44348/api/React')
        .then(data => data.json());
}

export async function getCarById(id) {
    try {
        let response = await fetch('https://localhost:44348/api/React/' + id);
        //console.log(response);
        let json = await response.json();
        //console.log(json);
        return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function createCar(car) {

    try {
        let response = await axios.post('https://localhost:44348/api/React/', {
            Brand: car.Brand,
            ModelName: car.ModelName,
            Price: car.Price
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

export async function deleteCar(id) {

    try {
        let response = await axios.delete('https://localhost:44348/api/React/' + id);
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