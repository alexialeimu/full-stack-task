import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/books';

const getAll = () => {
    const req = axios.get(baseUrl);
    return req.then((res) => res.data);
};

const get = (id) => {
    const req = axios.get(`${baseUrl}/${id}`);
    return req.then((res) => res.data);
};

const create = (newBook) => {
    const req = axios.post(baseUrl, newBook);
    return req.then((res) => res.data);
};

const remove = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`);
    return req.then((res) => res.data);
};

const update = (id, newBook) => {
    const req = axios.put(`${baseUrl}/${id}`, newBook);
    return req.then((res) => res.data);
};

export default {
    getAll,
    get,
    create,
    remove,
    update,
};
