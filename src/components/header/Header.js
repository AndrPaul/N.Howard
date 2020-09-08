import React from 'react'
import SocialHead from './SocialHead'

const Header = (props) => {
    return (
        <header className={props.class}>
        <div className="head-container">
        <SocialHead/>    
        <h1 className='head title'>{props.title}</h1> 
        <h2 className='head subtitle'>{props.subtitle}</h2> 
        </div>
        
            
        </header>
    )
}

export default Header
