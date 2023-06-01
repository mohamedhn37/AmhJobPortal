import React from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import LogoAmh from '../../img/Logo-AMH.png';


const Header = () => {

  const location = useLocation();
  const hideHeaderPaths = ['/UserDashboard'];

  const shouldHideHeader = hideHeaderPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  if (shouldHideHeader) {
    return null;
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={LogoAmh} alt="LogoAmh" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav">
            <ul className="navbar-nav first ms-4">
              <li className="nav-item px-1">
                <NavLink className="nav-link" to="/">Accueil</NavLink>
              </li>
              <li className="nav-item px-1 dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/Recherche" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ma Recherche
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="nav-link" to="/Offre">Offre D'emploi</NavLink></li>
                  <li><NavLink className="nav-link" to="/Employeur">Nos Employeurs</NavLink></li>
                  <li><NavLink className="nav-link" to="/Conseil">Nos Conseils</NavLink></li>
                  <li><NavLink className="nav-link" to="/Connexion">M'inscrire</NavLink></li>
                </ul>
              </li>
              <li className="nav-item px-1 dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/Infos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Informations utils
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="nav-link" to="https://groupeamh.org/evenements/" target='_blank'>Actualité</NavLink></li>
                  <li><NavLink className="nav-link" to="https://www.talents-handicap.com/images/pdf/guide_candidats_2023.pdf" target='_blank'>Quide De Condidature</NavLink></li>
                  <li><NavLink className="nav-link" to="/FAQ">Foire Aux Questions</NavLink></li>
                </ul>
              </li>
              <li className="nav-item px-1">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Connexion">
                  <button className='btn btn-danger text-dark fw-bold'>Postuler</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Connexion">
                  <button className='btn btn-primary fw-bold'>Inscription</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
