import React from "react"
import "./two-up.scss"
import image5 from "../../images/image-5.png"
import image6 from "../../images/image-6.png"



export const TwoUp= (props) => {
  return (
    
    <section class="twoup__container" >
        <h1>Module Title Here</h1>
          <div className="cards">
            <div className="card">
              <img src={ image5} alt='mom-baby'/>  
              <h5 className="main__eyebrow">Motherhood</h5>
              <p>14 Children's Book Recommendations From Independent Booksellers</p>
            </div>
    
          <div class="card">
            <img src={ image6} alt='mom-baby'/>  
            <h5 className="main__eyebrow">Motherhood</h5>
            <p>9 Teachers Talk Working & Parenting At Home, As “Reopenings” Loom</p>
            </div>
        </div>
    </section>  
  )
}