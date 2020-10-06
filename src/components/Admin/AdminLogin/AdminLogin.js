import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AdminContext } from '../../../App';
import logo from '../../../logos/logo.png';

const AdminLogin = () => {
    const [loggedInAdmin, setLoggedInAdmin] = useContext(AdminContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/admin" } }

    const [adminInfo, setAdminInfo] = useState({
        email: 'admin@gmail.com',
        password: 'admin'
    })
    console.log('email: admin@gmail.com, password: admin')

    const handleOnChange = (e) => {
        const newEvent = { ...adminInfo }
        if (e.target.name === 'email') {
            newEvent.email = e.target.value
        } else if (e.target.name === 'password') {
            newEvent.password = e.target.value
        }
        setAdminInfo(newEvent)
        // console.log(adminInfo);
        e.preventDefault()
    }

    const handleFormSubmit = (e) => {
        // console.log(adminInfo);
        fetch(`/adminLogin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setLoggedInAdmin(adminInfo)
                    history.replace(from);
                } else {
                    history.replace('/');
                }

            })
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="login d-flex justify-content-center">
                <div className="row">
                    <div className="my-2">
                        <Link to="/"><img src={logo} height="70" alt="" /></Link>
                    </div>
                </div>
            </div>

            <br />
            <div className="row d-flex justify-content-center">
                <div className="card w-50 mt-5">
                    <div className="card-body px-lg-5">

                        <form onSubmit={handleFormSubmit} className="text-center" style={{ color: "#757575" }} action="#!">

                            <div className="md-form">
                                <label htmlFor="">Email</label> <br/> <br/>
                                <input name="email" type="email" onChange={handleOnChange} placeholder="Email" value={adminInfo.email} className="form-control" />
                            </div>

                            <div className="md-form mt-3">
                                <label htmlFor="">Password</label> <br/> <br/>
                                <input name="password" type="text" onChange={handleOnChange} placeholder="Password" value={adminInfo.password} className="form-control" />
                            </div>

                            <button className="btn btn-primary" type="submit">Log In</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;