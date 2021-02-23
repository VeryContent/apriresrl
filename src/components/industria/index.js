import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Industria = () => {
  return (
    <StaticQuery
      query={graphql`
        query IndustriaImages {
          id00: file(relativePath: { eq: "industria/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id01: file(relativePath: { eq: "industria/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id02: file(relativePath: { eq: "industria/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id03: file(relativePath: { eq: "industria/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id04: file(relativePath: { eq: "industria/04.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id05: file(relativePath: { eq: "industria/05.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id06: file(relativePath: { eq: "industria/06.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id07: file(relativePath: { eq: "industria/07.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id08: file(relativePath: { eq: "industria/08.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id09: file(relativePath: { eq: "industria/09.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id10: file(relativePath: { eq: "industria/10.jpg" }) {
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
                        fluid={data.id00.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id01.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id02.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id03.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id04.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id05.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id06.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id07.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id08.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id09.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.id10.childImageSharp.fluid}
                        alt={"Industria"}
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

export default Industria
