import React from 'react'
import "./four-up.scss"
import Card from "../Card"


const FourUp= ({items}) => {
  return (
    <div class="fourup">
        {items.map((item, index) =>
          <div key={index} className="fourup__card">
             <Card content={item} key={index} />
          </div>
        )}
    </div>
  )
}

export default FourUp;