import React from 'react'
import "./four-up.scss"
import image7 from "../../images/image-7.png"
import image8 from "../../images/image-8.png"
import image9 from "../../images/image-9.png"
import image3 from "../../images/image-3.png"
import image10 from "../../images/image-10.png"


export const FourUp= (props) => {
  return(
      <>
    <section class="fourup__container">
      
        <div class="card">
            <img src={ image7} alt='mom-baby'/>
            <h5>Parenting</h5>
            <p>Mothering & Nurturing Your Children Is A Form Of Resistance</p>
        </div>
        <div class="card">
          <img src={ image3} alt='mom-baby'/>
          <h5>Parenting</h5>
          <p>Amy Schumer Is Done With The “Suck It The F*ck Up” Attitude To Pregnancy</p>
        </div>
        <div class="card">
          <img src={ image8} alt='mom-baby'/>
          <h5>Parenting</h5>
          <p>The House Passed 2 Child Care Funding Bills To Help Parents & Providers Amid COVID</p>
        </div>   
        <div class="card">
          <img src={ image9} alt='mom-baby'/>
          <h5>Parenting</h5>
          <p>The House Passed 2 Child Care Funding Bills To Help Parents & Providers Amid COVID</p>
        </div>
       
    </section>
        
    <div class="bottom__image">
          <img src={ image10} alt='mom-baby'/>
        </div>
     </>
   )
 }