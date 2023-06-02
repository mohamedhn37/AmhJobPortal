import React from 'react'
import './ProcessCard.css'

const ProccesCard = (props) => {
  return (
    <>
        <div className="col-md-3">
            <div className="cardProcces rounded-circle py-3 my-3">
                {props.children}
            </div>        
        </div>  
    </>
  )
}

export default ProccesCard