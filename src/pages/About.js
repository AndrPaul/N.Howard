import React from 'react';
import Header from '../components/header/Header'

const About = (props) => {
    return (
        <div>
            <Header title={props.title} class={props.class} />
        </div>
    )
}

export default About
