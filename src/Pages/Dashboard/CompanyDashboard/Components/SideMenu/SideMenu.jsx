import React from "react";
import { NavLink } from "react-router-dom";
import { FaBoxOpen, FaCog, FaHome, FaInbox, FaSignOutAlt, FaUser, FaUserCheck } from 'react-icons/fa';



const SideMenu = ({ isActive }) => {
  return (
    <div className={`CompanyDashboard ${isActive ? 'active' : ''}`}>
      <div  className={`navigation ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/CompanyDashboard">
              <span className="icon">
                <FaUserCheck className='ico'/>
              </span>
              <span className="title">Nom De Société</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/CompanyDashboard">
              <span className="icon">
                <FaHome className="ico"/>
              </span>
              <span className="title">Tableau de board</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/CompanyDashboard/Profil">
              <span className="icon">
                <FaUser className="ico" />
              </span>
              <span className="title">Mon Profil</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/CompanyDashboard/Offre">
              <span className="icon">
                <FaInbox className="ico" />
              </span>
              <span className="title">Mes Offre</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/CompanyDashboard/GestionCondidature">
              <span className="icon">
                <FaBoxOpen className="ico" />
              </span>
              <span className="title">Gestion des condidature</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/CompanyDashboard/Setting">
              <span className="icon">
                <FaCog className="ico" />
              </span>
              <span className="title">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/CompanyDashboard/SignOut">
              <span className="icon">
                <FaSignOutAlt className="ico" />
              </span>
              <span className="title">Sign Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
