import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Arredi = () => {
  return (
    <StaticQuery
      query={graphql`
        query ArrediImages {
          
          ar01: file(relativePath: { eq: "arredi/01.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar02: file(relativePath: { eq: "arredi/02.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar03: file(relativePath: { eq: "arredi/03.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar04: file(relativePath: { eq: "arredi/04.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar05: file(relativePath: { eq: "arredi/05.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar06: file(relativePath: { eq: "arredi/06.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar07: file(relativePath: { eq: "arredi/07.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar08: file(relativePath: { eq: "arredi/08.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar09: file(relativePath: { eq: "arredi/09.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar10: file(relativePath: { eq: "arredi/10.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar11: file(relativePath: { eq: "arredi/11.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar12: file(relativePath: { eq: "arredi/12.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar13: file(relativePath: { eq: "arredi/13.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar14: file(relativePath: { eq: "arredi/14.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar15: file(relativePath: { eq: "arredi/15.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar16: file(relativePath: { eq: "arredi/16.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar17: file(relativePath: { eq: "arredi/17.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 990) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ar18: file(relativePath: { eq: "arredi/18.jpg" }) {
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
                        fluid={data.ar01.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar02.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar03.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar04.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar05.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar06.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar07.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar08.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar09.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar10.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar11.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar12.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar13.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar14.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar15.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar16.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar17.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </li>
                    <li>
                    <Img
                        fluid={data.ar18.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
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

export default Arredi
