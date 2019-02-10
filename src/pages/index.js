import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Tiles from '../components/Tiles'
import WorkTitle from '../components/WorkTitle'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

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
                              <p>I’m a Graphic/Web Designer at Satori Marketing in Houston, TX. I specialize in making websites better using my skills as a Designer, WordPress Developer, and Web Accessibility Specialist.</p>
                              <Link to="/about" className="button special fit">Get to know me</Link>
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
