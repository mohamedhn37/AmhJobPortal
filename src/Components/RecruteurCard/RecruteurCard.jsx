import React from 'react'
import './RecruteurCard.css'
import disabledp2 from '../../img/disabledP9.png'
import { FaHotel, FaMapMarkerAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const RecruteurCard = (props) => {
    return (
        <>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="cardrecruteur">
                        <div className="flip-card">
                            <div className="flip-card__container">
                                <div className="card-front">
                                    <div className="card-front__tp text-light">
                                        <FaHotel className='fs-1 mb-1'/>
                                        <h2 className="fs-4 fw-bold mb-2">{props.CompanyName}</h2>
                                        <p className="text-info"><FaMapMarkerAlt/>{props.Companymap}</p>
                                    </div>
                                    <div className="card-front__bt d-flex justify-content-center align-items-center">
                                        <p className="text-danger fs-4 fw-bold my-2">Voir Détails</p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <img src={disabledp2} alt="disabledp2" />
                                </div>
                            </div>
                        </div>
                        <div className="inside-page">
                            <div className="d-flex align-items-center flex-column text-center">
                                <h3 className="fs-5 fw-bold text-danger">détails de l'entreprise</h3>
                                <p className="text-black-50 mt-2">{props.CompanyDescription}</p>
                                <NavLink to="/CompanyDetail">
                                    <button className='btn btn-danger'>Voir Plus</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default RecruteurCard