import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const Hero = props => {
  return (
    <StaticQuery
      query={graphql`
        query HeroImages {
          scacca: file(
            relativePath: { eq: "home/valentino-scaccabarozzi.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <section
          className={props.classe}
          style={{ backgroundColor: props.bg === "" ? "#fff" : props.bg }}
        >
          <div className="uk-container uk-container-large">
            <div data-uk-grid>
              <div
                className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle"
                
              >
                <div className=" ">
                  {props.bread}

                  <h1 className="uk-heading-primary">{props.titolo}</h1>

                  <p className="sub uk-text-muted">{props.sottotitolo}</p>

                  {props.children}
                </div>
              </div>

              {props.tipo === "home" && (
                <div className="uk-padding uk-width-1-2@l">
                  <Img
                    fluid={data.scacca.childImageSharp.fluid}
                    alt={"Progetto arch. Valentino Scaccabarozzi"}
                  />

                  <p className="uk-text-muted uk-text-center uk-text-italic uk-margin-remove">
                    Progetto arch. Valentino Scaccabarozzi
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Hero
