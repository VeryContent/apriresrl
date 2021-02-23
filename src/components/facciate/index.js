import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Facciate = () => {
  return (
    <StaticQuery
      query={graphql`
        query FacciateImages {
          fa00: file(relativePath: { eq: "facciate/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fa00a: file(relativePath: { eq: "facciate/00a.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fa01: file(relativePath: { eq: "facciate/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fa02: file(relativePath: { eq: "facciate/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          fa03: file(relativePath: { eq: "facciate/03.jpg" }) {
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
                        fluid={data.fa00.childImageSharp.fluid}
                        alt={"Facciate"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.fa00a.childImageSharp.fluid}
                        alt={"Facciate"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.fa01.childImageSharp.fluid}
                        alt={"Facciate"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.fa02.childImageSharp.fluid}
                        alt={"Facciate"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.fa03.childImageSharp.fluid}
                        alt={"Facciate"}
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

export default Facciate
