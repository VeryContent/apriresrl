import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const NuovaRealizzazione = () => {
  return (
    <StaticQuery
      query={graphql`
        query NuovaImages {
          nu00: file(relativePath: { eq: "nuovarealizzazione/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu01: file(relativePath: { eq: "nuovarealizzazione/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu02: file(relativePath: { eq: "nuovarealizzazione/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu03: file(relativePath: { eq: "nuovarealizzazione/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu04: file(relativePath: { eq: "nuovarealizzazione/04.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu05: file(relativePath: { eq: "nuovarealizzazione/05.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu06: file(relativePath: { eq: "nuovarealizzazione/06.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu07: file(relativePath: { eq: "nuovarealizzazione/07.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu08: file(relativePath: { eq: "nuovarealizzazione/08.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu09: file(relativePath: { eq: "nuovarealizzazione/09.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu10: file(relativePath: { eq: "nuovarealizzazione/10.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu11: file(relativePath: { eq: "nuovarealizzazione/11.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu12: file(relativePath: { eq: "nuovarealizzazione/12.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          nu13: file(relativePath: { eq: "nuovarealizzazione/13.jpg" }) {
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
                        fluid={data.nu00.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu01.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>

                    <li>
                    <Img
                        fluid={data.nu02.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu03.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu04.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu05.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>

                    <li>
                    <Img
                        fluid={data.nu06.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu07.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu08.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu09.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu10.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu11.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu12.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.nu13.childImageSharp.fluid}
                        alt={"Nuova realizzazione"}
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

export default NuovaRealizzazione
