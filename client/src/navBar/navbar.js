import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import "./navbar.css";


const Navbar = () => {
  return (
    <>
        <nav className='main-nav'>
           <div className='logo'>
            <h2>
                <span>F</span>und
                <span>N</span>epal
            </h2>
           </div>

           <div className='menu-link'>
             <ul>
                <li>
                    <a href='#'  target='#'>Home</a>
                </li>
                <li>
                    <a href='#'  target='#'>About</a>
                </li>
                <li>
                    <a href='#' target='#'>Service</a>
                </li>
                <li>
                    <a href='#'  target='#'>Contact</a>
                </li>
             </ul>
           </div>

           <div className='social-media'>
               <ul className='socail-media_desktop'>
               
               <li>
                    <a href='https://www.facebook.com/sandesh.poudel.94402/' target="_sandesh">
                    <FontAwesomeIcon  icon={faFacebookSquare}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/pdl_sandesh/' target="_sandeshp">
                    <FontAwesomeIcon  icon={faInstagramSquare}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.youtube.com/' target="_sandeshy">
                    <FontAwesomeIcon  icon={faYoutubeSquare}/>
                    </a>
                </li>
               </ul>
           </div>
            
        </nav>
    </>
  )
}

export default Navbar