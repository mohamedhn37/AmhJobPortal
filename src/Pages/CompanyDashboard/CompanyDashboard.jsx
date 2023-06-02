import React, { useState } from 'react';
import "./CompanyDashboard.css";
import AppHeader from "./Components/AppHeader/AppHeader";
import PageContent from "./Components/PageContent/PageContent";
import SideMenu from "./Components/SideMenu/SideMenu";

function UserDashboard() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={`main ${isActive ? 'active' : ''}`}>
        <AppHeader toggleMenu={toggleMenu} />
        <PageContent></PageContent>
      </div>
      <SideMenu isActive={isActive}></SideMenu>
    </>

  );
}
export default UserDashboard;
