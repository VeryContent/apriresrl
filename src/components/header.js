import React, { Component } from "react"
import { withPrefix } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import logo from "../images/aprire_logo.png"
import logoPiccolo from "../images/aprire-icon.png"
import houzz from "../images/houzz.png"


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isAperto: false }
  }

  setOpen() {
    this.setState({ isAperto: !this.state.isAperto })
  }

  render() {
	  
	  const {location} = this.props
    const isHomepage = location.pathname === withPrefix("/")
    const isChiSiamo = location.pathname === withPrefix("/chi-siamo")
    const isContattaci = location.pathname === withPrefix("/contattaci")
    const isCookie = location.pathname === withPrefix("/cookie-policy")
    const isPrivacy = location.pathname === withPrefix("/privacy-policy")

    const isElementiDiArchitettura =
      location.pathname === withPrefix("/elementi-di-architettura")
    const isInfissiEsterni =
      location.pathname ===
      withPrefix("/elementi-di-architettura/infissi-esterni")
    const isInterior =
      location.pathname === withPrefix("/elementi-di-architettura/interior")
    const isOscuranti =
      location.pathname === withPrefix("/elementi-di-architettura/oscuranti")
    const isSicurezza =
      location.pathname === withPrefix("/elementi-di-architettura/sicurezza")
    const isIndustria =
      location.pathname === withPrefix("/elementi-di-architettura/industria")
    const isArredi =
      location.pathname ===
      withPrefix("/elementi-di-architettura/legni-metalli-arredi")
    const isOutdoor =
      location.pathname === withPrefix("/elementi-di-architettura/outdoor")
    const isFacciate =
      location.pathname === withPrefix("/elementi-di-architettura/facciate")

    const isServizi = location.pathname === withPrefix("/servizi")
    const isProgettazione =
      location.pathname === withPrefix("/servizi/progettazione")
    const isPosaInOpera =
      location.pathname === withPrefix("/servizi/posa-in-opera")
    const isSopralluogo =
      location.pathname === withPrefix("/servizi/sopralluogo")
    const isAssistenza = location.pathname === withPrefix("/servizi/assistenza")

    const isRealizzazioni = location.pathname === withPrefix("/realizzazioni")
    const isRistrutturazione =
      location.pathname === withPrefix("/realizzazioni/ristrutturazione")
    const isNuova =
      location.pathname === withPrefix("/realizzazioni/nuova-realizzazione")

    return (
      <header
        className="nav"
        data-uk-sticky="cls-active: uk-background-default uk-box-shadow-medium; top: 100vh; animation: uk-animation-slide-top"
      >
        <div className="uk-grid-collapse" data-uk-grid>
          <div className="uk-width-1-2@s uk-width-auto">
            <div
              className="uk-navbar-container"
              data-uk-navbar
              style={{ background: "transparent" }}
            >
              <div className="uk-navbar-right">
                <AniLink
                  cover
                  direction="bottom"
                  to="/"
                  className="uk-navbar-item uk-logo"
                  bg="#f0f0f0"
                >
                  <img
                    className="uk-visible@s"
                    src={logo}
                    alt="Aprire s.r.l."
                    style={{ maxHeight: "50px" }}
                  />
                  <img
                    className="uk-hidden@s"
                    src={logoPiccolo}
                    alt="Aprire s.r.l."
                    style={{ maxHeight: "50px" }}
                  />
                </AniLink>
              </div>
            </div>
          </div>
          <div className="uk-width-1-2@s uk-width-expand uk-position-relative">
            <div
              className="uk-navbar-container"
              data-uk-navbar="boundary-align: true;"
              style={{ background: "#f0f0f0" }}
            >
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                  <li>
                    <button
                      className="uk-button"
                      style={{backgroundColor:'rgb(240,240,240'}}
                      onClick={this.setOpen.bind(this)}
                    >
                      <span
                        data-uk-navbar-toggle-icon=""
                        className="uk-icon uk-navbar-toggle-icon uk-margin-small-right "
                      ></span>
                      <span className=" uk-visible@s">MENU</span>
                    </button>

                    <div className={this.state.isAperto ? "megamenu is-attivo" : "megamenu"} >
                      <div
                        className="uk-grid-collapse uk-child-width-expand@s uk-light uk-padding uk-box-shadow-large"
                        data-uk-grid
                        style={{ background: "#233468" }}
                      >
                        <div className="uk-padding-small">
                          <ul className="uk-nav uk-nav-default">
                            <li className={isHomepage ? "uk-active" : ""}>
                              <AniLink
                                cover
                                direction="bottom"
                                to="/"
                                bg="#f0f0f0"
                              >
                                Home
                              </AniLink>
                            </li>
                            <li className={isChiSiamo ? "uk-active" : ""}>
                              <AniLink
                                cover
                                direction="bottom"
                                to="/chi-siamo"
                                bg="#f0e89f"
                              >
                                Chi siamo
                              </AniLink>
                            </li>
                            <li className={isContattaci ? "uk-active" : ""}>
                              <AniLink
                                cover
                                direction="bottom"
                                to="/contattaci"
                                bg="#fdddd1"
                              >
                                Contattaci
                              </AniLink>
                            </li>

                            <li className={isPrivacy ? "uk-active" : ""}>
                              <AniLink
                                cover
                                direction="bottom"
                                to="/privacy-policy"
                                bg="#f0f0f0"
                              >
                                Privacy Policy
                              </AniLink>
                            </li>
                            <li className={isCookie ? "uk-active" : ""}>
                              <AniLink
                                cover
                                direction="bottom"
                                to="/cookie-policy"
                                bg="#f0f0f0"
                              >
                                Cookie Policy
                              </AniLink>
                            </li>

                            <li
                              className={
                                isElementiDiArchitettura
                                  ? "uk-active uk-parent uk-hidden@s"
                                  : "uk-parent uk-hidden@s"
                              }
                            >
                              <AniLink
                                cover
                                direction="bottom"
                                to="/elementi-di-architettura"
                                bg="#f0f0f0"
                              >
                                Elementi di architettura
                              </AniLink>
                            </li>
                            <li
                              className={
                                isServizi
                                  ? "uk-active uk-parent uk-hidden@s"
                                  : "uk-parent uk-hidden@s"
                              }
                            >
                              <AniLink
                                cover
                                direction="bottom"
                                to="/servizi"
                                bg="#f0f0f0"
                              >
                                I nostri servizi
                              </AniLink>
                            </li>
                            <li
                              className={
                                isRealizzazioni
                                  ? "uk-active uk-parent uk-hidden@s"
                                  : "uk-parent uk-hidden@s"
                              }
                            >
                              <AniLink
                                cover
                                direction="bottom"
                                to="/realizzazioni"
                                bg="#f0f0f0"
                              >
                                Le nostre realizzazioni
                              </AniLink>
                            </li>
                          </ul>
                        </div>

                        <div className="uk-padding-small uk-visible@s">
                          <ul className="uk-nav uk-nav-default">
                            <li
                              className={
                                isElementiDiArchitettura
                                  ? "uk-active uk-parent"
                                  : "uk-parent"
                              }
                            >
                              <AniLink
                                cover
                                direction="bottom"
                                to="/elementi-di-architettura"
                                bg="#f0f0f0"
                              >
                                Elementi di architettura
                              </AniLink>
                              <ul className="uk-nav-sub">
                                <li
                                  className={
                                    isInfissiEsterni ? "uk-active" : ""
                                  }
                                >
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/elementi-di-architettura/infissi-esterni"
                                    bg="#f0f0f0"
                                  >
                                    Infissi esterni
                                  </AniLink>
                                </li>
                                <li className={isInterior ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/elementi-di-architettura/interior"
                                    bg="#f0f0f0"
                                  >
                                    Interior
                                  </AniLink>
                                </li>
                                <li className={isOscuranti ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/elementi-di-architettura/oscuranti"
                                    bg="#f0f0f0"
                                  >
                                    Oscuranti
                                  </AniLink>
                                </li>
                                <li className={isSicurezza ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/elementi-di-architettura/sicurezza"
                                    bg="#f0f0f0"
                                  >
                                    Sicurezza
                                  </AniLink>
                                </li>
                                <li className={isIndustria ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/elementi-di-architettura/industria"
                                    bg="#f0f0f0"
                                  >
                                    Industria
                                  </AniLink>
                                </li>
                                <li className={isArredi ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/elementi-di-architettura/legni-metalli-arredi"
                                    bg="#f0f0f0"
                                  >
                                    Legni, metalli, arredi
                                  </AniLink>
                                </li>
                                <li className={isOutdoor ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/elementi-di-architettura/outdoor"
                                    bg="#f0f0f0"
                                  >
                                    Outdoor
                                  </AniLink>
                                </li>
                                <li className={isFacciate ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/elementi-di-architettura/facciate"
                                    bg="#f0f0f0"
                                  >
                                    Facciate
                                  </AniLink>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                        <div className="uk-padding-small uk-visible@s">
                          <ul className="uk-nav uk-nav-default">
                            <li
                              className={
                                isServizi ? "uk-active uk-parent" : "uk-parent"
                              }
                            >
                              <AniLink
                                cover
                                direction="bottom"
                                to="/servizi"
                                bg="#f0f0f0"
                              >
                                I nostri servizi
                              </AniLink>
                              <ul className="uk-nav-sub">
                                <li
                                  className={isProgettazione ? "uk-active" : ""}
                                >
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/servizi/progettazione"
                                    bg="#fdddd1"
                                  >
                                    Progettazione
                                  </AniLink>
                                </li>
                                <li
                                  className={isPosaInOpera ? "uk-active" : ""}
                                >
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/servizi/posa-in-opera"
                                    bg="#dddddd"
                                  >
                                    Posa in opera
                                  </AniLink>
                                </li>
                                <li
                                  className={isSopralluogo ? "uk-active" : ""}
                                >
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/servizi/sopralluogo"
                                    bg="#b3bbbe"
                                  >
                                    Sopralluogo
                                  </AniLink>
                                </li>
                                <li className={isAssistenza ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/servizi/assistenza"
                                    bg="#f0e89f"
                                  >
                                    Assistenza
                                  </AniLink>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                        <div className="uk-padding-small uk-visible@s">
                          <ul className="uk-nav uk-nav-default">
                            <li
                              className={
                                isRealizzazioni
                                  ? "uk-active uk-parent"
                                  : "uk-parent"
                              }
                            >
                              <AniLink
                                cover
                                direction="bottom"
                                to="/realizzazioni"
                                bg="#f0f0f0"
                              >
                                Le nostre realizzazioni
                              </AniLink>
                              <ul className="uk-nav-sub">
                                <li
                                  className={
                                    isRistrutturazione ? "uk-active" : ""
                                  }
                                >
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/realizzazioni/ristrutturazione"
                                    bg="#f0f0f0"
                                  >
                                    Ristrutturazione
                                  </AniLink>
                                </li>
                                <li className={isNuova ? "uk-active" : ""}>
                                  <AniLink
                                    cover
                                    direction="bottom"
                                    to="/realizzazioni/nuova-realizzazione"
                                    bg="#f0f0f0"
                                  >
                                    Nuova realizzazione
                                  </AniLink>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                  <li style={{ background: "#4267b2", width: "80px" }}>
                    <a href="https://www.facebook.com/APRIRESRL/">
                      <span
                        style={{ color: "#fff" }}
                        data-uk-icon="icon: facebook; ratio: 1.8"
                      ></span>
                    </a>
                  </li>
                  <li style={{ background: "orange", width: "80px" }}>
                    <a href="https://www.instagram.com/apriresrl/">
                      <span
                        style={{ color: "#fff" }}
                        data-uk-icon="icon: instagram; ratio: 2"
                      ></span>
                    </a>
                  </li>
                  <li style={{ background: "#56BB63", width: "80px" }}>
                    <a
                      href="https://www.houzz.it/pro/apriresrl/aprire-srl

"
                    >
                      <img src={houzz} alt="Houzz logo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
