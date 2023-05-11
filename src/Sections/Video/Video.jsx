import React from 'react'
import './Video.css'
import { NavLink } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const Video = () => {
  return (
    <>
        <div className="video">
          <div className="container text-center text-white position-relative content">
            <div className="row">
              <div className="col-md-12">
                <h3 className="fs-2 fw-bold p-3">Obtenir le travail qui vous convient</h3>
                <p className="p-1 mb-5">Découvrez nos offres d'emploi et développez votre carrière avec notre équipe dédiée à vous aider à atteindre vos objectifs professionnels.</p>
                <NavLink href="#" className="p-4 bg-primary rounded-circle"><FaPlay className='text-white p-1 fs-4'/></NavLink>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Video