const mssql = require('../mssql');
const { TYPES } = require('tedious')

const readAll = () => {
    const promise = mssql
        .executeProc('Contact_SelectAll')
        .then(response => {
            const items = response.resultSets[1];
            return items;
        })
    return promise;
}

const readById = id => {
    const promise = mssql
        .executeProc('Contact_Select_ById', sqlRequest => {
            sqlRequest.addParameter('Id', TYPES.Int, id);
        })
        .then(response => {
            return response.resultSets[1][0];
        })
        .catch(responseErrorHandler);

        return promise;
}

const create = item => {
    const promise = mssql
        .executeProc('Contact_Insert', sqlRequest => {
            sqlRequest.addParameter('FirstName', TYPES.NVarChar, item.firstName, {
                length: 50
            });
            sqlRequest.addParameter('LastName', TYPES.NVarChar, item.lastName, {
                length: 50
            });
            sqlRequest.addParameter('Phone', TYPES.Int, item.phone);
            sqlRequest.addParameter('Email', TYPES.NVarChar, item.email, {
                length: 50
            });
            sqlRequest.addParameter('Event', TYPES.NVarChar, item.event, {
                length: 50
            });
            sqlRequest.addOutputParameter('Id', TYPES.Int, null);            
        })
        .then(response => {
            return response.outputParameters.Id;
        })
        .catch(responseErrorHandler);

        return promise;
}

const update = (id, item) => {
    const promise = mssql
        .executeProc('Contact_Update_ById', sqlRequest => {
            sqlRequest.addParameter('Id', TYPES.Int, id);
            sqlRequest.addParameter('FirstName', TYPES.NVarChar, item.firstName, {
                length: 50
            });
            sqlRequest.addParameter('LastName', TYPES.NVarChar, item.lastName, {
                length: 50
            });
            sqlRequest.addParameter('Phone', TYPES.Int, item.phone);
            sqlRequest.addParameter('Email', TYPES.NVarChar, item.email, {
                length: 50
            });
            sqlRequest.addParameter('Event', TYPES.NVarChar, item.event, {
                length: 50
            })
        })
        .then(response => {
            return response;
        })
        .catch(responseErrorHandler);

        return promise;
}

const del = id => {
    const promise = mssql
        .executeProc('Contact_Delete_ById', sqlRequest => {
            sqlRequest.addParameter('Id', TYPES.Int, id);
        })
        .then (response => {
            return response;
        })
        .catch(responseErrorHandler);

        return promise;
}

const responseErrorHandler = error => {
    console.log(error);
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.error(error.response.data.errors);
    }
    return Promise.reject(error);
  }

module.exports =  {
    readAll,
    readById,
    create,
    update,
    del
}