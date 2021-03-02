import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import InfissiEsterni from '../../components/infissiesterni'
import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexInfissiEsterni extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/elementi-di-architettura" bg="#f0f0f0">ELEMENTI DI ARCHITETTURA</AniLink></li>
            <li><span>INFISSI ESTERNI</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="Infissi esterni" description="Aprire srl - Infissi esterni, l’imbarazzo della scelta, e delle soluzioni, riguarda anche i materiali, tra i quali il Bamboo, Pino FSC, Accoya. Finiture speciali e personalizzazioni su misura sono la ciliegina sulla torta per fare della tua casa lo spazio comodo e funzionale che sempre hai sognato!" />
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
              <title>Montaggio infissi esterni – Aprire Srl </title>
              <meta name="description" content="Cerchi una realtà specializzata nel montaggio infissi esterni, oltre che nella fornitura di questi prodotti? Affidati a 360° ad Aprire Srl. " />
        </Helmet>

        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Montaggio infissi esterni: ampia scelta  </h1>
        <p>Calore, luce, comfort, silenzio, efficienza e risparmio energetico. Sono criteri importanti da valutare nella scelta dei serramenti e in fase di <b>montaggio di infissi esterni</b>. È per questo che c’è bisogno di professionisti specializzati e referenziati, come il nostro personale altamente qualificato e formato. </p>
        <h2>Serramenti in legno, legno - alluminio, alluminio, PVC e ferro </h2>
        <p>La nostra missione? Scegliere l’elemento ideale per valorizzare e personalizzare la tua abitazione anche tramite il montaggio di infissi esterni. La nostra esperienza ci ha insegnato che ogni realtà abitativa è diversa dalle altre.</p>
        <p>Ecco perché ti proponiamo un’ampia scelta di serramenti: in legno, legno/alluminio, PVC e ferro realizzati su misura. L’imbarazzo della scelta, e delle soluzioni, riguarda anche i materiali, tra i quali Bamboo, Pino FSC, Accoya.</p>
        <p>I nostri servizi comprendono vendita e montaggio di infissi esterni, finiture speciali e personalizzazioni su misura degli elementi di architettura che sceglierai sotto la nostra guida e supervisione. Affidati agli esperti di Aprire Srl. Fai della tua casa lo spazio comodo e funzionale che sempre hai sognato.  </p>
        
        </div></div></div>

        <InfissiEsterni />
        <Showroom bg={'#f0f0f0'} />
        
    
      </Layout>
    )
  }
}



export default IndexInfissiEsterni
