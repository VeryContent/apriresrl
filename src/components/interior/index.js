import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Interior = () => {
  return (
    <StaticQuery
      query={graphql`
        query InteriorImages {
          in00: file(relativePath: { eq: "interior/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in01: file(relativePath: { eq: "interior/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in02: file(relativePath: { eq: "interior/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in03: file(relativePath: { eq: "interior/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in04: file(relativePath: { eq: "interior/04.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in05: file(relativePath: { eq: "interior/05.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in06: file(relativePath: { eq: "interior/06.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in07: file(relativePath: { eq: "interior/07.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in08: file(relativePath: { eq: "interior/08.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in09: file(relativePath: { eq: "interior/09.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in10: file(relativePath: { eq: "interior/10.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in11: file(relativePath: { eq: "interior/11.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in12: file(relativePath: { eq: "interior/12.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in13: file(relativePath: { eq: "interior/13.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in14: file(relativePath: { eq: "interior/14.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in15: file(relativePath: { eq: "interior/15.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          in16: file(relativePath: { eq: "interior/16.png" }) {
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
                        fluid={data.in00.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in01.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in02.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>

                    <li>
                      <Img
                        fluid={data.in03.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in04.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>

                    <li>
                      <Img
                        fluid={data.in05.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>

                    <li>
                      <Img
                        fluid={data.in06.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in07.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in08.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in09.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in10.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in11.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in12.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in13.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in14.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in15.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.in16.childImageSharp.fluid}
                        alt={"Interior"}
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

export default Interior
