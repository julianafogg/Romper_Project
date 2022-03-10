import React from 'react'
import image1 from "../../images/image1.png"
import "./hero.scss"


export const Hero= ( ) => {
 
  // const data = [
  //   {title: Motherhood, p: "Mayim Bialik Has Done Home Schooling. This Is Much Harder." },
  //   {title: Motherhood, p: "Mayim Bialik Has Done Home Schooling. This Is Much Harder." },
  //   {title: Motherhood, p: "Mayim Bialik Has Done Home Schooling. This Is Much Harder." },
  // ];


    // return (
    //   <div className="info__container">
    //    {DataTransfer.map((data,index) => 
    //     <div key={index} className="main-eyebrow">
    //         {data.title}
    //         {data.p}
    //     </div>
    //    ))}
    //  </div>
    // )
   


  return(
    <>
    <div className='title'>
       <h1 className="main__title">Motherhood</h1>
    </div>
    <section className="main__container" id="main">
      
        <div className="main__img">
          <img src={ image1} alt='mom'/>
        </div>

      <div className="main__content">
          
          <h2 className="main__subhead">An Unexpected Visitor In The Time Of Quarantine</h2> 
          <h3 className="main__subtitle"><span class="script-text"> More on </span> Motherhood </h3>

      <div className="info__container">
          <div className="main__eyebrow">
            <p className="title">Motherhood</p>
            <p >Mayim Bialik Has Done Home Schooling. This Is Much Harder.</p>
          </div>
          <div className="main__eyebrow">
            <p className="title">Motherhood</p>
            <p >Mayim Bialik Has Done Home Schooling. This Is Much Harder.</p>
          </div>
          <div className="main__eyebrow">
            <p className="title">Motherhood</p>
            <p >Mayim Bialik Has Done Home Schooling. This Is Much Harder.</p>
          </div>
        </div>
      </div>  
    </section>
    </>
   )
 }