import React, { useState } from 'react'
import './sidebar.css'
import guide from '../../assets/icons/guide.svg'
import logo from '../../assets/icons/Logo.svg'
import home from '../../assets/icons/Home.fill.svg'
import discover from '../../assets/icons/discover.svg'
import subs from '../../assets/icons/subscriptions.svg'
import shelf from '../../assets/icons/bookshelf.svg'
import history from '../../assets/icons/past.svg'
import yourvideos from '../../assets/icons/your-videos.svg'
import watchlater from '../../assets/icons/watch-later.svg'
import likevideos from '../../assets/icons/like-videos.svg'
import downarrow from '../../assets/icons/downarrow.svg'
import user from '../../assets/images/Profile-Photo.svg'
import { Link, Outlet } from 'react-router-dom'

const Sidebar = () => {
  const [show, setShow] = useState(true)
  const [footer, setFooter] = useState(true)
  const [menu, setMenu] = useState(true)
  return (
    <div style={{display:'flex'}}>
    <div className='wrapper'>
        <div className='logo-wrap'>
            <img onClick={() => setMenu (!menu)} src={guide} alt="" />
            <div className='logo'>
              <img  src={logo} alt="" /> <sup>TR</sup>
            </div>
        </div>
        <div className='menu-wrap'>
            <Link to={'/home'} className='link-wrap'>
                <img src={home} alt="" />
               { menu?<div className='link'>Home</div>:null}
            </Link>
            <Link to={'/explore'} className='link-wrap'>
                <img src={discover} alt="" />
                <div className='link'>Explore</div>
            </Link>
            <Link to={'/subscription'} className='link-wrap'>
                <img src={subs} alt="" />
                <div className='link'>Subscriptions</div>
            </Link>
            <div className='border'/>
            <Link to={'/bookshelf'} className='link-wrap'>
                <img src={shelf} alt="" />
                <div className='link'>Book Shelf</div>
            </Link>
            <Link to={'/history'} className='link-wrap'>
                <img src={history} alt="" />
                <div className='link'>History</div>
            </Link>
            <Link to={'/yourvideos'} className='link-wrap'>
                <img src={yourvideos} alt="" />
                <div className='link'>Your Videos</div>
            </Link>
            <Link to={'/watchlater'} className='link-wrap'>
                <img src={watchlater} alt="" />
                <div className='link'>Watch Later</div>
            </Link>
            <Link to={'/likedvideos'} className='link-wrap'>
                <img src={likevideos} alt="" />
                <div className='link'>Liked Videos</div>
            </Link>
            <div onClick={() => setShow (!show)} className='link-wrap'>
                <img src={downarrow} alt="" />
                <div className='link'>See More</div>
            </div>
            <div className='border' />
            {
              show?
                <div className='menu-wrap'>
                    <div className='title'>Subscriptions</div>
                    <div className='user'> 
                        <div className='image-cover'>
                            <img src={user} alt="" />
                        </div>
                        <div className='link'> The Game</div>
                    </div>
                    <div className='user'> 
                        <div className='image-cover'>
                            <img src={user} alt="" />
                        </div>
                        <div className='link'>Lean Yo</div>
                    </div>
                    <div className='user'> 
                        <div className='image-cover'>
                            <img src={user} alt="" />
                        </div>
                        <div className='link'>Code Buster</div>
                    </div>
                    <div className='user'> 
                        <div className='image-cover'>
                            <img src={user} alt="" />
                        </div>
                        <div className='link'>Web Developer</div>
                    </div>
                    <div className='user'> 
                        <div className='image-cover'>
                            <img src={user} alt="" />
                        </div>
                        <div className='link'>React Tutorial</div>
                    </div>
                    <div className='user'> 
                        <div className='image-cover'>
                            <img src={user} alt="" />
                        </div>
                        <div className='link'>Funny Coding</div>
                    </div>
                    <div onClick={() => setFooter (!footer)} className='user'> 
                        <div className='image-cover'>
                            <img src={downarrow} alt="" />
                        </div>
                        <div className='link'>See More</div>
                    </div>
                </div>
              :null
            }
            <div className='border' />
            {
              footer?<div className='menu-wrap'>
                    <div className='title'>More From You Tube</div>
                    <div className='user'> 
                        <div className='image-cover'>
                            <img src={discover} alt="" />
                        </div>
                        <div className='link'>You Tube Premium</div>
                    </div>
        </div>:null}
    </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Sidebar;