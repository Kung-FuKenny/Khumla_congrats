import React from 'react'
import { Link } from 'react-router-dom'
import './PageStyles.css'
import Lottie from "react-lottie";
import animationData from '../badge.json'

const Anime = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      function openTab() {
        window.open('https://www.khumla.com/login');
      }
    
    return (
        <div className='hero'>
            <div className='content'>
            <div>
         <Lottie options={defaultOptions} alt="ribbon" width={240} height={240} />
      </div>
                <h1>Congratulations!</h1>
                <p>You have successfully verified your email. Click button below to login.</p>
                <div>
                <button btnClass={"btn"} onClick={openTab.bind(this)} >
                Login
              </button>
                </div>
            </div>
        </div>
    )
}

export default Anime

//   <Link onClick={openTab}></Link>
