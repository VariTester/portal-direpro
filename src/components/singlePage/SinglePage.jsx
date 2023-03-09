import React, { useState} from 'react'
import './singlepage.css'
import SinglePageSlider from './SinglePageSlider/SinglePageSlider'
import { useParams } from 'react-router-dom'


const SinglePage = () => {
  const {id} = useParams(null)
  const[item,setItem] = useState(null)
  return (
    <>
    {item ?(
      <main>
        <SinglePageSlider/>
        <div className="container">
          <section className='mainContent details'>
            <h1 className='title'>{item.title}</h1>
          </section>
        </div>
      </main>

    ):(
    <h1> not found</h1>
    )}
    </>
  )
}

export default SinglePage