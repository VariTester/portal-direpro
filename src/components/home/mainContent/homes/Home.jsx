import React from 'react'
import  Popular  from '../popular/Popular'
import './style.css'

const Home = () => {
  return (
    <>
        <main>
            <div className='container'>
            <section className='mainContent'>
              <Popular/>
              </section>
            <section className='sideContent'></section>
            </div>
        </main></>
  )
}

export default Home