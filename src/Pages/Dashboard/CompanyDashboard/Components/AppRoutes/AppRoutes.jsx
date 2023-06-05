import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Dashbaord/Dashboard'
import Profil from '../../Pages/Profil/Profil'
import Offre from '../../Pages/Offre/Offre'
import GestionCondidature from '../../Pages/GestionCondidature/GestionCondidature'
import Setting from '../../Pages/Setting/Setting'



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/CompanyDashboard" element={<Dashboard/>} />
            <Route path="/CompanyDashboard/Profil" element={<Profil/>} />
            <Route path="/CompanyDashboard/Offre" element={<Offre/>} />
            <Route path="/CompanyDashboard/GestionCondidature" element={<GestionCondidature/>} />
            <Route path="/CompanyDashboard/Setting" element={<Setting/>} />
        </Routes>
    )
}

export default AppRoutes