import React from 'react'
import {ImBehance, ImPinterest} from 'react-icons/im'

import {FiInstagram} from 'react-icons/fi'
const SocialHead = () => {
    return (
        <div className="social-head">
            <div className="social-line"></div>
            <div className="social-icons-container">
            <a href="#" className="behance"><ImBehance/></a>    
            <a href="#" className="instagram"><FiInstagram/></a>
            <a href="#" className="pinterest"><ImPinterest/></a>
            
           
            </div>
            
            <div className="social-line"></div>
                
        </div>
    )
}

export default SocialHead
