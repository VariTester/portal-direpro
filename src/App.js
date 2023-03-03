import React from 'react'
import Header from './components/common/header/Header'
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepages from '../src/components/home/Homepages'

const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route  path="/" element={<Homepages/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App