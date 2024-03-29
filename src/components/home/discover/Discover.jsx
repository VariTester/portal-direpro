import React from 'react'
import { discover } from '../../../Data'
import Heading from '../../common/Heading/Heading'
import './discover.css'

const Discover = () => {
  return (
    <><section className='discover'>
        <div className="container">
            <Heading title="Mercado Loreto"/>
            <div className="content">
                {discover.map((val) => {
                    return <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className='titulo'>
                        <h1 className='title'>{val.title}</h1>
                        </div>
                        
                    </div>
                })}
            </div>
        </div>
    </section></>
  )
}

export default Discover