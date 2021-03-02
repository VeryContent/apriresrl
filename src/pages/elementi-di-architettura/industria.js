import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Industria from '../../components/industria'
import Showroom from '../../components/showroom'

import {Helmet} from "react-helmet";

class IndexIndustria extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/elementi-di-architettura" bg="#f0f0f0">ELEMENTI DI ARCHITETTURA</AniLink></li>
            <li><span>INDUSTRIA</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="Industria" description="Aprire srl - Soluzioni per l’industria, porte tecniche, porte per ambienti speciali, compartimentazione tagliafuoco" />
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
              <title>Fornitura e posa per l’industria – Aprire Srl </title>
              <meta name="description" content="Vuoi trovare qualcuno che si occupi di fornitura e posa di elementi industriali? Rivolgiti ad Aprire Srl a Olgiate Calco, in provincia di Lecco. " />
        </Helmet>        
        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Soluzioni per l’industria: sicurezza per le aziende </h1>
        <p>Serramenti, infissi, porte, portoni, inferriate e altri elementi di architettura per interni ed esterni di uno spazio riguardano non solo privati, ma anche aziende e stabilimenti. Offriamo la nostra esperienza ventennale al servizio delle aziende, a cui proponiamo soluzioni tecnico-commerciali dall’elevata qualita’ costruttiva e tecnologicamente innovative, oltre ad avere tutte le certificazioni necessarie. </p>
        <h2>Soluzioni per industria, porte tecniche, compartimentazione tagliafuoco</h2>
        <p>La nostra ricerca di prodotti per “industria”, selezionata dal nostro team con esperienza ultra ventennale, presenta soluzioni tecnico-commerciali in grado di coniugare qualità costruttiva e tecnologie innovative; rispettando tutte le certificazioni di legge.</p>
        <h3>Ci occupiamo di:</h3>
        <p>•	Portoni industriali: scorrevoli, a libro, a battente manuali e motorizzati</p>
        <p>•	Compartimentazione tagliafuoco: porte a battente, portoni scorrevoli</p>
        <p>•	Uscite di Sicurezza certificate SAC</p>
        <p>•	Porte rapide</p>
        <p>•	Baie di carico</p>
        <p>•	Porte per ambienti speciali</p>
        <p>•	Pareti mobili e uffici completi</p>
        
        </div></div></div>

        <Industria />
        <Showroom bg={'#f0f0f0'} />
        
    
      </Layout>
    )
  }
}



export default IndexIndustria
