import React, { useContext, useEffect} from 'react';
import logo from '../../logos/logo.png';
import google from '../../logos/google.png';
import LoginFormStyle from './LoginFormStyle.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { googleSignIn, initializeFirebaseLogin } from './GoogleLoginManager';
import { UserContext } from '../../App';

const LoginForm = () => {
    initializeFirebaseLogin();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/profile" } }

    const check = JSON.parse(localStorage.getItem('user')) || {};
    if(check.email || loggedInUser.email){
        setLoggedInUser(check);
        history.replace(from);
    }else{}

    const handleResponse = (res, redirect) => { //---------------- Handle response from firebase
            setLoggedInUser(res)
            localStorage.setItem('user', JSON.stringify(res));
            redirect && history.replace(from);
    }

    const googleSignInClick = () => {
        googleSignIn()
            .then(res => {
                res && handleResponse(res, true);
            })
    }

    return (
        <div>
            <div className="login d-flex justify-content-center">
                <div className="row">
                    <div className="my-2">
                        <Link to="/"><img src={logo} height="70" alt="" /></Link>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center py-5" style={{height:'400px'}}>
                <div className="card-section card w-50 mt-5 d-flex justify-content-center align-items-center" >
                    <div className="card-body ">
                        <h3>Login With</h3> <br />
                    </div>
                    <div className="social-login px-5 py-2 w-50">
                        <button className="button " onClick={googleSignInClick}>
                            <img src={google} height="25" alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Continue with Google
                            </button>
                    </div>
                    <br/>
                    <p>Don't have an account? <Link onClick={googleSignInClick} to="#">Create an account</Link> </p>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;