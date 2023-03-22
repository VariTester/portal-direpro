import React from 'react'
import { tpost } from '../../../../Data'
import Heading from '../../../common/Heading/Heading'
import './tpost.css'

import { Link } from "react-router-dom"

const Tpost = () => {
  return (
    <>
    <section className='tpost'>
        <Heading title='Páginas de Interés' />
        {tpost.map((val) => {
          return (
            <div className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title}</h1>
                <span><Link to={"val.link"}>Ingresar</Link></span>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Tpost