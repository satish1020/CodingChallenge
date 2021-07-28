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
        const allUsersWithAge = _.values(db.usersById);
        const usersWithAge = {};
        allUsersWithAge.forEach(user => {
            const { age, username } = user;
            usersWithAge[username] = age;
        });

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
    // Using Flow of loadash, which calls from left to right values,flattern,unoq..
    const uValues = _.flow([_.values, _.flatten, _.uniq]);
    const dataAccessMethod = () => { return uValues(db.itemsOfUserByUsername)};
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getAllItems,
};
