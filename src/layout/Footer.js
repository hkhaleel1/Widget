import React from 'react'
import RightArrow from '../images/further-reading-arrow--grey.svg'

export default function Footer({ text }) {
    return (
        <div className="widgetFooter" >
            <span className="footerText">{text}</span>
            <span className="arrowContainer" >
                <img src={RightArrow} alt="rightArrow" className="arrow"/>
            </span>
        </div>
    )
}