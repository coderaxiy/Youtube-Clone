import React, { memo } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {CgYoutube} from 'react-icons/cg'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {MdOutlineVideoLibrary} from 'react-icons/md'
import './sidebarIconly.css'
import { Link } from 'react-router-dom'

const SidebarIconly = memo(() => {
  return (
    <div className='wrapper'>
        <Link to={'/home'} className="iconWrap">
            <AiFillHome size={"1.8em"} color={'white'} />
            <div className="Link">Home</div>
        </Link>
        <Link to={'/explore'} className="iconWrap">
            <MdOutlineExplore size={"1.8em"} color={'white'} />
            <div className="Link">Explore</div>
        </Link>
        <Link to={'/shorts'} className="iconWrap">
            <CgYoutube size={"1.8em"} color={'white'} />
            <div className="Link">Shorts</div>
        </Link>
        <Link to={'/subscriptions'} className="iconWrap">
            <MdOutlineSubscriptions size={"1.8em"} color={'white'} />
            <div className="Link">Subscriptions</div>
        </Link>
        <Link to={'/library'} className="iconWrap">
            <MdOutlineVideoLibrary size={"1.8em"} color={'white'} />
            <div className="Link">Library</div>
        </Link>
    </div>
  )
});

export default SidebarIconly