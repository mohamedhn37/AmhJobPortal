import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Pages/Dashbaord/Dashboard';
import Profil from "../../Pages/Profil/Profil";
import Condidature from '../../Pages/Condidature/Condidature';
import Setting from '../../Pages/Setting/Setting';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/UserDashboard" element={<Dashboard />}/>
        <Route path="/UserDashboard/Profil" element={<Profil/>}/>
        <Route path="/UserDashboard/Condidature" element={<Condidature/>}/>
        <Route path="/UserDashboard/Setting" element={<Setting/>}/>
      </Routes>
  );
}
export default AppRoutes;
