import React from 'react'
import Header from '../components/header/Header'
const Portfolio = (props) => {
    return (
        <div>
            <Header title={props.title} class={props.class} />
        </div>
    )
}

export default Portfolio
