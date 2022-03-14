import React from "react"
import Card from "../Card"
import "./two-up.scss"

const TwoUp= ({items}) => {
  return (
    <div class="thwoup">
        {items.map((item, index) =>
          <div key={index} className="twoup__card">
             <Card content={item} key={index}/>
          </div>
        )}
    </div>
  )
}

export default TwoUp;

