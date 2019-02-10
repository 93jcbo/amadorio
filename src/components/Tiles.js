import React from 'react'
import { Link } from 'gatsby'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

const Tiles = (props) => (
  <section id="cases" className="tiles">
      <article style={{backgroundImage: `url(${pic01})`}}>
          <header className="major">
              <h3>Satori Marketing</h3>
              <p>An up and coming full service marketing agency</p>
          </header>
          <Link to="/satori" className="link primary"></Link>
      </article>
      <article style={{backgroundImage: `url(${pic02})`}}>
          <header className="major">
              <h3>Catrinoso</h3>
              <p>Projects that I’ve worked on as a freelancer</p>
          </header>
          <Link to="/catrinoso" className="link primary"></Link>
      </article>
      <article style={{backgroundImage: `url(${pic03})`}}>
          <header className="major">
              <h3>University of Houston-Clear Lake</h3>
              <p>A four-year university in Clear Lake, TX</p>
          </header>
          <Link to="/uhcl" className="link primary"></Link>
      </article>
      <article style={{backgroundImage: `url(${pic04})`}}>
          <header className="major">
              <h3>ClickMD Marketing</h3>
              <p>A web marketing agency specializing in the medical industry</p>
          </header>
          <Link to="/clickmd" className="link primary"></Link>
      </article>
    </section>
)

export default Tiles
