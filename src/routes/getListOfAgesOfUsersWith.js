'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    const { item } = request.body;
    const itemToLookup = item;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    console.log('*** output of post ***', data);
    return response.status(200).send(JSON.stringify(data));
};

const getAllDropDownItems = async (request, response) => {
    const data = await mockDBCalls.getAllItems();
    return response.status(200).send(JSON.stringify(data));
}

module.exports = (app) => {
    app.post('/users/age', getListOfAgesOfUsersWithHandler);
    app.get('/users/items', getAllDropDownItems);
};
