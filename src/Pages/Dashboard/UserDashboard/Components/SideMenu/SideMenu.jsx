import React from "react";
import { NavLink } from "react-router-dom";
import { FaCog, FaHome, FaInbox, FaSignOutAlt, FaUser, FaUserCheck } from 'react-icons/fa';



const SideMenu = ({ isActive }) => {
  return (
    <div className={`UserDashboard ${isActive ? 'active' : ''}`}>
      <div  className={`navigation ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/UserDashboard">
              <span className="icon">
                <FaUserCheck className='ico'/>
              </span>
              <span className="title">Nom D'utilisateur</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/UserDashboard">
              <span className="icon">
                <FaHome className="ico"/>
              </span>
              <span className="title">Tableau de board</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/UserDashboard/Profil">
              <span className="icon">
                <FaUser className="ico" />
              </span>
              <span className="title">Mon Profil</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/UserDashboard/Condidature">
              <span className="icon">
                <FaInbox className="ico" />
              </span>
              <span className="title">Mes Condidature</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/UserDashboard/Setting">
              <span className="icon">
                <FaCog className="ico" />
              </span>
              <span className="title">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/UserDashboard/SignOut">
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
