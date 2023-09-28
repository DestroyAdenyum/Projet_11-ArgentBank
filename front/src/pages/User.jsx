import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import Account from "../components/Account";

function User() {
    const user = useSelector(store => store.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (user.token === null) {
            return navigate('/SignIn');
        }
    }, [])
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
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