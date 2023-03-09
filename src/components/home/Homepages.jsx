import React from "react"
// import Discover from "./discover/Discover"
// import Hero from "../home/hero/Hero"
import Hero from "../home/hero/Hero"
import Discover from "./discover/Discover"
import Home from "./mainContent/homes/Home"
// import Homes from "./mainContents/homes/Home"

const Homepages = () => {
  return (
    <>
      <Hero/>
      <Home/>
      {/* <Home/> */}
      <Discover/>
    </>
  )
}

export default Homepages