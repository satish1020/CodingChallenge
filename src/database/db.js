'use strict';
/*
This file (db.js) represents an in-memory db in the form of a javascript object.
*/
module.exports = {
    // DO NOT MODIFY usersById
    usersById: {
        1: {
            username: 'John',
            age: 18
        },
        2: {
            username: 'Paul',
            age: 29
        },
        3: {
            username: 'Rita',
            age: 12
        },
        4: {
            username: 'Erica',
            age: 90
        },
        5: {
            username: 'Tina',
            age: 90
        },
    },

    // DO NOT MODIFY itemsOfUserByUsername
    itemsOfUserByUsername: {
        John: [
            'carrot', 'apple', 'grapes', 'cake'
        ],
        Paul: [
            'crackers', 'chips', 'cake', 'tv'
        ],
        Rita: [
            'ham', 'beef', 'cake', 'chips'
        ],
        Erica: [
            'tv'
        ],
        Tina: [
            'tv'
        ]
    },

    allItems: ['carrot', 'apple', 'grapes', 'cake', 'crackers', 'chips', 'tv', 'ham', 'beef']

}