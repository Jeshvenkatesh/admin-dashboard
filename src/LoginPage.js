import React from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import classes from './login.module.css';



const Loginpage = (props) => {
    const onSubmitClick = (e) => {
        e.preventDefault();
        // props.onUserLoginSuccess()
        props.onUserLoggedIn()
        props.onbackgroundChange(0)
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        console.log(data);
        // Axios.post("https://www.mockapi.io/clone/5e0a2be192b6410014c29fb4", data)
        // .then(response=>{
        //     // props.onUserLoginSuccess()
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
    }
    return (
        <div>
            <form onSubmit={onSubmitClick}>
                <div className={classes.loginwrapper}>
                    <h3>Welcome to Dashboard Login</h3>
                    <p>UserName</p>
                    <input type="text" required name="username" />
                    <p>Password</p>
                    <input type="password" required name="password" />
                    <br />
                    <br />
                    {/* <button type="submit" onClick={props.onUserLoginSuccess}>Login</button> */}
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Loginpage;