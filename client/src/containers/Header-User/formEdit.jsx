import './formEdit.scss'
import Button from '../../components/Button/button.jsx'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userInfoEdit } from '../../redux/userSlice.js';

export default function formEdit() {
    const dispatch = useDispatch();

    const [vueForm, setVueForm] = useState(true);

    const [userName, setUsername] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const vueEdit = () => {
        setVueForm(!vueForm)
    }

    const saveEdit = (e) => {
        e.preventDefault();
        let infoEdit = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
        };

        console.log(infoEdit);
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
                        onChange={(e) => setfirstName(e.target.value)}
                        disabled
                    />
                </div>
                <div className="inputText">
                    <label htmlFor="lastname">Last Name :</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
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