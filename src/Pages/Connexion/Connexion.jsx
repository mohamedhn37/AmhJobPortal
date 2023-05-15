import React, { useState } from 'react';
import './Connexion.css';
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
                                        <h2 className="fw-bold">Connectez-vous</h2>
                                        <div className="input-field">
                                            <input type="text" placeholder="Identifiant" />
                                        </div>
                                        <div className="input-field">
                                            <input type="password" placeholder="Mot De Passe" />
                                        </div>
                                        <input type="submit" value="Connecter" className="btn solid" />
                                    </form>
                                    <form action="#" className="sign-up-form">
                                        <h2 className="fw-bold">S'inscrire</h2>
                                        <div className="input-field">
                                            <input type="text" placeholder="Identifiant" />
                                        </div>
                                        <div className="input-field">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="input-field">
                                            <input type="password" placeholder="Mot De Passe" />
                                        </div>
                                        <div className="input-field">
                                            <select id="CompteType" name="Type" title="Vous êtes">
                                                <option value="Choisir un Compte Type" selected>Vous êtes</option>
                                                <option value="1">Utilisateur</option>
                                                <option value="2">Société</option>
                                            </select>
                                        </div>
                                        <input type="submit" className="btn" value="Enregistrer" />
                                    </form>
                                </div>
                            </div>
                            <div className="panels-container">
                                <div className="panel left-panel">
                                    <div className="content">
                                        <h3>Nouveau ici ?</h3>
                                        <p>Commencez votre recherche d'emploi avec nous en un simple clic et accédez à un large éventail d'offres exclusives correspondant à vos compétences et aspirations professionnelles.</p>
                                        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                                            S'inscrire
                                        </button>
                                    </div>
                                    <img src={SignUp} className="image" alt="SignUp" />
                                </div>
                                <div className="panel right-panel">
                                    <div className="content">
                                        <h3>Un de nous ?</h3>
                                        <p> Accédez rapidement à votre compte et profitez de toutes les fonctionnalités personnalisées pour optimiser votre recherche d'emploi et faire progresser votre carrière.</p>
                                        <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                                            Connectez
                                        </button>
                                    </div>
                                    <img src={Registre} className="image" alt="Registre" />
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
