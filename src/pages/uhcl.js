import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'

import pic08 from '../assets/images/uhcl01.jpg'
import pic09 from '../assets/images/uhcl02.jpg'
import pic10 from '../assets/images/uhcl03.jpg'

const banner = {
  clientName: `University of Houston - Clear\u00A0Lake`,
  clientDesc: 'A four-year university in Clear Lake, TX.',
  clientRoles:'Web\u00A0Communications Coordinator, UX\u00A0Designer, Web\u00A0Developer',
  clientTime:'2016-2017',
  clientId: 'uhcl'
}

const UHCL = (props) => (
    <Layout>
        <Helmet>
            <title>Jacob Amador - University of Houston-Clear Lake Work</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding  banner={banner} />

        <div id="main">
            <section id="one" className="clientIntro">
                <div className="inner">
                    <header className="major">
                        <h2>Flying with the hawks</h2>
                    </header>
                    <p>I was under contract with Adroit Partners while working at UHCL. The communications department was migrating their website to a new university-focused CMS. As the Web Communications Coordinator I was responsible for facilitating the transition to the new CMS, and for the creation of templates and other components for the new website.</p>
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
                                <h3>Preparing for the new website</h3>
                            </header>
                            <p>My first project was creating a library of UHCL stock photography. I began researching other university websites and categorizing their most used images. Next, I organized the current UHCL web photos according to the found stock categories. At this point I was able to create a shoot itinerary for new photography based on UHCL’s needs.</p>

                            <p>I was also tasked with creating the information architecture for a new section of the website. Several web pages were consolidated into “Campus Life”. I decided to use the card sorting method to find the most effective architecture. After writing page names on cards, I asked several subjects in the university—including staff, students, and admins—to group together cards they felt related to each other and to name the groups. I used those results to propose the Campus Life page structure.</p>
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
                                <h3>Creating a better campus map</h3>
                            </header>
                            <p>The ¬previous campus map was a low-resolution jpeg and visitors had problems getting to the campus and navigating the buildings. The Comm department wanted an interactive campus map, but their budget was limited. I was trusted to create an interactive map using the Google Maps JavaScript API. It was my most challenging and rewarding project to date. I am not aware of its usage analytics, but I’m glad to say it’s still in use.</p>

                            <p>The first month I researched the Maps API and its limitations. I asked campus visitors, students, and faculty what they needed from a campus map. I found people wanted to know where to park and pay for parking, where to smoke, and where the trails were. I spent the second month mapping out points of interest on campus using GPS coordinates. I also took this time to design an interface for the map. I relied on the existing sidebar-style interface Google Maps already used. Finally, in the third month I developed the map, breaking it down into component objects and methods to cover the different states users would see.</p>
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
                                <h3>Educating the faculty and staff</h3>
                            </header>
                            <p>I worked with the rest of the communications team to teach department heads and admins to use the new site. We began by asking the current CMS users what types of tasks they performed often. From this list we created a series of workshops that would help explain how to do popular tasks in the new CMS. After the first workshop, confidence in the new CMS polled at 50%, but grew after each session.</p>
                        </div>
                    </div>
                </section>
            </section>
            <WorkTitle />
            <Tiles />
        </div>

    </Layout>
)

export default UHCL
