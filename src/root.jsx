import React from 'react'
import Home from './components/pages/home/home'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/sidebar'
import Body from './components/body/body'
import Explore from './components/pages/explore/explore'
import Subscriptions from './components/pages/subscriptions/subscriptions'

const Root = () => {
  return (
    <div className='root'>
        <Router>
            <Routes>
                <Route element={<Sidebar />}>
                    <Route path='/home' element={<Body />} />
                    <Route path='/explore' element={<Explore />}/>
                    <Route path='/subscription' element={<Subscriptions />}/>
                </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Root