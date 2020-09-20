import React from 'react'
//components
import { BlogItems } from './BlogItems'
import { ImEye as EyeIcon } from 'react-icons/im'
import {Link} from 'react-router-dom'

const HomeBlog = () => {
    return (
        <div className="home-content4">
            <div className="secondaryTitle home4">Blog</div>
            <div className="blog-card-container">
                {BlogItems.map((item) => {
                    return (
                        <div key={item.id} className="blog-card">
                            <div className="blog-card-image">
                                <img className="object-fit-cover" src={item.src} />
                            </div>
                            <div className="blog-title">
                                <p>{item.title}</p>
                            </div>
                            <div className="blog-card-info">
                                
                                <div className="blog-card-views">
                                    <EyeIcon />
                                    <p>&nbsp;{item.views}</p>
                                </div>
                                <p>{item.date}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
            <Link to="/portfolio" className="button dark">See All</Link>
        </div>
    )
}

export default HomeBlog
