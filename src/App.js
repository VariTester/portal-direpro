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

const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route  path="/" element={<Homepages/>}></Route>
          {/* <Route path='/singlepage/:id' exact component={SinglePage} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App