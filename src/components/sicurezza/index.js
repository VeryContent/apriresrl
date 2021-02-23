import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Sicurezza = () => {
  return (
    <StaticQuery
      query={graphql`
        query SicurezzaImages {
          si00: file(relativePath: { eq: "sicurezza/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          si01: file(relativePath: { eq: "sicurezza/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          si02: file(relativePath: { eq: "sicurezza/02.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          si03: file(relativePath: { eq: "sicurezza/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          si04: file(relativePath: { eq: "sicurezza/04.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          si05: file(relativePath: { eq: "sicurezza/05.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          si06: file(relativePath: { eq: "sicurezza/06.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          si07: file(relativePath: { eq: "sicurezza/07.jpg" }) {
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
                        fluid={data.si00.childImageSharp.fluid}
                        alt={"Sicurezza"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.si01.childImageSharp.fluid}
                        alt={"Sicurezza"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.si07.childImageSharp.fluid}
                        alt={"Sicurezza"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.si02.childImageSharp.fluid}
                        alt={"Sicurezza"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.si03.childImageSharp.fluid}
                        alt={"Sicurezza"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.si04.childImageSharp.fluid}
                        alt={"Sicurezza"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.si05.childImageSharp.fluid}
                        alt={"Sicurezza"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.si06.childImageSharp.fluid}
                        alt={"Sicurezza"}
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

export default Sicurezza
