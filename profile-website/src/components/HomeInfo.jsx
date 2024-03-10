/* eslint-disable react/prop-types */
import React from 'react'

const renderContent = {
    1: (
        <h1>
            About
        </h1>
    ),
    2: (
        <h1>
            Experience
        </h1>
    ),
    3: (
        <h1>
            Skills
        </h1>
    ),
    4: (
        <h1>
            Projects
        </h1>
    ),
    5: (
        null
    )
}



const HomeInfo = ({ hoveredCloud }) => {
    return renderContent[hoveredCloud];
}

export default HomeInfo