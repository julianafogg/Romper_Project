import React from "react"
import "./three-up.scss"
import image2 from "../../images/image-2.png"
import image3 from "../../images/image-3.png"
import image4 from "../../images/image-4.png"


export const ThreeUp= (props) => {
  return (
    <section class="threeup__container">
        <div class="card">
            <img src={ image2} alt='mom-baby'/>
            <h5>Parenting</h5>
            <p>Mothering & Nurturing Your Children Is A Form Of Resistance</p>
        </div>
        <div class="card">
          <img src={ image3} alt='mom-baby'/>
          <h5>Parenting</h5>
          <p>Amy Schumer Is Done With The “Suck It The F*ck Up” Attitude To Pregnancy</p>
        </div>
        <div class="card">
          <img src={ image4} alt='mom-baby'/>
          <h5>Parenting</h5>
          <p>The House Passed 2 Child Care Funding Bills To Help Parents & Providers Amid COVID</p>
        </div>   
    </section>
  )
}