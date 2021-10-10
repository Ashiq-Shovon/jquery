import React from 'react'
import {Link} from 'react-router-dom'

const header = () => {
    return (
        <>
            <ul>
                <Link to="/about">
                <li>about</li>
                </Link>

                <Link to="/contact">
                <li>contact</li>
                </Link>
            </ul>
        </>
    )
}

export default header
