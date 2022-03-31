import React from 'react'
import Home from './components/pages/home/home'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Explore from './components/pages/explore/explore'
import Subscriptions from './components/pages/subscriptions/subscriptions'
import Navbar from './components/navbar/navbar'
import Shorts from './components/pages/shorts/shorts'
import Library from './components/pages/library/library'
import History from './components/pages/history/history'
import YourVideos from './components/pages/yourvideos/yourvideos'
import WatchLater from './components/pages/watchlater/watchlater'
import LikedVideos from './components/pages/likedvideos/likedVideos'
import YouTubePremium from './components/pages/youTubePremium/youTubePremium'
import Movies from './components/pages/movies/movies'
import Gaming from './components/pages/gaming/gaming'
import Live from './components/pages/live/live'
import Learning from './components/pages/learning/learning'
import Sports from './components/pages/sports/sports'
import Settings from './components/pages/settings/settings'
import ReportHistory from './components/pages/reportHistory/reportHistory'
import Help from './components/pages/help/help'
import SendFeedBack from './components/pages/sendFeedBack/sendFeedBack'

const Root = () => {
  return (
    <div className='root'>
        <Router>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/explore' element={<Explore />}/>
                    <Route path='/shorts' element={<Shorts />} />
                    <Route path='/subscriptions' element={<Subscriptions />} />
                    <Route path='/library' element={<Library />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/yourvideos' element={<YourVideos />} />
                    <Route path='/watchlater' element={<WatchLater />} />
                    <Route path='/likedvideos' element={<LikedVideos />} />
                    <Route path='/youtubepremium' element={<YouTubePremium />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/gaming' element={<Gaming />} />
                    <Route path='/live' element={<Live />} />
                    <Route path='/Learning' element={<Learning />} />
                    <Route path='/sports' element={<Sports />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/reporthistory' element={<ReportHistory />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/sendfeedback' element={<SendFeedBack />} />
                </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Root