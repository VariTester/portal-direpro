import React from 'react'
import Heading  from '../../../common//Heading//Heading'
import {popular} from '../../../../Data.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./popular.css"

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
    <section className='popular'>
      <Heading title='Eventos'/>
      <div className='content'>
      <Slider {...settings}>
      {popular.map((val) => {
        return (
         <div className='items'>
          <div className='box shadow'>
            <div className='imgages row'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className="category category1">
                <span>{val.category}</span>
              </div>
            </div>
            <div className='text row'>
              <h1 className='title'>{val.title.slice(0,40)}...</h1>
              <div className='date'>
                <i className='fas fa-calendar-days'></i>
                <label htmlFor=''>{val.date}</label>
              </div>
              <div className='comment'>
              <i className='far fa-clock'></i>
              <label>{val.time}</label>
              </div>
              <div className='comment'>
                <i className='fas fa-location-arrow'></i>
                <label>{val.comments}</label>
              </div>
            </div>
          </div>
         </div>
        )
        
      })}
      </Slider>
      </div> 
    </section>
    </>
  )
}

export default Popular