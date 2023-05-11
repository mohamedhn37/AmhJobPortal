import React from 'react'


const SeactionHead = (props) => {
    return (
        <>
            <div className="row text-center">
                <div className="col-md-12">
                    <h2 className='fw-bold mb-4 position-relative'>{props.title}</h2>
                    <p className='mb-1 text-black-50'>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default SeactionHead