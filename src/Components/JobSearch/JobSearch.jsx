import React from 'react'
import './JobSearch.css'
import { FaMapMarkerAlt, FaSearch, FaShoppingBag } from 'react-icons/fa'


const JobSearch = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="formSearch">
                        <form>
                            <div className="row align-items-center">
                                <div className="col-md-3 col-sm-12 form-group">
                                    <FaSearch className='icon' />
                                    <input name="cle" type="text" className="form-control" title="#" placeholder="Quoi ? poste..." />
                                </div>
                                <div className="col-md-3 col-sm-12 form-group">
                                    <FaShoppingBag className='icon' />
                                    <select id="domaine" name="domaine" title="Choisir un Domaine" className='select-header'>
                                        <option value="Choisir un Domaine" selected>Domaine</option>
                                        <option value="1">Achats</option>
                                        <option value="2">Administratif</option>
                                        <option value="3">Assistanat de direction</option>
                                        <option value="4">Commercial / Support commercial</option>
                                        <option value="5">Communication</option>
                                        <option value="6">Contrôle et risque</option>
                                        <option value="7">Finance</option>
                                        <option value="8">Gestion de projets / Etudes</option>
                                        <option value="9">Juridique</option>
                                        <option value="10">Marketing</option>
                                        <option value="11">Méthode / Organisation / Process</option>
                                        <option value="12">Moyens Généraux / Logistique</option>
                                        <option value="13">Qualité</option>
                                        <option value="14">Réseau Agence bancaires</option>
                                        <option value="15">Ressources Humaines</option>
                                        <option value="16">Santé / Social</option>
                                        <option value="17">Système d&#039;Information / AMOA</option>
                                        <option value="18">Autres</option>
                                    </select>
                                </div>
                                <div className="col-md-3 col-sm-12 form-group">
                                    <FaMapMarkerAlt className='icon'/>
                                    <select id="ville" name="ville" title="Choisir une Ville" className='select-header'>
                                        <option value="Choisir une ville" selected>ville</option>
                                        <option value="1">CASA</option>
                                        <option value="2">FES</option>
                                        <option value="3">EL JADIDA</option>
                                        <option value="4">RABAT</option>
                                        <option value="5">AGADIR</option>
                                        <option value="6">MARRAKECH</option>
                                        <option value="7">MEKNES</option>
                                        <option value="8">OUJDA</option>
                                        <option value="9">TANGER</option>
                                        <option value="10">LAAYOUNE</option>
                                    </select>
                                </div>
                                <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                                    <button className='HeaderBtn mt-3'>Chercher</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default JobSearch