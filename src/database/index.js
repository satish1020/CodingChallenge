'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        // fill me in :)
        // based on item need to get all users from itemsOfUserByUsername
        const allUsersWithAge = _.values(db.usersById);
        allUsersWithAge.forEach(user => {
            const { age, username } = user;
            usersWithAge[username] = age;
        })


       // { John: 18, Paul: 29, Rita: 12, Erica: 90, Tina: 90 }

        const selectedUsers = {};
        for (const username in db.itemsOfUserByUsername){
            const optionsValue = db.itemsOfUserByUsername[username] || [];
            if(optionsValue.includes(item)){    
                let ageForUser = usersWithAge[username];
                if(selectedUsers[ageForUser]){
                    const count = selectedUsers[ageForUser];
                    selectedUsers[ageForUser] = count + 1;
                } else {
                    selectedUsers[ageForUser] = 1;
                }
            }
        }
        return selectedUsers;

    }
    return mockDBCall(dataAccessMethod);
}

const getAllItems = () => {
    //const allItemObject = new Set();

    const dataAccessMethod = () => _.map(db.allItems, item => item);
    return mockDBCall(dataAccessMethod)
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getAllItems,
};
