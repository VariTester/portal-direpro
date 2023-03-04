import React from 'react';
import image from "../images/logosf.png";
import image1 from "../images/direprologo.png";
const Head = () => {
  return ( <> <section className='head'>
  <div className="container flexSB paddingTB">
        <div className='logo'>
          <img src={image1} />
              {/* <h1>hellooooooooo</h1> */}
          </div>
          <div className='ad'>
              <img src={image} alt='' />
              {/* <h1>hellooooooooo</h1> */}
          </div>
          
          
  </div>
          </section>
      </>
  )
}

export default Head