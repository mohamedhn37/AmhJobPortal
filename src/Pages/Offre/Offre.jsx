import React from 'react'
import './Offre.css'
import JobSearch from '../../Components/JobSearch/JobSearch'
import SeactionHead from '../../Sections/SectionHead/SeactionHead'
import OffreCard from '../../Components/OffreCard/OffreCard'


const Offre = () => {
    return (
        <>

            <div className="container my-4">
                <SeactionHead className="mb-1 text-black-50" title="Travailleurs en situation de handicap : postulez aux offres d'emploi" />
                <JobSearch />
                <div className="row my-5 justify-content-center align-items-start">
                    <div className="col-md-4 bg-light rounded-3 mb-4">
                        <div className="row">
                            <div className="col-md-12 col-6">
                                <div className="p-4 my-3 fw-bold jobSearch rounded-4">
                                    <h4 className='mb-3 fw-bold'>Type de contrat</h4>
                                    <div className="TypeContrat">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label " for="flexCheckDefault">CDI</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">CDD</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">Stage</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">Emploi saisonnier</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">Anapec</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">Autre</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-6">
                                <div className="p-4 my-3 fw-bold jobSearch rounded-4">
                                    <h4 className='mb-3 fw-bold'>Niveau de qualification</h4>
                                    <div className="TypeContrat">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label " for="flexCheckDefault">Aucun diplôme</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">BAC</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">BAC+1</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">BAC+2</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">BAC+3</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">BAC+5</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">BAC+5 et plus</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row mb-3">
                            <OffreCard />
                            <OffreCard />
                            <OffreCard />
                            <OffreCard />
                            <OffreCard />
                            <OffreCard />
                            <OffreCard />
                            <OffreCard />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Offre