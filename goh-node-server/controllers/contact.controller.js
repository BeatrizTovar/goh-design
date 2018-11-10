const contactService = require('../service/contact.service');
const responses = require('../models/responses/index');

const readAll = (req, res) => {
    const promise = contactService.readAll();
    promise
        .then(response => {
            const responseObj = new responses.ItemsResponse();
            responseObj.items = response;
            res.status(200).json(responseObj);
        })
        .catch(err => {
            const responseObj = new responses.ErrorResponse();
            responseObj.errors = err.stack;
            res.status(500).send(responseObj);
        })
}

const readById = (req, res) => {
    const id = req.params.id
    const promise = contactService.readById(id);
    promise
        .then(response => {
            const responseObj = new responses.ItemResponse();
            responseObj.item = response;
            res.status(200).json(responseObj);
        })
        .catch(err => {
            const responseObj = new responses.ErrorResponse();
            responseObj.errors = err.stack;
            res.status(500).send(responseObj);
        })
}

const create = (req, res) => {
    const promise = contactService.create(req.body);
    promise
        .then( response => {
            const responseObj = new responses.SuccessResponse();
            responseObj.item = response;
            res.status(200).json(responseObj)
        })
        .catch(err => {
            const responseObj = new responses.ErrorResponse();
            responseObj.errors = err.stack;
            res.status(500).send(responseObj);
        })
}

const update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const promise = contactService.update(id, body);
    promise
        .then(response => {
            const responseObj = new responses.SuccessResponse();
            res.status(200).json(responseObj)
        })
        .catch(err => {
            const responseObj = new responses.ErrorResponse();
            responseObj.error = err.stack;
            res.status(500).send(responseObj);
        })
}

const del = (req, res) => {
    const id = req.params.id;
    const promise = contactService.del(id);
    promise
        .then(response => {
            const responseObj = new responses.SuccessResponse();
            res.status(200).json(responseObj);
        })
        .catch(err => {
            const responseObj = new responses.ErrorResponse();
            responseObj.errors = err.stack;
            res.status(500).send(responseObj);
        })
}


module.exports = {
    readAll,
    readById,
    create,
    update,
    del
}