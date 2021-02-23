import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const ChiSiamo = props => {
  return (
    <StaticQuery
      query={graphql`
        query ChiSiamoImages {
          team: file(relativePath: { eq: "chisiamo/team.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fabriziobosisio: file(
            relativePath: { eq: "chisiamo/FABRIZIO BOSISIO.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 550) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dantemandelli: file(
            relativePath: { eq: "chisiamo/DANTE MANDELLI.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 550) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          andreabosisio: file(
            relativePath: { eq: "chisiamo/ANDREA BOSISIO.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 550) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alicebosisio: file(
            relativePath: { eq: "chisiamo/ALICE BOSISIO.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 550) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          maurobrozzoni: file(
            relativePath: { eq: "chisiamo/MAURO BROZZONI.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 550) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div
          className="uk-section uk-padding-remove-vertical uk-position-relative "
          style={{ background: "#f0e89f" }}
        >
          <div
            className="uk-height-small uk-position-top"
            style={{ background: "#ffffff" }}
          />
          <div className="uk-container uk-container-large">
            <div
              className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-5@xl uk-grid-collapse"
              data-uk-grid
              data-uk-height-match="target: > div > .uk-card > .uk-card-body"
            >
              <div>
                <div className="uk-card uk-card-small">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={data.fabriziobosisio.childImageSharp.fluid}
                      alt={"FABRIZIO BOSISIO"}
                    />
                  </div>
                  <div
                    className="uk-card-body"
                    style={{ background: "#ffffff" }}
                  >
                    <h3 className="uk-text-uppercase">FABRIZIO BOSISIO</h3>
                    <p className="uk-text-muted uk-text-uppercase uk-margin-remove">
                      Socio Fondatore
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="uk-card uk-card-small">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={data.dantemandelli.childImageSharp.fluid}
                      alt={"DANTE MANDELLI"}
                    />
                  </div>
                  <div
                    className="uk-card-body"
                    style={{ background: "#ffffff" }}
                  >
                    <h3 className="uk-text-uppercase">DANTE MANDELLI</h3>
                    <p className="uk-text-muted uk-text-uppercase uk-margin-remove">
                      Socio Fondatore
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="uk-card uk-card-small">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={data.andreabosisio.childImageSharp.fluid}
                      alt={"ANDREA BOSISIO"}
                    />
                  </div>
                  <div
                    className="uk-card-body"
                    style={{ background: "#ffffff" }}
                  >
                    <h3 className="uk-text-uppercase">ANDREA BOSISIO</h3>
                    <p className="uk-text-muted uk-text-uppercase uk-margin-remove">
                      Responsabile ufficio commerciale
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="uk-card uk-card-small">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={data.alicebosisio.childImageSharp.fluid}
                      alt={"ALICE BOSISIO"}
                    />
                  </div>
                  <div
                    className="uk-card-body"
                    style={{ background: "#ffffff" }}
                  >
                    <h3 className="uk-text-uppercase">ALICE BOSISIO</h3>
                    <p className="uk-text-muted uk-text-uppercase uk-margin-remove">
                      Responsabile Amministrazione
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="uk-card uk-card-small">
                  <div className="uk-card-media-top">
                    <Img
                      fluid={data.maurobrozzoni.childImageSharp.fluid}
                      alt={"MAURO BROZZONI"}
                    />
                  </div>
                  <div
                    className="uk-card-body"
                    style={{ background: "#ffffff" }}
                  >
                    <h3 className="uk-text-uppercase">MAURO BROZZONI</h3>
                    <p className="uk-text-muted uk-text-uppercase uk-margin-remove">
                      Responsabile ufficio tecnico
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="uk-margin-medium-top">
              <Img
                fluid={data.team.childImageSharp.fluid}
                alt={"Team Aprire srl"}
              />
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default ChiSiamo
