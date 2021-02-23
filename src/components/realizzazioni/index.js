import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Realizzazioni = props => {
  return (
    <StaticQuery
      query={graphql`
        query RealizzazioniImages {
          nuovo: file(relativePath: { eq: "realizzazioni/cattaneo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 750, maxHeight: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ristrutturazione: file(
            relativePath: { eq: "realizzazioni/cascina.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 750, maxHeight: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
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
              className="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-collapse"
              data-uk-grid
              data-uk-height-match="target: >  a > div > div"
            >
              <AniLink
                cover
                direction="bottom"
                to="/realizzazioni/ristrutturazione"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                  <div className="uk-card-media-top">
                      <Img
                        fluid={data.ristrutturazione.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Ristrutturazione</h3>
                    </div>
                  </div>
                </div>
              </AniLink>
              <AniLink
                cover
                direction="bottom"
                to="/realizzazioni/nuova-realizzazione"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                  <div className="uk-card-media-top">
                      <Img
                        fluid={data.nuovo.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Nuova realizzazione</h3>
                    </div>
                  </div>
                </div>
              </AniLink>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Realizzazioni
