

/*function getAllCars() {
    $.get("demo_test.asp", function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
    
}*/

export default function getCars() {
    return fetch('https://localhost:44348/api/React')
        .then(data => data.json());
}

export function getCarById(id) {
    return fetch('https://localhost:44348/api/React/' + id)
        .then(data => data.json());
}