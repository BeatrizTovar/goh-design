import axios from 'axios';

function create (formData) {
    const promise = axios.post('/api/contact', formData)
        .then(successResponse)
        .catch(errorResponse)
    return promise;
}

function update (id, formData) {
    const promise = axios.put('/api/contact/' + id, formData)
    promise
        .then(successResponse)
        .catch(errorResponse)
    return promise;
}

function readById (id) {
    const promise = axios.get('/api/contact/' + id)
        .then(successResponse)
        .catch(errorResponse)
    return promise;
}

function readAll () {
    debugger
    const promise = axios.get('/api/contact')
        .then(successResponse)
        .catch(errorResponse)
    return promise;
}

function del (id) {
    const promise = axios.delete('/api/contact/' + id)
        .then(successResponse)
        .catch(errorResponse)
    return promise;
}
const successResponse = response => {
    console.log(response)
    return response.data;
}

const errorResponse = error => {
    console.log(error)
    if (error && error.response.data && error.response.data.errors){
        console.error(error.response.data.errors);
    }
    return Promise.reject(error);
}

export { create, update, readById, readAll, del };