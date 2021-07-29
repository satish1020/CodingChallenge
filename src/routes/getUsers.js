'use strict';
const mockDBCalls = require('../database/index.js');

const getUsersHandler = async (request, response) => {
    try {
        const data = await mockDBCalls.getUsers(); // url
        return response.status(200).send(JSON.stringify(data));
    } catch(error){
        console.log('======> error', error);
        return response.send(500, "There is some problem  here."); 
    }
    
};

module.exports = (app) => {
    app.get('/users', getUsersHandler);
};
