import React from 'react'
import './side.css'
import Heading from "../../../common/Heading/Heading"
import SocialMedia from '../social/SocialMedia'
import Tpost from '../Tpost/Tpost'
import Slider from 'react-slick'
import { gallery } from '../../../../Data'



const Side = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const category = ["Institución: Dirección Regional de la Producción","RUC: 20493196902","Razón Social: Gobierno Regional de Loreto","Dirección: Calle Ramirez Hurtado N° 645","Director: Blgo. Alfredo Arturo Bon Blas"]

  return (
    <>
    <Heading title="Redes Sociales"/>
    <SocialMedia />

    <Heading title="Suscríbete"/>

    <section className='subscribe'>
      <h1 className='title'>Mantente informado en lo último de nuestras Noticias</h1>
      <form action=''>
        <input type='text' placeholder='Correo Electrónico...'/>
        <button><i className='fa fa-paper-plane'></i> SUBSCRIBIRME
        </button>
      </form>
    </section>

    <section className='banner'>
        <img src='./assets/images/sidebar-banner-new.jpg' alt='' />
    </section>

    <Tpost/>

    <section className='categorys'>
        <Heading title='Info' />
        {/*<div className='items'>{allCat}</div>*/}
        {category.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Fotos' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>

    </>
  )
}

export default Side