import './headerUser.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import FormEdit from './formEdit.jsx';

export default function HeaderUser() {
    const firstName = useSelector((state) => state.user.userInfo.firstName);
    const lastName = useSelector((state) => state.user.userInfo.lastName);



    return <>


        <div className="header">
            <h1>Welcome back <br />{firstName} {lastName}</h1>

            <FormEdit />
        </div>

    </>

}