import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withPrefix } from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
            </ul>
            <span>Work</span>
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/satori">Satori</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/catrinoso">Catrinoso</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/uhcl">UHCL</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/clickmd">ClickMD</Link></li>
            </ul>
            <ul className="actions vertical">
                <li > <a href="https://www.dropbox.com/s/eydkq64gpgzamsu/Jacob-Amador-Resume.pdf?dl=0" target="__blank"
                onClick={props.onToggleMenu} className ="button special fit" >Resume</a></li >
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
