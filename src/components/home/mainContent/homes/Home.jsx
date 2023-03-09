import React from 'react'
import Discover from '../../discover/Discover'
import Side from '../../sideContent/side/Side'
import Life from '../life/Life'
import Music from '../music/Music'
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
              <Life/>
              <Music/>
              </section>
            <section className='sideContent'>
              <Side/>
            </section>
            </div>
        </main></>
  )
}

export default Home