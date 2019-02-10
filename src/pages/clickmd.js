import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'
import pic08 from '../assets/images/clickmd01.png'
import pic09 from '../assets/images/clickmd03.png'
import pic10 from '../assets/images/clickmd02.png'

const banner = {
  clientName: 'ClickMD Marketing',
  clientDesc: 'A small marketing agency specializing in the medical industry.',
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
                        <h2>In the heart of Montrose</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
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
                                <h3>Find your doctor through SEO</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>

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
                                <h3>Making development efficient with WordPress</h3>
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
                                <h3>Creating meaningful web interactions</h3>
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

export default ClickMD
