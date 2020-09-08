import React from 'react'
import {ImBehance, ImPinterest} from 'react-icons/im'
import {Link} from "react-router-dom"
import {FiInstagram} from 'react-icons/fi'
const SocialHead = () => {
    return (
        <div className="social-head">
            <div className="social-line"></div>
            <div className="social-icons-container">
            <a href="#"><ImBehance/></a>    
            <a href="#"><FiInstagram/></a>
            <a href="#"><ImPinterest/></a>
            
           
            </div>
            
            <div className="social-line"></div>
                
        </div>
    )
}

export default SocialHead
