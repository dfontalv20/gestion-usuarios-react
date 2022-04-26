import React, { useContext } from 'react'
import { UsersContext } from '../App'

export const UserItem = ({ user }) => {
    const { setUsers } = useContext(UsersContext);

    const removeUser = () => setUsers(prev => prev.filter(registredUser => registredUser.id !== user.id));

    return (
        <div className='p-2 bg-primary d-flex align-items-center justify-content-between rounded-3 my-2 text-white'>
            <div><b>Id:</b> {user.id}</div>
            <div><b>Nombres:</b> {user.name}</div>
            <div><b>Apellidos:</b> {user.lastname}</div>
            <div><b>Telefono:</b> {user.phone}</div>
            <div><b>Dirección:</b> {user.address}</div>
            <div><b>Nacimiento:</b> {user.birthday}</div>
            <div><button className='btn btn-danger' onClick={() => removeUser()}>X</button></div>
        </div>
    )
}
