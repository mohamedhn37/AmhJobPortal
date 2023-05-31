import React from 'react'
import './Footer.css';
import { NavLink, useLocation } from 'react-router-dom';
import LogoAmh from '../../img/LOGO-SITE-WHITE.png'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';



const Footer = () => {

    const location = useLocation();
    const showFooter = location.pathname !== '/UserDashboard'; 
    if (!showFooter) {
      return null;
    }
  return (
    <>
        <div className="container-fluid footer px-5 pt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className='fw-bold'>Abonnez-vous à notre newsletter</h2>
                    <p>Soyez les premiers informé·es de nos forums, de nos événements, de nos conseils et de nos actualités</p>
                </div>
                <div className="col-md-6 newsletter">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control bgForm" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-danger" type="button" id="button-addon2">Envoyer</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row mt-5">
                <div className="col-md-4 my-3">
                    <img src={LogoAmh} alt="logoAmh" width={250}/>
                    <p className='mt-3 fw-bold'>Fondé en 1992 et reconnu d’utilité publique, notre groupement associatif d’entrepreneuriat social intervient dans les domaines de la santé, de l’autonomie, de l’éducation et de la formation..</p>    
                    <NavLink href="#"><FaFacebook className='me-4 text-white fs-5'/></NavLink>
                    <NavLink href="#"><FaTwitter className='me-4 text-white fs-5'/></NavLink>
                    <NavLink href="#"><FaLinkedin className='me-4 text-white fs-5'/></NavLink>
                    <NavLink href="#"><FaYoutube className='me-4 text-white fs-5'/></NavLink>
                </div>
                <div className="col-md-3 col-8 my-3">
                    <h4 className='text-white fw-bold'>Service AMH</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>Centre Hospitalier Noor – Casablanca</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>Centre Noor – Khouribga</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>Action Sociale – Casablanca</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>Insitution Tahar Sebti – Casablanca</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>AMH Skills – Casablanca</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 col-2 my-3">
                    <h4 className='text-white fw-bold'>Quick link</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>Accueil</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>Offre</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>Blog</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>About</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>FAQ</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 my-3">
                    <h4 className='text-white fw-bold'>Contact infos</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>contact@groupeamh.org</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>+212 5229-85051</NavLink>
                        </li>
                        <li className='my-2'>
                            <NavLink href="/" className='text-decoration-none'>77 Bd 9 Avril, Casablanca 20000</NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12 text-center">
                    <p className='fw-bold'>Copyright &copy;2023 Groupe AMH.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer