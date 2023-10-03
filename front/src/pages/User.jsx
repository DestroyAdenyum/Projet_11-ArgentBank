import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { isLogged } from "../redux/actions/user.actions";

import Account from "../components/Account";

function User() {
    const user = useSelector(store => store.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formdata] = useState({
        id: "",
        email:"",
    })


    useEffect(() => {
        // S'il n'y a pas de user.token retourne vers la page SignIn
        if (user.token === null) {
            return navigate('/SignIn');
        } else {
            const handleProfile = async() => {
                try {
                    await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${user.token}`
                        },
                        body: JSON.stringify(formdata)
                    }).then(response => {
                        if (response.ok) {
                            return response.json()
                        }
                    }).then(data => {
                        dispatch(isLogged(data.body))
                    })
                } catch(error) {
                    console.log(error)
                }
            };

            handleProfile();
        }
    }, [dispatch, navigate, user.token, user.isLogged, formdata])

    return (
        <main className="main user-bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            
            <Account 
                title='Argent Bank Checking (x8349)'
                amount='$2,082.79'
                text='Available Balance'
            />

            <Account 
                title='Argent Bank Savings (x6712)'
                amount='$10,928.42'
                text='Available Balance'
            />

            <Account 
                title='Argent Bank Credit Card (x8349)'
                amount='$184.30'
                text='Current Balance'
            />            
        </main>
    )
}

export default User;
