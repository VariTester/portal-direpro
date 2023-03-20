import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { hero } from "../../Data"
import './singlepage.css'
import SinglePageSlider from './SinglePageSlider/SinglePageSlider'
// import autor1 from "../common/images/autores/author.jpg";
// import noticia1 from "../common/images/hero/direpro1.jpg";

const Singlepages = () =>  {
    const {id} = useParams()
    const [item,setItem] = useState(null)

    useEffect(() => {
        const item = hero.find((item)=>item.id === parseInt(id))
        window.scrollTo(0, 0)
        if(item){
            setItem(item)
        }
    },[id])

  return (
    <> 
    {item ? (
        <main>
            <SinglePageSlider/>
            <div className="container">
                <section className='mainContent details'>
                    <h1 className='title'>{item.title}</h1>
                    <div className="author">
                      <span>por</span>
                      <img src={item.authorImg} alt='' />
                      <p>{item.authorName} el</p>
                      <label htmlFor="">{item.time}</label>
                    </div>
        <div className='social'>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
        </div>
        <div className='socBox'>
          <i className='fab fa-pinterest'></i>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
        </div>
      </div>
        <div className="desctop">
          {item.desc.map((val)=>{
            return(
              <>
              <p>{val.para1}</p>
              <p>{val.para2}</p>
              </>
            )
          })}
        </div>
        <img src={item.cover} alt="" />
        <div className="descbot">
        {item.details.map((data)=>{
            return(
              <>
              <h3>{data.title}</h3>
              <p>{data.para1}</p>
              </>
            )
          })}
        </div>
      </section>
        </div>
    </main>

  ) : (
    <h1>not found</h1>
  )}
  </>
  )
  
}

export default Singlepages