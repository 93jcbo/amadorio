import React from 'react'
import { withPrefix } from 'gatsby-link'

const Contact = (props) => (
    <section id="contact">
        <div className="inner social-inner">
                <section className="">
                    <div className="contact-method">
                        <span className="icon alt fa-file-pdf-o"></span>
                        <h3>Resume</h3>
                        < a href = "https://www.dropbox.com/s/ky1ukdten398zc6/Jacob-Amador-Resume.pdf?dl=0" target = "__blank" > Jacob - Amador - Resume.pdf < /a>
                    </div>
                </section>
                <section className="">
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:93jcbo@gmail.com">93jcbo@gmail.com</a>
                    </div>
                </section>
                <section className="">
                    <div className="contact-method ">
                        <span className="icon alt fa-linkedin"></span>
                        <h3>LinkedIn</h3>
                        <a href="https://linkedin.com/in/amadorio" target="__blank" className=""><span>linkedIn.com/in/amadorio</span></a>
                    </div>
                </section>
                <section className="">
                    <div className="contact-method ">
                        <span className="icon alt fa-instagram"></span>
                        <h3>Instagram</h3>
                        <a href="https://instagram.com/_amadorio_" target="__blank" className=""><span>instagram.com/_amadorio_</span></a>
                    </div>
                </section>

        </div>
    </section>
)

export default Contact
