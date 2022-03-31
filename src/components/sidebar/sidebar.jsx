import React, { memo } from 'react'
import './sidebar.css'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {CgYoutube} from 'react-icons/cg'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {MdOutlineVideoLibrary} from 'react-icons/md'
import {VscHistory} from 'react-icons/vsc'
import {RiVideoLine} from 'react-icons/ri'
import {MdOutlineWatchLater} from 'react-icons/md'
import {BiLike} from 'react-icons/bi'
import {SiFreecodecamp} from 'react-icons/si'
import {SiCoursera} from 'react-icons/si'
import {AiOutlineYoutube} from 'react-icons/ai'

const  Sidebar  = memo(() => {

  return (
    <div className='container'>
        <Link to={'/'} className='linkWrap'>
            <AiFillHome size={"1.8em"} color={'white'} />
            <div className='link'>Home</div>
        </Link>
        <Link to={'/explore'} className='linkWrap'>
            <MdOutlineExplore size={"1.8em"} color={'white'} />
            <div className='link'>Explore</div>
        </Link>
        <Link to={'/shorts'} className='linkWrap'>
            <CgYoutube size={"1.8em"} color={'white'} />
            <div className='link'>Shorts</div>
        </Link>
        <Link to={'/subscriptions'} className='linkWrap'>
            <MdOutlineSubscriptions size={"1.8em"} color={'white'} />
            <div className='link'>Subscriptions</div>
        </Link>
        <div className='border'></div>
        <Link to={'/Library'} className='linkWrap'>
            <MdOutlineVideoLibrary size={"1.8em"} color={'white'} />
            <div className='link'>Library</div>
        </Link>
        <Link to={'/history'} className='linkWrap'>
            <VscHistory size={"1.8em"} fill={'white'} />
            <div className='link'>History</div>
        </Link>
        <Link to={'/yourvideos'} className='linkWrap'>
            <RiVideoLine size={"1.8em"} color={'white'} />
            <div className='link'>Your videos</div>
        </Link>
        <Link to={'/watchlater'} className='linkWrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Watch later</div>
        </Link>
        <Link to={'/likedvideos'} className='linkWrap'>
            <BiLike size={"1.8em"} color={'white'} />
            <div className='link'>Liked videos</div>
        </Link>
        <div className='border'></div>
        <div className="title">SUBSCRIPTIONS</div>
        <div className="subscribed">
            <div className='account_logo'>
                <SiFreecodecamp size={"1.5em"} />
            </div>
            <div className='account_name'>freeCodeCamp.org</div>
        </div>
        <div className="subscribed">
            <div className='account_logo'>
                <SiCoursera size={"1.5em"} color={'skyblue'} />
            </div>
            <div className='account_name'>Coursera.com</div>
        </div>
        <div className="subscribed">
            <div className='account_logo'>
                <SiFreecodecamp size={"1.5em"} />
            </div>
            <div className='account_name'>freeCodeCamp.org</div>
        </div>
        <div className="subscribed">
            <div className='account_logo'>
                <SiFreecodecamp size={"1.5em"} />
            </div>
            <div className='account_name'>freeCodeCamp.org</div>
        </div>
        <div className='border1'></div>
        <div className="title">MORE FROM YOUTUBE</div>
        <Link to={'/youtubepremium'} className='more_wrap'>
            <AiOutlineYoutube size={"1.8em"} color={'white'} />
            <div className='link'>YouTube Premium</div>
        </Link>
        <Link to={'/movies'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Movies</div>
        </Link>
        <Link to={'/gaming'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Gaming</div>
        </Link>
        <Link to={'/live'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Live</div>
        </Link>
        <Link to={'/learning'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Learning</div>
        </Link>
        <Link to={'/sports'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Sports</div>
        </Link>
        <div className="border1"></div>
        <Link to={'/settings'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Settings</div>
        </Link>
        <Link to={'/reporthistory'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Report History</div>
        </Link>
        <Link to={'/help'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Help</div>
        </Link>
        <Link to={'/sendfeedback'} className='more_wrap'>
            <MdOutlineWatchLater size={"1.8em"} color={'white'} />
            <div className='link'>Send feedback</div>
        </Link>
        <div className="border1"></div>
        <div className="side_footer">
            <div className="text">About Press Copyright Contact us Creators Advertise Developers</div>
            <div className="text">Terms Privacy Policy & Safety How YouTube works Test new features</div>    
        </div>
    </div>
  )
});

export default Sidebar;