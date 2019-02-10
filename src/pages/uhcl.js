import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'

import pic08 from '../assets/images/uhcl01.png'
import pic09 from '../assets/images/uhcl02.png'
import pic10 from '../assets/images/uhcl03.png'

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
                    <p>I was under contract with Adroit Partners while working at UHCL. The communications department was migrating their website to a new university-focused CMS. As the Web Communications Coordinator I was responsible for facilitating the transition to the new CMS for staff and responsible for the creation of templates and other components for the new website.</p>
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
                            <p>For my first project I created a library of UHCL stock photography. I began by looking at other university websites and categorizing the types of images they used in terms of shot type, content, and the pages they represented. Next, I gathered all the current photos UCHL used and organized them according to my stock categories. At this point I was able to create a shoot itinerary for new photography based on the stock categories UHCL lacked.</p>
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
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
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
                                <h3>Educating the educators and other staff </h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
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
