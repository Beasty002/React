import React from 'react'
export default function Navbar(props) { //for passing the props
    return (
        <nav>
            <ul>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>sdfsf</li>
            </ul>
        </nav>
    )
}