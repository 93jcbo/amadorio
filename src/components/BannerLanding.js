import React from 'react'


const BannerLanding = (props) => (
    <section id="banner" className={`${props.banner.clientId}`+' port'}>
        <div className="inner grid-wrapper">
            <div className="col-7">
              <header className="major">
                <h1>{props.banner.clientName}</h1>
              </header>
              <div className="content">
                <p>{props.banner.clientDesc}</p>
              </div>
            </div>
            <div className="col-5 attributes">
              <h4>Roles</h4>
              <p>{props.banner.clientRoles}</p>
              <h4>Time</h4>
              <p>{props.banner.clientTime}</p>
            </div>
        </div>
    </section>
)

export default BannerLanding
