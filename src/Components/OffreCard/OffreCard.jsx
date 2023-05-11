import React from 'react'
import './OffreCard.css'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const OffreCard = () => {
    return (
        <>
            <div className="col-md-6 col-12">
                <div className="joboffreCard">
                    <div className="offreContent">
                        <div className="offreImg">
                            <img src="https://placehold.co/75x75/png" alt="fffff" />
                        </div>
                        <div className="offreDescription my-3">
                            <h3>Nom D'offre</h3>
                            <p><FaMapMarkerAlt className='me-1'/> Location</p>
                            <p><FaClock className='me-1'/>05-05-2023</p>
                            <p>Type D'offre</p>
                        </div>
                        <button type="button">Postuler</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OffreCard