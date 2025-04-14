import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {

    const USERS = [
        {
            id: 'u1', 
            name: 'Vikram', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />
};

export default Users;