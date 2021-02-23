import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Immagine = props => {
  return (
    <StaticQuery
      query={graphql`
        query ImmagineImages {
          albo: file(relativePath: { eq: "home/giacomo-albo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          finestra0: file(relativePath: { eq: "home/finestra0.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          finestra1: file(relativePath: { eq: "home/finestra1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          finestra2: file(relativePath: { eq: "home/finestra2.jpg" }) {
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
          id="target"
          className="uk-section uk-padding-remove-vertical uk-position-relative"
          style={{ background: "#f0f0f0" }}
        >
          <div
            className="uk-height-small uk-position-top"
            style={{ background: "#ffffff" }}
          />
          <div className="uk-container uk-container-large">
            <div
              className=""
              data-uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 3500; pause-on-hover: false"
            >
              <ul className="uk-slideshow-items">
                <li>
                  <div className="uk-position-cover uk-animation-kenburns">
                    <Img
                      fluid={data.albo.childImageSharp.fluid}
                      alt={"Giacomo Albo"}
                    />
                  </div>
                </li>
                <li>
                  <div className="uk-position-cover uk-animation-kenburns">
                    <Img
                      fluid={data.finestra0.childImageSharp.fluid}
                      alt={"Giacomo Albo"}
                    />
                  </div>
                </li>
                <li>
                  <div className="uk-position-cover uk-animation-kenburns">
                    <Img
                      fluid={data.finestra1.childImageSharp.fluid}
                      alt={"Giacomo Albo"}
                    />
                  </div>
                </li>
                <li>
                  <div className="uk-position-cover uk-animation-kenburns">
                    <Img
                      fluid={data.finestra2.childImageSharp.fluid}
                      alt={"Giacomo Albo"}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Immagine
