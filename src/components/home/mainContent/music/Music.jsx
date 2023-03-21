import React from 'react'
import { general, popular } from '../../../../Data'
import Heading from '../../../common/Heading/Heading'
import './music.css'
import Slider from "react-slick";
import { Link } from "react-router-dom"

const Music = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
      }
  return (
    <>
    <section className='music'>
        <Heading title='General' />
        <div className='content'>
          <Slider {...settings}>
            {general
              .filter((val) => val.category)
              .map((val) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div class='category category1'>
                          <span>{val.category}</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        <div className='date'>
                          <i class='fas fa-calendar-days'></i>
                          <label>{val.date}</label>
                        </div>
                        <p className='desc'>{val.desc.slice(0, 250)}...</p>
                        <div className='comment'>
                          <i class='fas fa-link'></i>
                          <Link to={`https://www.gob.pe/institucion/produce/noticias/312623-produce-que-es-una-veda-y-para-que-sirve`}>
                          <label>Link / </label>
                          </Link>
                          <i class='fas fa-comments'></i>
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

export default Music
