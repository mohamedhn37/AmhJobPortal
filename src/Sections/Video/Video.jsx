import React, { useState } from 'react'
import './Video.css'
import { FaPlay, FaTimes } from 'react-icons/fa'

const Video = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
        <div className="video">
          <div className="container text-center text-white position-relative content">
            <div className="row">
              <div className="col-md-12">
                <h3 className="fs-2 fw-bold p-3">Obtenir le travail qui vous convient</h3>
                <p className="p-1 mb-5">Découvrez nos offres d'emploi et développez votre carrière avec notre équipe dédiée à vous aider à atteindre vos objectifs professionnels.</p>
                <button className="btn btn-primary p-4 mb-4 rounded-circle" onClick={togglePopup}><FaPlay className='text-white p-1 fs-4'/></button>
                {isPopupVisible && (
                          <div className="popup">
                            <span className="close" onClick={togglePopup}><FaTimes/></span>
                            <div className="VideoContent">
                            <iframe  src="https://www.youtube.com/embed/XvqzTmZd8as" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                          </div>
                        )}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Video