import axios from 'axios';

/*function getAllCars() {
    $.get("demo_test.asp", function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
    
}*/


export default function getProducts() {                                          
    return fetch('https://localhost:44319/api/React')
        .then(data => data.json());                                             /* Takes out the data and convert it to json */
}

export async function getProductById(id) {
    try {
        let response = await fetch('https://localhost:44319/api/React/' + id);
        //console.log(response);
        let json = await response.json();
        //console.log(json);
        return json;
    }
    catch (error) {
        console.log('Error!', error);
    }
}

export async function createProduct(product) {
    try {
        let response = await axios.post('https://localhost:44319/api/React/', {
            Name: product.Name,
            Category: product.Category,
            Origin: product.Origin,
            Price: product.Price
        });
        console.log(response);
        let json = await response.data;
        //console.log(json);
        return json;
    }
    catch (error) {
        console.log('Error!', error);
    }
}

export async function deleteProduct(id, token) {
    try {
        let response = await axios.delete('https://localhost:44319/api/React/' + id, { headers: { "Authorization": `Bearer ${token}` } });
        console.log(response);
        return true;                                                            // Product deleted
    }
    catch (error) {
        console.log('Error!', error);
        return false;                                                           // Product not deleted
    }
}


/*
async function getJson() {
    try {
        let response = await fetch('/users.json');
        let json = await response.json();
        console.log(json);
    }
    catch (error) {
        console.log('Error!', error);
    }
}
*/