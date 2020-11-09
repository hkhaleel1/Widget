import React from 'react'
import {ReactComponent as RightArrow} from '../images/further-reading-arrow--grey.svg'

export default function Footer({ text }) {
    return (
        <div className="widgetFooter" >
            <span className="footerText">{text}</span>
            <span className="arrowContainer" >
                <RightArrow className="arrow"/>
            </span>
        </div>
    )
}