import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Ristrutturazione from '../../components/ristrutturazione'
import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexRistrutturazione extends Component {



  render() {

    const bread = <ul className="uk-breadcrumb">
      <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
      <li><AniLink cover direction="bottom" to="/realizzazioni" bg="#f0f0f0">REALIZZAZIONI</AniLink></li>
      <li><span>RISTRUTTURAZIONE</span></li>
    </ul>

    return (
      <Layout>
        <SEO title="Ristrutturazione" description="Aprire srl - Ristrutturazione" />

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
          <title>Lavori ristrutturazione svolti Aprire srl – Aprire Srl </title>
          <meta name="description" content="Vuoi conoscere i lavori ristrutturazione svolti Aprire Srl? Contatta il nostro team: ti seguiremo in ogni fase del processo costruttivo. " />
      </Helmet>

      <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
      <h1>Lavori ristrutturazione svolti da Aprire srl  </h1>
      <p>È bello ridare nuova vita a manufatti che conservano ancora tutto il fascino e la bellezza della storia. È quello che amiamo fare quando andiamo a completare i <b>lavori di ristrutturazione svolti dai nostri partner, con l’installazione dei serramenti</b>.</p>
      <h2>Ristrutturazione: recupero di vecchi edifici </h2>
      <p>In venticinque anni di attività ci siamo occupati spesso di completare i <b>lavori di ristrutturazione svolti dai nostri partner</b>. Abbiamo riportato alla luce un vecchio cascinale di campagna, abbandonato, ma che ancora era in grado di trasmettere l’antica cultura contadina. Abbiamo affrontato con i clienti e i progettisti i delicati aspetti legati al recupero e alla ristrutturazione di un manufatto che andava rispettato e nello stesso tempo trasformato.</p>
      <p>Nell’ambito dei <b>lavori di ristrutturazione</b> svolti con i nostri partner abbiamo ricoperto il doppio ruolo di attenti collaboratori ed esecutori, mettendo a disposizione tutto il know-how di cui disponiamo per arrivare al risultato desiderato.</p>
      <p>Operiamo direttamente sia nella fornitura ed installazione degli elementi scelti, progettati e realizzati, che assumendo in prima persona la funzione di gestione generale con il controllo di ogni aspetto relativo ai compiti pianificati in sede di programma e progetto. </p>
      </div></div></div>

        <Ristrutturazione />
        <Showroom bg={'#f0f0f0'} />


      </Layout>
    )
  }
}



export default IndexRistrutturazione
