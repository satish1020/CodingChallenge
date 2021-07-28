'use strict';
const mockDBCalls = require('../database/index.js');
// const cors = require('cors');

const getUsersHandler = async (request, response) => {
    const data = await mockDBCalls.getUsers();
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/users', getUsersHandler);
};
