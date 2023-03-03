import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item: { id, cover, catgeory, title, authorName, time, urlNoticias1, urlNoticias2, urlNoticias3 } }) => {
  console.log(cover)
  return (
    <>
      <div className='box'> 
        <div className='img'>
          <img src={ cover } alt='' /> 
        </div>
        <div className='text'>
          <span className='category'>{catgeory}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
          <Link to={`/SinglePage/${id}`}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <Link to={`https://diariolaregion.com/web/empresarios-piscicultores-sostuvieron-reunion-con-funcionarios-de-direpro/${id}`}>
            <p className='titleBg'>{urlNoticias1}</p>
          </Link>
          <Link to={`https://diariolaregion.com/web/gorel-y-direpro-realizaron-mejoras-en-la-planta-piloto-de-la-facultad-de-industrias-alimentarias-de-la-unap/${id}`}>
            <p className='titleBg'>{urlNoticias2}</p>
          </Link>
          <Link to={`https://diariolaregion.com/web/direpro-loreto-suscribio-convenio-con-la-municipalidad-de-inahuaya-en-contamana/${id}`}>
            <p className='titleBg'>{urlNoticias3}</p>
          </Link>
          <div className='author flex'>
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Card