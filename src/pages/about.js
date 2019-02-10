import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'

import artcar from '../assets/images/art-car.jpg'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>About - Jacob Amador</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
          <section id="banner" className="major aboutMe">
              <div className="inner grid-wrapper">
                  <div className="col-12">
                    <header className="major">
                        <h1>I'm all about learning</h1>
                    </header>

                    <p>I graduated from Rice University with a B.A. in Cognitive Science and specialized in Human-Computer Interaction. I took advanced classes in Psychology, Philosophy, Neuroscience, Linguistics, and Computer Science. I learned about the psychology of user experiences and how to study users to improve UI design.  As a member of The Interaction Design Foundation, I continue to learn about the trends in HCI and UX.</p>
                    <p>An advocate for HCI and UX, my goal is to educate people on why user-centered design is important. I’ve created training guides, proposed new web processes, and taught company workshops. Knowledge and understanding will go further when you can share it with those around you. I do my part to create ethical and useful experiences by helping those around me be better designers.</p>
                  </div>
              </div>
          </section>
          <section id="bioIntro" className="aboutFun">
              <div className="inner grid-wrapper">
                  <div className="col-12">
                  <header className="major">
                      <h2>Colorblind Artist</h2>
                  </header>
                    <p>One of my flaws is also one of my greatest strengths. I am red/green colorblind, so I have trouble distinguishing between two colors if they are not well saturated or are too similar in hue. My designs will always have high contrast, because I act as my own colorblind persona.</p>
                    <p>As an artist, I began by doing simple two- or three-color woodcut relief prints. Some of those woodcuts are on this website. As I started to create more traditional Mexican folk art, I realized I could use very bright, contrasting colors. My love of skulls, along with Houston's Art Car scene, culminated in me creating my second art car.</p>
                  </div>
              </div>
              <span className="image main"><img src={artcar} alt="" /></span>
          </section>
          <WorkTitle />
          <Tiles />
        </div>

    </Layout>
)

export default About
