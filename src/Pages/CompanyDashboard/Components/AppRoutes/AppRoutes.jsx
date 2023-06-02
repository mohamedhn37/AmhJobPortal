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
            <Route path="/UserDashboard" element={<Dashboard/>} />
            <Route path="/UserDashboard/Profil" element={<Profil/>} />
            <Route path="/UserDashboard/Offre" element={<Offre/>} />
            <Route path="/UserDashboard/GestionCondidature" element={<GestionCondidature/>} />
            <Route path="/UserDashboard/Setting" element={<Setting/>} />
        </Routes>
    )
}

export default AppRoutes