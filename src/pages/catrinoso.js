import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'

import pic08 from '../assets/images/catrinoso01.jpg'
import pic09 from '../assets/images/catrinoso02.jpg'
import pic10 from '../assets/images/catrinoso03.jpg'

const banner = {
  clientName: 'Catrinoso',
  clientDesc: 'An independent designer with a desire to help.',
  clientRoles:'Graphic\u00A0Designer, Web\u00A0Designer',
  clientTime:'2016-Present',
  clientId: 'catrin'
}

const Catrinoso = (props) => (
    <Layout>
        <Helmet>
            <title>Jacob Amador - Catrinoso Work</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding  banner={banner} />

        <div id="main">
            <section id="one" className="clientIntro">
                <div className="inner">
                    <header className="major">
                        <h2>Spreading good design</h2>
                    </header>
                    <p>I know firsthand the importance of good design. If something is not designed well such as a business card, website, or flyer, your brand or company is perceived to be untrustworthy. Unfortunately, small businesses, artists, or individuals starting out don’t have the money to pay a design agency and their instincts for design often betray them. Observing this obstacle, I decided to create Catrinoso and provide design services for a nominal, pay-what-you-can fee. In the end, my goal is to give the power of design so that they may grow to be successful.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <span className="image">
                        <img src={pic08} alt="" />
                    </span>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>User centered graphic design</h3>
                            </header>
                            <p>One of my favorite clients has been the HUE (Houston Urban Experience) Mural Festival. I’ve worked with HUE for two years as a graphic designer and I try to use my knowledge of UX to my advantage. When designing the map each year I get a list of artists, mural locations, events, and sponsors. I take that information, think of myself as a festival goer and how I would need the map to be organized. Knowing that people will be walking between locations, I design the map to be folded down to pocket size. When making social media posts, graphics are colorful and minimal with large fonts to grab attention.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <span className="image">
                        <img src={pic09} alt="" />
                    </span>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Setting up websites for the future</h3>
                            </header>
                            <p>Sometimes I get to develop the websites I design for clients. I use this opportunity to increase my skills as a web developer and re-learn to the most current technologies and tools. For example, for the Free Radicals, a jazz collective, I created their website using a static site generator on Node.js. I do this not only for my education, but so that a client’s website will remain up-to-date for the following years to come.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <span className="image">
                        <img src={pic10} alt="" />
                    </span>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Teaching clients to be better designers</h3>
                            </header>
                            <p>I understand that not all projects allow room in the budget for a professional designer. That’s why I’ll help clients understand what they can do to create collateral for themselves. For graphic designs, I include all source files upon delivery. The project come with a style guide so that the clients know the importance of consistency. For the Free Radicals, I included generic, commented HTML templates in their final product. This way they could create more pages as they needed them.</p>
                        </div>
                    </div>
                </section>
            </section>
            <WorkTitle />
            <Tiles />
        </div>

    </Layout>
)

export default Catrinoso
