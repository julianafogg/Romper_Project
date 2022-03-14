import React from 'react'
import './card.scss'

const Card = ({content}) => {

  return(
    <div className="card">
        {content.image && <img src={content.image.src} alt={content.image.alt} />}
      <div className='wrapper'>
        <h4>{content.eyebrow}</h4>
        <p>{content.body}</p>
      </div>
    </div> 
   )
}

export default Card;

