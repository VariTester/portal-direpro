import React from 'react'
import { lifestyle } from '../../../../Data'
import Heading from '../../../common/Heading/Heading'
import './life.css'
import Slider from "react-slick";
const Life = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 2,
              },
            },
          ],
    }
  return (
    <><section className='popularPost life'>
    <Heading title='life'/>
    <div className='content'>
    <Slider {...settings}>
    {lifestyle.map((val) => {
      return (
       <div className='items'>
        <div className='box shadow'>
          <div className='images'>
            <div className='img'>
              <img src={val.cover} alt='' />
            </div>
            {/* No detecta el category1 */}
            <div className="category category1">
              <span>{val.category}</span>
            </div>
          </div>
          <div className='text'>
            <h1 className='title'>{val.title.slice(  0,40)}...</h1>
            <div className="date">
              <i className='fas fa-calendar-days'></i>
              <label>{val.date}</label>
            </div>
          </div>
        </div>
       </div>
      )
    })}
    </Slider>
    </div> 
  </section></>
  )
}

export default Life