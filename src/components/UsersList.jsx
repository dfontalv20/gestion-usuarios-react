import React, { useContext } from 'react'
import { UsersContext } from '../App'
import { UserItem } from './UserItem';

export const UsersList = () => {
    const { users } = useContext(UsersContext);

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='card-title'>Usuarios Registrados</h3>
            </div>
            <div className='card-body'>
                {users.map((user, index) => <UserItem user={user} key={index} />)}
            </div>
        </div>
    )
}
