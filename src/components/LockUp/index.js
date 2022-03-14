import React from 'react'
import  Card   from '../Card'
import "./lock-up.scss"  

const LockUp = ({ lockUp, list }) => (

  <div className="lockup">
      <img className="lockup__image" src={lockUp.image.src} alt={lockUp.image.alt}/> 
        <div className='lockup__right'>
          <h2>{lockUp.title}</h2>
        <div className="lockup__list"> 
          <h3>{list.title}</h3>
          <ul>
            {list.items.map((item, index) => (
              <li key={index}>
                <Card content={item} />
              </li>
            ))}  
          </ul>
        </div>
      </div>
  </div>
);

export default LockUp;

