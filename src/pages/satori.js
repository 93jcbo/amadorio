import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'

import pic08 from '../assets/images/satori01.png'
import pic09 from '../assets/images/satori02.jpg'
import pic10 from '../assets/images/satori03.jpg'

const banner = {
  clientName: 'Satori Marketing',
  clientDesc: 'An up and coming full service marketing agency.',
  clientRoles:'Graphic/Web\u00A0Designer, Web\u00A0Accessibility Specialist, WordPress\u00A0Developer',
  clientTime:'2018-Present',
  clientId: 'satori'
}

const Satori = (props) => (
    <Layout>
        <Helmet>
            <title>Satori Marketing Work - Jacob Amador</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding banner={banner} />

        <div id="main">
            <section id="one" className="clientIntro">
                <div className="inner">
                    <header className="major">
                        <h2>Status at Satori</h2>
                    </header>
                    <p>Satori is a growing marketing agency that moves at a fast pace with projects often expected to have a quick turnaround. Before I joined, they depended on freelance web developers to design and build client websites. I was brought on because they needed someone to work at their pace in house. Since I joined Satori, I have introduced a UX focused design method, helped create an SEO service plan, and established the use of measurable performance metrics.</p>
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
                                <h3>Beginning at full speed</h3>
                            </header>
                            <p>I began my first day with a lengthy to-do list. Much of my initial work was troubleshooting websites and fixing bugs before the sites were launched. Sometimes all that was needed was a landing page such as Pretty Little Petal. Whatever the web project, I used my CSS skills to make sure websites functioned properly on mobile and were responsive. On occasion I would create printed materials such as flyers and banners or design emails in Constant Contact or Mail Chimp. I was doing all types of design.</p>
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
                                <h3>Finding pitfalls and inefficiencies</h3>
                            </header>
                            <p>Because Satori had relied on freelance web designers in the past, there were parts of the web process that were inefficient. Satori used a waterfall model, waiting on the current step to be complete before work began on anything else. One website, a static 7-page site, had been in development for 6 months.</p>

                            <p>Furthermore, some steps crucial to marketing such as SEO, Google Analytics, and Google Search Console weren’t being done. This would hurt us when we tried to measure our own performance because we had no baseline and no metrics to compare them with. We had to depended on contact forms and social media to measure our clients’ brand awareness.</p>

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
                                <h3>Introducing a Lean-ish UX approach</h3>
                            </header>
                            <p>I drafted a web process plan based on the Lean concept of delivering the most viable product. By keeping the clients in the loop more often and showing the MVP we can iterate, move quickly, and make sure our work isn’t scratched last minute by a disapproving manager. With the new plan, clients fill out a website design questionnaire so that we can design with their goals and users in mind and the content is written before the wireframe is made so that content dictates design.</p>

                            <p>The new plan also includes a client-satisfaction survey and requires analytics so that we can measure our performance. Additionally, I helped create an SEO auditing and management service to sell to clients.</p>
                        </div>
                    </div>
                </section>
            </section>
            <WorkTitle />
            <Tiles />
        </div>

    </Layout>
)

export default Satori
