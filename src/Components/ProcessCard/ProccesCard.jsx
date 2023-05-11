import React from 'react'
import './ProcessCard.css'

const ProccesCard = (props) => {
  return (
    <>
        <div className="col-md-3">
            <div className="card cardProcces align-items-center rounded-circle py-3 my-4">
                {props.children}
            </div>        
        </div>  
    </>
  )
}

export default ProccesCard