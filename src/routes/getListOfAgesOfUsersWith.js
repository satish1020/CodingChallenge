'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response, next) => {
    const { item } = request.body;
    const itemToLookup = item;
    try {
        const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
        return response.status(200).send(JSON.stringify(data));
    } catch(error){
        return response.send(500, "There is some problem  here."); 
    }
    
};

const getAllDropDownItems = async (request, response) => {

    try {
        const data = await mockDBCalls.getAllItems();
        return response.status(200).send(JSON.stringify(data));
    } catch(error){
        return response.send(500, "There is some problem  here."); 
    }
    
}

module.exports = (app) => {
    app.post('/users/age', getListOfAgesOfUsersWithHandler);
    app.get('/users/items', getAllDropDownItems);
};
