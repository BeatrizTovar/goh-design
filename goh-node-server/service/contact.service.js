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

module.exports =  {
    readAll
}