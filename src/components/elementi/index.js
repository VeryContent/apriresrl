import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Elementi = props => {
  return (
    <StaticQuery
      query={graphql`
        query ElementiImages {
          infissiEsterni: file(
            relativePath: { eq: "elementi/infissi-esterni.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          interior: file(relativePath: { eq: "elementi/interior.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          oscuranti: file(relativePath: { eq: "elementi/oscuranti.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          sicurezza: file(relativePath: { eq: "elementi/sicurezza.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          industria: file(relativePath: { eq: "elementi/industria.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          legniMetalliArredi: file(
            relativePath: { eq: "elementi/legni-metalli-arredi.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          outdoor: file(relativePath: { eq: "elementi/outdoor.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          facciate: file(relativePath: { eq: "elementi/facciate.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 450, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div
          className="uk-section uk-padding-remove-vertical uk-position-relative "
          style={{ background: props.bg }}
        >
          <div
            className="uk-height-small uk-position-top"
            style={{ background: props.tp }}
          />
          <div className="uk-container uk-container-large">
            <div
              className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-collapse"
              data-uk-grid
              data-uk-height-match="target: >  a > div > div"
            >
              <AniLink
                cover
                direction="bottom"
                to="/elementi-di-architettura/infissi-esterni"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                    <div className="uk-card-media-top">
                      <Img
                        fluid={data.infissiEsterni.childImageSharp.fluid}
                        alt={"Infissi esterni"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Infissi esterni</h3>
                      <p className="uk-text-muted uk-margin-remove">
                        Serramenti in legno, legno - alluminio, alluminio, PVC e
                        ferro
                      </p>
                    </div>
                  </div>
                </div>
              </AniLink>
              <AniLink
                cover
                direction="bottom"
                to="/elementi-di-architettura/interior"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                    <div className="uk-card-media-top">
                      <Img
                        fluid={data.interior.childImageSharp.fluid}
                        alt={"Interior"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Interior</h3>
                      <p className="uk-text-muted uk-margin-remove">
                        Porte interne in legno, in vetro, scale, soluzioni
                        rasoparete
                      </p>
                    </div>
                  </div>
                </div>
              </AniLink>

              <AniLink
                cover
                direction="bottom"
                to="/elementi-di-architettura/oscuranti"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                    <div className="uk-card-media-top">
                      <Img
                        fluid={data.oscuranti.childImageSharp.fluid}
                        alt={"Oscuranti"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Oscuranti</h3>
                      <p className="uk-text-muted uk-margin-remove">
                        Sistemi oscuranti interni ed esterni per la gestione
                        della luce
                      </p>
                    </div>
                  </div>
                </div>
              </AniLink>

              <AniLink
                cover
                direction="bottom"
                to="/elementi-di-architettura/sicurezza"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                    <div className="uk-card-media-top">
                      <Img
                        fluid={data.sicurezza.childImageSharp.fluid}
                        alt={"Sicurezza"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Sicurezza</h3>
                      <p className="uk-text-muted uk-margin-remove">
                        Ingressi, inferriate e tapparelle di sicurezza per la
                        protezione dei tuoi cari
                      </p>
                    </div>
                  </div>
                </div>
              </AniLink>

              <AniLink
                cover
                direction="bottom"
                to="/elementi-di-architettura/industria"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                    <div className="uk-card-media-top">
                      <Img
                        fluid={data.industria.childImageSharp.fluid}
                        alt={"Industria"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Industria</h3>
                      <p className="uk-text-muted uk-margin-remove">
                        Soluzioni per l’industria, porte tecniche, porte per
                        ambienti speciali, compartimentazione tagliafuoco
                      </p>
                    </div>
                  </div>
                </div>
              </AniLink>

              <AniLink
                cover
                direction="bottom"
                to="/elementi-di-architettura/legni-metalli-arredi"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                    <div className="uk-card-media-top">
                      <Img
                        fluid={data.legniMetalliArredi.childImageSharp.fluid}
                        alt={"Legni, metalli, arredi"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">
                        Legni, metalli, arredi
                      </h3>
                      <p className="uk-text-muted uk-margin-remove">
                        Arredamenti Ethnicraft, pavimenti in legno,
                        realizzazioni customizzate di complementi in ferro e
                        legno. Maniglie Formani e Pullcast.
                      </p>
                    </div>
                  </div>
                </div>
              </AniLink>

              <AniLink
                cover
                direction="bottom"
                to="/elementi-di-architettura/outdoor"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                    <div className="uk-card-media-top">
                      <Img
                        fluid={data.outdoor.childImageSharp.fluid}
                        alt={"Outdoor"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Outdoor</h3>
                      <p className="uk-text-muted uk-margin-remove">
                        Coperture, tende, pergole e verande per godersi gli
                        esterni di casa tutto l’anno.
                      </p>
                    </div>
                  </div>
                </div>
              </AniLink>

              <AniLink
                cover
                direction="bottom"
                to="/elementi-di-architettura/facciate"
                bg="#f0f0f0"
              >
                <div>
                  <div className="uk-card uk-card-small">
                    <div className="uk-card-media-top">
                      <Img
                        fluid={data.facciate.childImageSharp.fluid}
                        alt={"Facciate"}
                      />
                    </div>
                    <div
                      className="uk-card-body"
                      style={{ background: "#ffffff" }}
                    >
                      <h3 className="uk-text-uppercase">Facciate</h3>
                      <p className="uk-text-muted uk-margin-remove">
                        Realizzazione di facciate con materiali tradizionali o
                        innovativi e tecnologici.
                      </p>
                    </div>
                  </div>
                </div>
              </AniLink>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Elementi
