import React from 'react';
import classes from './Topbar.module.css';
import { Link } from 'react-router-dom';


const Topbar = (props) => {

    const Data = [
        {
            id: '1',
            icon: 'fas fa-tachometer-alt',
            heading: 'Dashboard',
            link: '/'
        },
        {
            id: '2',
            icon: 'fas fa-shopping-cart',
            heading: 'Products',
            link: '/Products'
        },
        {
            id: '3',
            icon: 'far fa-user',
            heading: 'Accounts',
            link: '/Accounts'
        }
    ]

    const generateDivs = Data.map((item, pos) => {
        const colorArr = [classes.subdiv]
        // console.log(props.backgroundChangePos)
        const linkArr = [];
        if (pos === props.backgroundChangePos) {
            colorArr.push(classes.addclass)
            linkArr.push(classes.linkclass)
        }
        return (
            <Link to={item.link} className={linkArr.join(' ')} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div style={{ textDecoration: 'none' }} key={pos} className={colorArr.join(' ')} onClick={() => props.onbackgroundChange(pos)} >
                    <i className={item.icon}></i>
                    <h4>{item.heading}</h4>
                </div>
            </Link>
        )
    })
    return (
        <section>
            <div className={classes.mainflex}>
                <div>
                    <h2>PRODUCT ADMIN</h2>
                </div>
                <div className={classes.maindiv}>
                    {generateDivs}
                </div>
                <div>
                    {  props.loginStatus ?  <h3 onClick={()=>{
                        props.onUserLoggedIn();
                        props.onbackgroundChange('null')}} >Logout</h3> : <h3>Login</h3> } 
                </div>
            </div>
        </section>
    );
}
export default Topbar;