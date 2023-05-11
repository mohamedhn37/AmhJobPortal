import React, { useState } from 'react';
import './Connexion.css';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SignUp from '../../img/signup1.svg' 
import Registre from '../../img/register.svg' 

const Connexion = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className={`connexion ${isSignUpMode ? "sign-up-mode" : ""}`}>
                            <div className="forms-connexion">
                                <div className="signin-signup">
                                    <form action="#" className="sign-in-form">
                                        <h2 className="fw-bold">Sign in</h2>
                                        <div className="input-field">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="input-field">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <input type="submit" value="Login" className="btn solid" />
                                        <p className="social-text">Or Sign in with social platforms</p>
                                        <div className="social-media">
                                            <NavLink href="#" className="social-icon">
                                                <FaGoogle />
                                            </NavLink>
                                            <NavLink href="#" className="social-icon">
                                                <FaLinkedin />
                                            </NavLink>
                                        </div>
                                    </form>
                                    <form action="#" className="sign-up-form">
                                        <h2 className="fw-bold">Sign up</h2>
                                        <div className="input-field">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="input-field">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="input-field">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <input type="submit" className="btn" value="Sign up" />
                                        <p className="social-text">Or Sign up with social platforms</p>
                                        <div className="social-media">
                                            <NavLink href="#" className="social-icon">
                                                <FaGoogle />
                                            </NavLink>
                                            <NavLink href="#" className="social-icon">
                                                <FaLinkedin />
                                            </NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="panels-container">
                                <div className="panel left-panel">
                                    <div className="content">
                                        <h3>New here ?</h3>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,ex ratione. Aliquid!
                                        </p>
                                        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                                            Sign up
                                        </button>
                                    </div>
                                    <img src={SignUp} className="image" alt="" />
                                </div>
                                <div className="panel right-panel">
                                    <div className="content">
                                        <h3>One of us ?</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
                                        </p>
                                        <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                                            Sign in
                                        </button>
                                    </div>
                                    <img src={Registre} className="image" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Connexion
