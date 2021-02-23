import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Compass from "../../images/servizi/compass.svg"
import Hammer from "../../images/servizi/hammer.svg"
import Pin from "../../images/servizi/pin.svg"
import Fax from "../../images/servizi/fax.svg"

const Servizi = props => {
  return (
    <div
      className="uk-section uk-padding-remove-vertical uk-position-relative"
      style={{ background: props.bg }}
    >
      <div
        className="uk-height-small uk-position-top"
        style={{ background: props.tp }}
      />
      <div className="uk-container uk-container-large">
        <div
          className="uk-grid-collapse uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m"
          data-uk-grid
        >
          <AniLink
            cover
            direction="bottom"
            to="/servizi/progettazione"
            bg="#fdddd1"
          >
            <div className="uk-card uk-card-small uk-inline-clip uk-width-expand">
              <div
                className="uk-card-header uk-height-large uk-flex uk-flex-center uk-flex-middle"
                style={{ background: "#fdddd1" }}
              >
                <img
                  src={Compass}
                  data-uk-svg
                  style={{ height: "200px" }}
                  alt="Progettazione"
                />
              </div>
              <div className="uk-card-body" style={{ background: "#ffffff" }}>
                <h3 className="uk-text-uppercase">Progettazione</h3>
              </div>
            </div>
          </AniLink>

          <AniLink
            cover
            direction="bottom"
            to="/servizi/posa-in-opera"
            bg="#dddddd"
          >
            <div className="uk-card uk-card-small uk-inline-clip uk-width-expand">
              <div
                className="uk-card-header uk-height-large uk-flex uk-flex-center uk-flex-middle"
                style={{ background: "#dddddd" }}
              >
                <img
                  src={Hammer}
                  data-uk-svg
                  style={{ height: "200px" }}
                  alt="Posa in opera"
                />
              </div>
              <div className="uk-card-body" style={{ background: "#ffffff" }}>
                <h3 className="uk-text-uppercase">Posa in opera</h3>
              </div>
            </div>
          </AniLink>

          <AniLink
            cover
            direction="bottom"
            to="/servizi/sopralluogo"
            bg="#b3bbbe"
          >
            <div className="uk-card uk-card-small uk-inline-clip uk-width-expand">
              <div
                className="uk-card-header uk-height-large uk-flex uk-flex-center uk-flex-middle"
                style={{ background: "#b3bbbe" }}
              >
                <img
                src={Pin}
                  data-uk-svg
                  style={{ height: "200px" }}
                  alt="Sopralluogo"
                />
              </div>
              <div className="uk-card-body" style={{ background: "#ffffff" }}>
                <h3 className="uk-text-uppercase">Sopralluogo</h3>
              </div>
            </div>
          </AniLink>

          <AniLink
            cover
            direction="bottom"
            to="/servizi/assistenza"
            bg="#f0e89f"
          >
            <div className="uk-card uk-card-small uk-inline-clip uk-width-expand">
              <div
                className="uk-card-header uk-height-large uk-flex uk-flex-center uk-flex-middle"
                style={{ background: "#f0e89f" }}
              >
                <img
                  src={Fax}
                  data-uk-svg
                  style={{ height: "200px" }}
                  alt="Assistenza"
                />
              </div>
              <div className="uk-card-body" style={{ background: "#ffffff" }}>
                <h3 className="uk-text-uppercase">Assistenza</h3>
              </div>
            </div>
          </AniLink>
        </div>
      </div>
    </div>
  )
}

export default Servizi
