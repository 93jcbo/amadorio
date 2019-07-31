import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'
import { withPrefix } from 'gatsby-link'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Jacob Amador - HCI Professional"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="bioIntro">
                        <div className="inner grid-wrapper">
                            <div className="col-12">
                              <p>I’m a Designer in Houston, TX. I have many skills and talents. My specialty is designing websites and my passion is to educate others about UX. </p>
                            </div>
                            <div className="col-6">
                              <Link to="/about" className="button special fit">Get to know me</Link>
                            </div>
                            <div className="col-6">
                              <a href="https://www.dropbox.com/s/eydkq64gpgzamsu/Jacob-Amador-Resume.pdf?dl=0" target="__blank" className="button special fit">Download my resume</a>
                            </div>
                        </div>
                    </section>
                    <WorkTitle />
                    <Tiles />
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
