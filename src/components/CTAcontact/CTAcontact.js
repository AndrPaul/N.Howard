import React from 'react'
import {Link} from 'react-router-dom'
import CTAbackground from  '../../images/comp/cta-background.jpg'

const CTAcontact = props => {
   
    return (
        <div className="cta-contact">
           <div className="cta-content">
           <h2 className="cta-title">{props.greeting}</h2>
            <Link className="button light" to='/contact'>Contact</Link>
           </div>
           
            <div className="overlay"></div>
            
        </div>
    )
}

export default CTAcontact
