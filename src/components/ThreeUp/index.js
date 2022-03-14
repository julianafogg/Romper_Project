import React from "react"
import Card from "../Card"
import "./three-up.scss"

const ThreeUp= ({items}) => {
  return (
    <div class="threeup__container">
        {items.map((item, index) =>
          <div key={index} className="threeup__card">
             <Card content={item} key={index} />
          </div>
        )}
    </div>
  )
}

export default ThreeUp;