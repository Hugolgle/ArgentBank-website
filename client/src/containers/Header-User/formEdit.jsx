import './formEdit.scss'
import Button from '../../components/Button/button.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { profileUser, userInfoEdit } from '../../redux/userSlice.js';

export default function FormEdit() {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.userInfo.userName);

    const [vueForm, setVueForm] = useState(true);
    const [userName, setUsername] = useState(username);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const vueEdit = () => {
        setVueForm(!vueForm)
    }

    const saveEdit = (e) => {
        e.preventDefault();
        const infoEdit = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
        };

        dispatch(userInfoEdit(infoEdit));
    }


    if (vueForm === true) {
        return (
            <Button text="Edit" action={vueEdit} />
        )

    } else {
        return <>
            <form onSubmit={saveEdit}>
                <div className="inputText">
                    <label htmlFor="username">Username :</label>
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="inputText">
                    <label htmlFor="firstname">First Name :</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled
                    />
                </div>
                <div className="inputText">
                    <label htmlFor="lastname">Last Name :</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled
                    />
                </div>

                <div className="buttons">
                    <Button text="Save" />
                    <Button text="Cancel" action={vueEdit} />
                </div>
            </form>
        </>


    }





}