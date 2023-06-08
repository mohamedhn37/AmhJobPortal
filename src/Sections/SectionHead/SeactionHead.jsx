import React from 'react'
import './SeactionHead.css'

const SeactionHead = (props) => {
    return (
        <>
            <div className="row text-center">
                <div className="col-md-12 SeactionHeadContent">
                    <h2 className='fw-bold mb-4 position-relative'>{props.title}</h2>
                    <p className={props.className}>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default SeactionHead