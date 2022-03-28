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

    
    return (
        <div className='hero'>
            <div className='content'>
            <div>
         <Lottie options={defaultOptions} alt="ribbon" width={240} height={240} />
      </div>
                <h1>Congratulations!</h1>
                <p>You finished the study. If you had any problem, please leave feedback.</p>
                <div>
                    <Link to='/training' className='btn'>All Set</Link>
                    <Link to='/contact' className='btn btn-light'>Feedback</Link>
                </div>
            </div>
        </div>
    )
}

export default Anime
