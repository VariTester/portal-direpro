import React from 'react'
import './singlePageSlider.css'
import Slider from 'react-slick'
import { popular } from '../../../Data'

const SinglePageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:7,
    slidesToScroll:2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // rows: 4,
        },
      },
    ],
  }
  return (
    <>
    <section className='singlePopular'>
    <div className='content'>
    <Slider {...settings}>
    {popular.map((val) => {
      return (
       <div className='items'>
        <div className='box'>
          <div className='imgages'>
            <div className='img'>
              <img src={val.cover} alt='' className='cover' />
            </div>   
          </div>
          <div className='text'>
            <h1 className='title'>{val.title}</h1>
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

export default SinglePageSlider