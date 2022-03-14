import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"


export default function Homepage() {

  const data = {
    hero: {
      title: "Motherhood",
      lockUp: {
        image: {
          src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          alt: "mom"
        },
        title: "An Unexpected Visitor In The Time Of Quarantine"
      },
      list: {
        title: "More on Motherhood",
        items: [
          {
            eyebrow: "Motherhood",
            body: "Mayim Bialik Has Done Home Schooling. This Is Much Harder."
          },
          {
            eyebrow: "Motherhood",
            body: "M10 Things Teachers *Need* From Parents This Year, Whether You’re Virtual Or In-Person."
          },
          {
            eyebrow: "Motherhood",
            body: "Teachers Are Worried About Schools Reopening & These Are 15 Of Their Biggest Concerns."
          }
        ]
      },

      treeUp: [
        {
          image: {
            src: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            alt: "mom"
          },
          eyebrow: "Parenting",
          body: "Mothering & Nurturing Your Children Is A Form Of Resistance."
        },
        {
          image: {
            src: "https://images.unsplash.com/photo-1560707854-fb9a10eeaace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            alt: "mom"
          },
          eyebrow: "Parenting",
          body:
            "Amy Schumer Is Done With The “Suck It The F*ck Up” Attitude To Pregnancy."
        },
        {
          image: {
            src: "https://images.unsplash.com/photo-1484665754804-74b091211472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            alt: "mom"
          },
          eyebrow: "Parenting",
          body:
            "The House Passed 2 Child Care Funding Bills To Help Parents & Providers Amid COVID."
        },
      ],
      twoUp: [
        {
          image: {
            src: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            alt: "mom"
          },
          eyebrow: "Motherhood",
          body: "14 Children's Book Recommendations From Independent Booksellers"
        },
        {
          image: {
            src: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            alt: "mom"
          },
          eyebrow: "Motherhood",
          body: "9 Teachers Talk Working & Parenting At Home, As “Reopenings” Loom"
        },
      ],
      
      fourUp: [
        {
          image: {
            src: "https://images.unsplash.com/photo-1537440499989-de5f6b6854de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            alt: "mom"
          },
          eyebrow: "Parenting",
          body: "6 Things To Consider Before Holding Your Kid Back A Grade This Year, According To Experts"
        },
        {
          image: {
            src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            alt: "mom"
          },
          eyebrow: "Parenting",
          body: "Amy Schumer Is Done With The “Suck It The F*ck Up” Attitude To Pregnancy"
        },
        {
          image: {
            src: "https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            alt: "mom"
          },
          eyebrow: "Parenting",
          body: "What Kindergarten Teachers Want Parents To Know About School This Fall Amid COVID"
        },
        {
          image: {
            src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            alt: "mom"
          },
          eyebrow: "Parenting",
          body: "Amy Schumer Is Done With The “Suck It The F*ck Up” Attitude To Pregnancy"
        },
      ]     
    }
  };


  return (
    <main>
      <Navbar/>
      <Hero data={data.hero}/>    
    </main>
  )
}

