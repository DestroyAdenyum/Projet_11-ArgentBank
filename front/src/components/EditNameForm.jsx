import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editName } from "../redux/actions/user.actions";

function EditNameForm() {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        userName: user.userName,
    });

    const handleChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

    const handleEditForm = (e) => {
        e.preventDefault();

        try {
            fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify(form)
            }).then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data => {
                dispatch(editName(data.body))
            })
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="edit-content">
            <h2>Edit Name</h2>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">User name</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        value={form.username}
                        onChange={handleChangeForm}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstname">First name</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={user.firstName}
                        disabled
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastname">Last name</label>
                    <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={user.lastName}
                        disabled
                    />
                </div>
                <button type="submit" className="sign-in-button" onClick={handleEditForm}>Save</button>
                <button className="sign-in-button">Cancel</button>
            </form>
        </div>
    )
}

export default EditNameForm;
