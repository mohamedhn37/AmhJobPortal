import React from 'react'
import './HomeHead.css'
import { FaPlusCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import disabelPerson from '../../img/disabledP9.png'
import SeactionHead from '../SectionHead/SeactionHead';
import JobSearch from '../../Components/JobSearch/JobSearch';

const HomeHead = () => {
    return (
        <>
            <div className='HomeGenerale'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <SeactionHead title="La façon la plus facile pour accompagner vers l'emploi les candidats en situation d'handicap" description="Rechercher parmi les offres d'emploi, d'alternance ou de stage" />
                            <JobSearch />
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-end align-items-center mt-3">
                                    <NavLink to="/Offre" className="text-decoration-none text-black-50 fw-bold"><FaPlusCircle /> Voir toutes les offres</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div class="content">
                                <img src={disabelPerson} alt="disabelPerson" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHead