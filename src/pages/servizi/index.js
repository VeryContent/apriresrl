import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Servizi from '../../components/servizi'
import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexServizi extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><span>SERVIZI</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="I nostri servizi" description="Aprire srl - I nostri servizi" />
        
        <Helmet>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-16333570-1"></script>
              <script>
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-16333570-1');
              `}
              </script>
              <title>Progettazione e posa in opera – Aprire Srl </title>
              <meta name="description" content="Hai bisogno di qualcuno che segua progettazione e posa in opera di elementi di architettura per la tua casa? Rivolgiti ad Aprire Srl. " />
        </Helmet>

        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Progettazione e posa in opera: cura dei progetti a 360° </h1>
        <p>Ci piace seguire tutte le fasi di un processo costruttivo. Per questo interveniamo fin da subito nella <b>progettazione e posa in opera</b> di qualsiasi elemento d’architettura richiesto dai nostri clienti, che seguiamo da primi sopralluoghi all’assistenza post-vendita. </p>
        <h2>I nostri servizi </h2>
        <p>Dalla <b>progettazione e posa in opera</b> effettuata con personale interno specializzato e costantemente aggiornato, passando per il sopralluogo, completato dall’assistenza tecnico-commerciale, seguiamo e curiamo ogni progetto dalla carta fino a lavoro concluso. Nella <b>progettazione e posa in opera</b> così come negli altri servizi che offriamo, ci interfacciamo costantemente con il cliente, ascoltandone le necessità e i bisogni, proponendo sempre la migliore soluzione possibile.</p>
        <p>Le fasi legate alla <b>progettazione</b> e alla <b>posa in opera</b> di elementi architettonici rivestono un ruolo fondamentale per lo stato di salute delle abitazioni, realizzate ex novo o ristrutturate. Si tratta di individuare e definire involucri esterni e interni utilizzando materiali e prodotti presenti nel comparto edilizio. Sono procedure fondamentali per sviluppare al meglio tutto il processo produttivo di un progetto, dall’ideazione alla realizzazione.</p>
        
        </div></div></div>

        <Servizi bg={'#f0f0f0'} tp={'#ffffff'} />
        <Showroom bg={'#f0f0f0'} />

        
      </Layout>
    )
  }
}



export default IndexServizi