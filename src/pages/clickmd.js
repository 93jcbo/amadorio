import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'
import pic08 from '../assets/images/clickmd01.jpg'
import pic09 from '../assets/images/clickmd03.jpg'
import pic10 from '../assets/images/clickmd02.jpg'

const banner = {
  clientName: 'ClickMD Marketing',
  clientDesc: 'A boutique marketing agency specializing in the medical industry.',
  clientRoles:'Front-End\u00A0Developer, Graphic\u00A0Designer',
  clientTime:'2013-2015',
  clientId: 'clickmd'
}

const ClickMD = (props) => (
    <Layout>
        <Helmet>
            <title>Jacob Amador - ClickMD Marketing Work</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding  banner={banner} />

        <div id="main">
            <section id="one" className="clientIntro">
                <div className="inner">
                    <header className="major">
                        <h2>Finding a niche market</h2>
                    </header>
                    <p>ClickMD started life as First Creative. We handled clients ranging in industry such as real estate, health, medical, and consumer ice. ClickMD came about once most -clients were doctors and we realized that we were doing a great job marketing the medical industry. I was the front-end developer, creating websites to the specs of the designers, but I had more input in the user interactions.</p>
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
                                <h3>Patients need doctors with good SEO</h3>
                            </header>
                            <p>A medical group approached ClickMD to improve their ranking on search engines. Patients would try to contact the doctors through their hospital affiliations, but not their group website. I began by performing an SEO audit on their existing site. I discovered their pages did not have targeted keywords or a content structure needed to have a high PageRank.</p>

                            <p>I created an excel sheet with all their pages and listed new URL’s, header tag, anchor keywords, meta titles, and alt attributes. Between another developer and I, we updated the medical group’s website according to the new keyword specs. Once re-launched, the website saw an increase in organic visitors of 50% within the first month.</p>

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
                                <h3>Efficient development with WordPress</h3>
                            </header>
                            <p>When I began at ClickMD, we made our websites using vanilla HTML and CSS in Dreamweaver. Without a CMS, we couldn't make templates or keep track of file versions. As our clients' websites grew in pages, I suggested we start using WordPress. I was charged with finding and customizing WordPress themes to fit the designs of our old sites. The clients enjoyed being able to make changes to their pages and updating their blogs themselves.</p>

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
                                <h3>Creating meaningful web interactions</h3>
                            </header>
                            <p>Besides learning how to use WordPress, I learned how to use the jQuery library. I was able to make large interactive navigation menus efficiently. I even used jQuery for validation on custom forms. jQuery coupled with CSS animations allowed me to create helpful user interactions.</p>

                        </div>
                    </div>
                </section>
            </section>
            <WorkTitle />
            <Tiles />
        </div>

    </Layout>
)

export default ClickMD
