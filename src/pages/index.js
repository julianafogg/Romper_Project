import React from "react"
import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { ThreeUp } from "../components/ThreeUp"
import { TwoUp } from "../components/TwoUp"
import { FourUp } from "../components/FourUp"


export default function Homepage() {

// const data ={
// all the site data goes here as well as pitures
// }

  return (
    <main>
      <Navbar/>
      <Hero/>
      <ThreeUp/>
      <TwoUp/>
      <FourUp/>
    </main>
  )
}
