import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Ristrutturazione = () => {
  return (
    <StaticQuery
      query={graphql`
        query RistrutturazioneImages {
          ri00: file(relativePath: { eq: "ristrutturazione/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri01: file(relativePath: { eq: "ristrutturazione/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri02: file(relativePath: { eq: "ristrutturazione/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri03: file(relativePath: { eq: "ristrutturazione/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri04: file(relativePath: { eq: "ristrutturazione/04.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri05: file(relativePath: { eq: "ristrutturazione/05.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri06: file(relativePath: { eq: "ristrutturazione/06.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri07: file(relativePath: { eq: "ristrutturazione/07.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri08: file(relativePath: { eq: "ristrutturazione/08.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri09: file(relativePath: { eq: "ristrutturazione/09.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri10: file(relativePath: { eq: "ristrutturazione/10.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri11: file(relativePath: { eq: "ristrutturazione/11.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri12: file(relativePath: { eq: "ristrutturazione/12.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri13: file(relativePath: { eq: "ristrutturazione/13.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri14: file(relativePath: { eq: "ristrutturazione/14.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ri15: file(relativePath: { eq: "ristrutturazione/15.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div
          className="uk-section uk-padding-remove-vertical uk-position-relative"
          style={{ background: "#f0f0f0" }}
        >
          <div
            className="uk-height-small uk-position-top"
            style={{ background: "#ffffff" }}
          />
          <div className="uk-container uk-container-large">
            <div>
              <div data-uk-slideshow="animation: push">
                <div
                  className="uk-position-relative uk-visible-toggle uk-light"
                  tabIndex="-1"
                >
                  <ul className="uk-slideshow-items">
                    <li>
                      <Img
                        fluid={data.ri00.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri01.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri02.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri03.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri04.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri05.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri06.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri07.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>

                    <li>
                    <Img
                        fluid={data.ri08.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri09.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri10.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri11.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri12.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri13.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri14.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ri15.childImageSharp.fluid}
                        alt={"Ristrutturazione"}
                      />
                    </li>
                    
                  </ul>

                  <a
                    className="uk-position-center-left uk-position-small uk-slidenav-large"
                    style={{ background: "#233468" }}
                    href="#"
                    data-uk-slidenav-previous=""
                    data-uk-slideshow-item="previous"
                  ></a>
                  <a
                    className="uk-position-center-right uk-position-small uk-slidenav-large"
                    style={{ background: "#233468" }}
                    href="#"
                    data-uk-slidenav-next=""
                    data-uk-slideshow-item="next"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Ristrutturazione
