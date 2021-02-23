import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const InfissiEsterni = () => {
  return (
    <StaticQuery
      query={graphql`
        query InfissiEsterniImages {
          ie00: file(relativePath: { eq: "infissiesterni/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie01: file(relativePath: { eq: "infissiesterni/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie02: file(relativePath: { eq: "infissiesterni/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie03: file(relativePath: { eq: "infissiesterni/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie04: file(relativePath: { eq: "infissiesterni/04.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie05: file(relativePath: { eq: "infissiesterni/05.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie06: file(relativePath: { eq: "infissiesterni/06.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie07: file(relativePath: { eq: "infissiesterni/07.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie08: file(relativePath: { eq: "infissiesterni/08.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie09: file(relativePath: { eq: "infissiesterni/09.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie10: file(relativePath: { eq: "infissiesterni/10.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie11: file(relativePath: { eq: "infissiesterni/11.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie12: file(relativePath: { eq: "infissiesterni/12.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie13: file(relativePath: { eq: "infissiesterni/13.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie14: file(relativePath: { eq: "infissiesterni/14.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie15: file(relativePath: { eq: "infissiesterni/15.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie16: file(relativePath: { eq: "infissiesterni/16.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie17: file(relativePath: { eq: "infissiesterni/17.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ie18: file(relativePath: { eq: "infissiesterni/18.jpg" }) {
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
                        fluid={data.ie00.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ie01.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ie02.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ie03.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie04.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie05.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie06.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie07.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie08.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie09.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie10.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie11.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie12.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie13.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie14.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie15.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie16.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie17.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.ie18.childImageSharp.fluid}
                        alt={"Infissi esterni"}
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

export default InfissiEsterni
