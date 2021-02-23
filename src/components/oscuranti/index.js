import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Oscuranti = () => {
  return (
    <StaticQuery
      query={graphql`
        query OscurantiImages {
          os00: file(relativePath: { eq: "oscuranti/00.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os01: file(relativePath: { eq: "oscuranti/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os02: file(relativePath: { eq: "oscuranti/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os03: file(relativePath: { eq: "oscuranti/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os04: file(relativePath: { eq: "oscuranti/04.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os05: file(relativePath: { eq: "oscuranti/05.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os06: file(relativePath: { eq: "oscuranti/06.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os07: file(relativePath: { eq: "oscuranti/07.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os07a: file(relativePath: { eq: "oscuranti/07a.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os08: file(relativePath: { eq: "oscuranti/08.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          os09: file(relativePath: { eq: "oscuranti/09.jpg" }) {
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
                        fluid={data.os00.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os01.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os02.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os03.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os04.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os05.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os06.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>

                    <li>
                      <Img
                        fluid={data.os07.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os07a.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os08.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </li>
                    <li>
                      <Img
                        fluid={data.os09.childImageSharp.fluid}
                        alt={"Oscuranti"}
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

export default Oscuranti
