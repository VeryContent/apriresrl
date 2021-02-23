import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Elementi from '../../components/elementi'
import Showroom from '../../components/showroom'

import {Helmet} from "react-helmet";

class IndexElementi extends Component {



  render() {

    const bread = <ul className="uk-breadcrumb">
      <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
      <li><span>ELEMENTI DI ARCHITETTURA</span></li>
    </ul>

    return (
      <Layout>
        <SEO title="Elementi di Architettura" description="Aprire srl - Elementi dell’architettura, porte, finestre, ingressi, ringhiere, cancelli." />
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
              <title>Realizzazione e ristrutturazione edifici – Aprire Srl </title>
              <meta name="description" content="Stai cercando una realtà specializzata in nella sostituzione di infissi ed elementi di architettura? Rivolgiti al nostro team di Aprire Srl.  " />
        </Helmet>
        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Realizzazione e ristrutturazione di edifici: i nostri prodotti  </h1>
        <p>Ben radicati sul nostro territorio di riferimento, per privati e aziende ci occupiamo della sostituzione di infissi ed elementi di architettura, fornendo diversi prodotti e servizi. Utilizziamo materiali di alta </p>
        <p>qualità e innovativi, così come tecniche di lavorazione all’avanguardia. Il nostro team è qualificato, esperto e sottoposto a costante aggiornamento professionale. </p>
        <h2>Elementi di architettura per esterni e interni </h2>
        <p>Da venticinque anni siamo specializzati nella realizzazione e ristrutturazione di edifici e nella vendita di serramenti in legno, legno-alluminio, PVC e ferro, porte interne in legno, vetro, scale e soluzioni rasopareti, sistemi oscuranti per la gestione della luce sia in interni che in esterni, ingressi, inferriate e tapparelle di sicurezza. </p>
        <p>Mettiamo a punto e realizziamo anche soluzioni per l’industria (porte tecniche, porte per ambienti speciali, compartimentazione tagliafuoco), soluzioni outdoor (coperture, tende, pergole e verande), realizzazione di facciate con materiali tradizionali, innovativi e tecnologici. </p>
        <p>Completano la nostra gamma gli arredamenti e complementi d’arredo Ethnicraft, pavimenti in legno, realizzazioni customizzate di complementi in ferro e legno, maniglie Formani e Pullcast. </p>

        </div></div></div>

        <Elementi bg={'#f0f0f0'} tp={'#ffffff'} />
        <Showroom bg={'#f0f0f0'} />


      </Layout>
    )
  }
}



export default IndexElementi