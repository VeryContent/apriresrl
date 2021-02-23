import React, { useState } from "react"

const Footer = () => {
  const [value, setValue] = useState(
    sessionStorage.getItem("aprirePopUp") || "block"
  )

  const settaPop = () => {
    sessionStorage.setItem("aprirePopUp", "none")
    setValue("none")
  }

  return (
    <>
      <footer
        className="uk-padding-small uk-text-center uk-light"
        style={{ background: "#3f4042" }}
      >
        © {new Date().getFullYear()} Aprire srl - P.I. 02141540134. Built by{" "}
        <a href="https://www.webartsdesign.it">Webartsdesign</a>.
      </footer>
{/*
      <div
        id="modal-full"
        className="uk-modal-full uk-open"
        data-uk-modal
        style={{ display: value }}
      >
        <div
          className="uk-modal-dialog"
          style={{ background: "rgba(255,255,255,0.85)" }}
        >
          <button
            className="uk-modal-close-full uk-close-large"
            type="button"
            onClick={settaPop}
            data-uk-close
          ></button>
          <div>
            <div
              className="uk-flex uk-flex-center uk-flex-middle"
              data-uk-height-viewport
            >
              <div className="uk-padding-large">
                <p className="uk-text-lead uk-text-center">
                  A causa dell’emergenza sanitaria
                  <br />e in attesa di nuove indicazioni da parte delle
                  autorità,
                  <br />
                  <span
                    className="uk-text-bold"
                    style={{ textDecoration: "underline" }}
                  >
                    stiamo lavorando da casa.
                  </span>
                  <br />
                  Per qualsiasi necessità{" "}
                  <span className="uk-text-bold">
                    ci potete chiamare allo 039-509538
                  </span>
                  <br />
                  oppure{" "}
                  <span className="uk-text-bold">
                    scriverci una mail a{" "}
                    <span style={{ textDecoration: "underline" }}>
                      info@apriresrl.it
                    </span>
                  </span>
                </p>
                <p className="uk-text-lead uk-text-center">
                  Con l’augurio di poter tornare presto alla normalità,
                  <br />
                  invitiamo tutte le persone ad assumere atteggiamenti
                  responsabili
                  <br />
                  nei confronti della propria e altrui salute.
                </p>

                <p className="uk-text-center uk-margin-medium">
                  <button
                    className="uk-button uk-button-primary uk-button-large"
					onClick={settaPop}
					style={{fontSize: '1.1rem'}}
                  >
                    Accedi al sito
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  )
}

export default Footer
