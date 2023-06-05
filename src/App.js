import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomeGenerale from './Pages/Home/HomeGenerale';
import Offre from './Pages/Offre/Offre';
import Employeur from './Pages/Employeur/Employeur';
import Conseil from './Pages/Conseil/Conseil';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact/Contact';
import Connexion from './Pages/Connexion/Connexion';
import OffreDescription from './Pages/Offre/OffreDescription/OffreDescription';
import CompanyDetail from './Pages/Employeur/CompanyDetail/CompanyDetail';
import UserDashboard from './Pages/Dashboard/UserDashboard/UserDashboard';
import CompanyDashboard from './Pages/Dashboard/CompanyDashboard/CompanyDashboard';



const App = () => {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeGenerale/>}/>
        <Route path="/Offre" element={<Offre/>}/>
        <Route path="/Employeur" element={<Employeur/>} />
        <Route path="/Conseil" element={<Conseil/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Connexion" element={<Connexion/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/OffreDescription" element={<OffreDescription/>}/>
        <Route path="/CompanyDetail" element={<CompanyDetail/>}/>
        <Route path="/UserDashboard/*" element={<UserDashboard/>}/>
        <Route path="/CompanyDashboard/*" element={<CompanyDashboard/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
