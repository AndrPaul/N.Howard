import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { ImBehance, ImPinterest } from 'react-icons/im'

import { FiInstagram } from 'react-icons/fi'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
            <div className="footer-col">
                <div className="footer-row">
                    <span><FiPhone /></span><p>202-555-0126</p>
                </div>
                <div className="footer-row">
                    <span><HiOutlineMail /> </span><p>n.howard@gmail.com</p>
                </div>
            </div>
            <div className="footer-col">
                <div className="footer-row">
                <p>Social media</p>
                </div>
                
                <div className="footer-row">
                    <a href="#"><ImBehance /></a>
                    <a href="#"><FiInstagram /></a>
                    <a href="#"><ImPinterest /></a>
                </div>
                
            </div>
            <div className="footer-col">
                <div className="footer-row">
                <p>Stay in touch!</p>
                </div>
                
                <div className="footer-row newsletter">
                    <input placeholder="E-mail" type="text"/>
                    <button>Send</button>
                </div>
            </div>
            </div>
            
            
                <p className="copyright">Copyright © 2020</p>
                
        </div>
    )
}

export default Footer
