import React from 'react'
import  Popular  from '../popular/Popular'
import  Ppost  from '../Ppost/Ppost'
import './style.css'

const Home = () => {
  return (
    <>
        <main>
            <div className='container'>
            <section className='mainContent'>
              <Popular/>
              <Ppost/>
              </section>
            <section className='sideContent'></section>
            </div>
        </main></>
  )
}

export default Home