import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashboard from '../../UserDashboard'
import Profil from '../../Pages/Profil/Profil'
import Condidature from '../../Pages/Condidature/Condidature'
import Setting from '../../Pages/Setting/Setting'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/UserDashboard" element={<UserDashboard/>} />
            <Route path="/UserDashboard/Profil" element={<Profil/>} />
            <Route path="/UserDashboard/Condidature" element={<Condidature/>} />
            <Route path="/UserDashboard/Setting" element={<Setting/>} />
        </Routes>
    )
}

export default AppRoutes