import React from 'react'
import ProccesCard from '../../Components/ProcessCard/ProccesCard'
import { FaArrowRight, FaCalendarCheck, FaFileAlt, FaSearch, FaUsers } from 'react-icons/fa'
import SeactionHead from '../SectionHead/SeactionHead'
import { NavLink } from 'react-router-dom'

const Process = () => {
    return (
        <>
            <div className="container my-5">
                <SeactionHead className="mb-1 text-black-50" title="Notre processus de travail" description="Pour choisir votre rêve d’emploi tendance et pour rendre l’avenir brillant" />
                <div className="row my-4">
                    <ProccesCard>
                        <FaUsers className='fs-1' />
                        <div className="card-body text-center p-3">
                            <h5 className="card-title fw-bold text-white">Créer un compte</h5>
                            <p className="card-text text-black-50">Pour créer votre compte, soyez confiant, protégé et en toute sécurité.</p>
                            <button>
                                <NavLink to="https://www.talents-handicap.com/images/pdf/guide_candidats_2023.pdf" target='_blank'>
                                    En savoir plus <FaArrowRight />
                                </NavLink>
                            </button>
                        </div>
                    </ProccesCard>
                    <ProccesCard>
                        <FaFileAlt className='fs-1' />
                        <div className="card-body text-center p-3">
                            <h5 className="card-title fw-bold text-white">Compléter ton profil</h5>
                            <p className="card-text text-black-50"> Rendez votre profil attractif et augmentez vos chances d'être recruté.</p>
                            <button>
                                <NavLink to="https://www.talents-handicap.com/images/pdf/guide_candidats_2023.pdf" target='_blank'>
                                    En savoir plus <FaArrowRight />
                                </NavLink>
                            </button>
                        </div>
                    </ProccesCard>
                    <ProccesCard>
                        <FaSearch className='fs-1' />
                        <div className="card-body text-center p-3">
                            <h5 className="card-title fw-bold text-white">Chercher</h5>
                            <p className="card-text text-black-50">Trouvez des offres d'emploi adaptées à votre profil et développez votre carrière.</p>
                            <button>
                                <NavLink to="https://www.talents-handicap.com/images/pdf/guide_candidats_2023.pdf" target='_blank'>
                                    En savoir plus <FaArrowRight />
                                </NavLink>
                            </button>
                        </div>
                    </ProccesCard>
                    <ProccesCard>
                        <FaCalendarCheck className='fs-1' />
                        <div className="card-body text-center p-3">
                            <h5 className="card-title fw-bold text-white">Postuler</h5>
                            <p className="card-text text-black-50">Postulez dès maintenant pour de nouvelles opportunités de carrière.</p>
                            <button>
                                <NavLink to="https://www.talents-handicap.com/images/pdf/guide_candidats_2023.pdf" target='_blank'>
                                    En savoir plus <FaArrowRight />
                                </NavLink>
                            </button>
                        </div>
                    </ProccesCard>
                </div>
            </div>
        </>
    )
}

export default Process