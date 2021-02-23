import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Outdoor = () => {
  return (
    <StaticQuery
      query={graphql`
        query OutdoorImages {
          ou00: file(relativePath: { eq: "outdoor/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ou01: file(relativePath: { eq: "outdoor/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ou02: file(relativePath: { eq: "outdoor/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ou03: file(relativePath: { eq: "outdoor/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ou04: file(relativePath: { eq: "outdoor/04.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ou05: file(relativePath: { eq: "outdoor/05.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ou06: file(relativePath: { eq: "outdoor/06.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          
          ou08: file(relativePath: { eq: "outdoor/08.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ou09: file(relativePath: { eq: "outdoor/09.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ou10: file(relativePath: { eq: "outdoor/10.jpg" }) {
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
                        fluid={data.ou00.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ou01.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ou02.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ou03.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ou04.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ou05.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ou06.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    
                    <li>
                    <Img
                        fluid={data.ou08.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ou09.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ou10.childImageSharp.fluid}
                        alt={"Outdoor"}
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

export default Outdoor
