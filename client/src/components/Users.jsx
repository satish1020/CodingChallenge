import React,{useState, useEffect, Fragment} from 'react'
import UserItem from './UserItem.js';
import Network from '../network/index';

const { Paths, API } = Network;

function Users() {

    const [users,setUsers] =  useState([]);
   

    const fetchAllUsers = async () => {
        const getUsersUrl = Paths.getUsers();
        try {
            const {data} = await API.get(getUsersUrl);
            setUsers(data);
        } catch(error) {
            console.log('error while getting all users', error);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);

   

    return (
        <div>
            <h1>All Users</h1>
            <h2>Users and their Age</h2>
            <>
                {users.map((user, index) => ( <UserItem key={index} {...user}/>))}
            </>
        </div>
    )
}

export default Users;
