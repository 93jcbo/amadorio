import React from 'react'
import Contact from './Contact'

const Footer = (props) => (
    <footer id="footer">
        <Contact />
        <div className="inner">
            {/*<ul className="icons">
                <li><a href="https://instagram.com/_amadorio_" target="__blank" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://linkedin.com/in/amadorio" target="__blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>*/}
            <ul className="copyright">
                <li>&copy; Amadorio</li><li>Gatsby Starter by: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
