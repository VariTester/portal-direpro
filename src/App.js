import React from 'react'
import Header from './components/common/header/Header'
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepages from '../src/components/home/Homepages'
import Footer from './components/common/footer/Footer';
import Noticias from './components/noticias/Noticias';
import Singlepages from './components/singlePages/Singlepages';
// import SinglePage from './components/singlePage/SinglePage';

const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route  path='/' element={<Homepages/>}></Route>
          <Route path='/singlepage/:id' element={<Singlepages/>}></Route>
          <Route  path='/noticias' element={<Noticias/>}></Route>
          {/* <Route path='/singlepage/:id' element={<SinglePage/>} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App