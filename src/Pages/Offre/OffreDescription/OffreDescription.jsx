import React from 'react'
import './OffreDescription.css'
import SeactionHead from '../../../Sections/SectionHead/SeactionHead'
import { FaPaperPlane } from 'react-icons/fa'

const OffreDescription = () => {
    return (
        <>
            <div className="OffreDescription">
                <div className="container-fluid DetailOffre">
                    <SeactionHead title="Détail de l'offre" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="infos">
                                <div className="offreInfos">
                                    <h1>Nom D'offre</h1>
                                    <p className='text-success'>Date d'annonce : Lundi 15 mai 2023</p>
                                    <p className='fw-bold text-danger'>Date de fin : Lundi 29 mai 2023</p>
                                </div>
                                <button type="button"><FaPaperPlane className='me-2' />Postuler</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="jobdetail">
                                <h5 className='text-primary fw-bold text-center mb-3'>Detail de l'offre</h5>
                                <ul className='list-unstyled'>
                                    <li className='fw-bold'>Référence: <span className='text-primary'>AAAAAA2023</span></li>
                                    <li className='fw-bold'>Lieu: <span className='text-primary'>CASA</span></li>
                                    <li className='fw-bold'>Type: <span className='text-primary'>CDI</span></li>
                                    <li className='fw-bold'>Domaine: <span className='text-primary'>Marketing</span></li>
                                    <li className='fw-bold'>Niveau d'étude: <span className='text-primary'>Bac+5</span></li>
                                    <li className='fw-bold'>Niveau d'expérience: <span className='text-primary'>5 à 10</span></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="description">
                                <h4 className='fw-bold text-primary'>Description</h4>
                                <ul>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam cupiditate non tempore repellat excepturi necessitatibus fuga architecto eum suscipit eius et obcaecati mollitia illum molestias, aperiam possimus, ex itaque!</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam cupiditate non tempore repellat excepturi necessitatibus fuga architecto eum suscipit eius et obcaecati mollitia illum molestias, aperiam possimus, ex itaque!</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam cupiditate non tempore repellat excepturi necessitatibus fuga architecto eum suscipit eius et obcaecati mollitia illum molestias, aperiam possimus, ex itaque!</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam cupiditate non tempore repellat excepturi necessitatibus fuga architecto eum suscipit eius et obcaecati mollitia illum molestias, aperiam possimus, ex itaque!</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam cupiditate non tempore repellat excepturi necessitatibus fuga architecto eum suscipit eius et obcaecati mollitia illum molestias, aperiam possimus, ex itaque!</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam cupiditate non tempore repellat excepturi necessitatibus fuga architecto eum suscipit eius et obcaecati mollitia illum molestias, aperiam possimus, ex itaque!</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam cupiditate non tempore repellat excepturi necessitatibus fuga architecto eum suscipit eius et obcaecati mollitia illum molestias, aperiam possimus, ex itaque!</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam cupiditate non tempore repellat excepturi necessitatibus fuga architecto eum suscipit eius et obcaecati mollitia illum molestias, aperiam possimus, ex itaque!</li>
                                </ul>
                                <button type="button"><FaPaperPlane className='me-2' />Postuler</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OffreDescription