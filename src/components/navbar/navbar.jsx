import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import {SiYoutube} from 'react-icons/si'
import {GrSearch} from 'react-icons/gr'
import {MdKeyboardVoice} from 'react-icons/md'
import {RiVideoAddLine} from 'react-icons/ri'
import topBar from '../../icons/left-topbar.svg'
import {IoMdNotificationsOutline} from 'react-icons/io'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'
import SidebarIconly from '../sidebar/sidebarIconly'
import Body from '../body/body'
const Navbar = () => {
    const [active, setActive] = useState(true)
    const navigate = useNavigate()
    const showSidebar = () =>
    setActive(!active)
  return (
      <>
    <div className='navbar'>
        <div className='logoWrap'>
            <div onClick={showSidebar} className='burgerIcon'>
                <FiMenu size={'1.8em'} color={"white"} />
            </div>
            <div onClick={() => navigate ('/')} className='logo'>
                <SiYoutube size={'2em'} color={'red'} />
                <div className='logo-title'>YouTube</div>
            </div>
        </div>
        <div className='navWrap'>
             <div className='inputWrap'>
            <input type="text" placeholder='Search' />
            <div className='searchIcon'>
                <GrSearch size={'1.4em'} />
            </div>
            </div>
            <div className='voiceSearch-icon'>
            <MdKeyboardVoice size={'2em'} color={'white'} />
        </div>
        </div>
       
        <div className='items'>
            <div className='video-icon'>
            <RiVideoAddLine size={'2em'} color={'white'} />
            </div>
            <div className='topBar'>
                <img src={topBar} alt="" width='32px' />
            </div>
            <div className='bell-icon'>
                <IoMdNotificationsOutline size={'2em'} color={'white'}/>
            </div>
            <div className='account'>
                <div>A</div>
            </div>
        </div>
    </div>
    <div className='Sidebar'>
        { active?
            <Sidebar />:<SidebarIconly />
        }
        <Body  />
    </div>
    </>
  )
}

export default Navbar