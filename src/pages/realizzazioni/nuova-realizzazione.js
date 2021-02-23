import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import NuovaRealizzazione from '../../components/nuovarealizzazione'
import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexNuovaRealizzazione extends Component {



  render() {

    const bread = <ul className="uk-breadcrumb">
      <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
      <li><AniLink cover direction="bottom" to="/realizzazioni" bg="#f0f0f0">REALIZZAZIONI</AniLink></li>
      <li><span>NUOVA REALIZZAZIONE</span></li>
    </ul>

    return (
      <Layout>
        <SEO title="Nuova Realizzazione" description="Aprire srl - Nuova Realizzazione" />

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
          <title>Progettazioni e realizzazioni Aprire Srl – Aprire Srl </title>
          <meta name="description" content="Vuoi informazioni su progettazioni e realizzazioni Aprire Srl? Chiamaci e prendi un appuntamento con il nostro team presso la nostra sede di Calco. " />
      </Helmet>

      <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
      <h1>Progettazioni e realizzazioni Aprire Srl </h1>
      <p>Costruire da zero un’abitazione o un altro edificio rappresenta per noi l’ennesima sfida che portiamo avanti con competenza insieme agli studi di progettazione e ai privati e passione come tutte le altre <b>progettazioni e realizzazioni curate da Aprire Srl</b>. E proprio come ogni prodotto e servizio che offriamo ci piace curare il completamento dell’abitazione dalla a alla z, nei minimi particolari in grado di fare la differenza.</p>
      <h2>Nuova realizzazione: qualche esempio </h2>
      <p>Attuale e rigorosa nel design e nelle proporzioni, la villa inserita in un piccolo centro storico, brilla grazie ai tratti sobri ed eleganti sia negli interni che negli esterni.</p>
      <p>In linea con tutte le progettazioni e realizzazioni, pensate e sviluppate per dare precise risposte ai proprietari, questa casa che vi presentiamo si avvale di scelte all’altezza delle regole progettuali più evolute. Un esempio? Le tapparelle svolgono funzione di oscuramento e di sicurezza al contempo, senza così dover appesantire la facciata con altri elementi per la protezione.</p>
      <p>Troveremo per voi e con voi la giusta soluzione e le migliori categorie di prodotti per procedere con <b>progettazioni e realizzazioni su misura</b>. Vi aiuteremo a scegliere di volta in volta gli elementi architettonici capaci di seguire ed interpretare i vostri desideri per garantirvi la massima valorizzazione del risultato d’insieme. </p>
      </div></div></div>

        <NuovaRealizzazione />
        <Showroom bg={'#f0f0f0'} />


      </Layout>
    )
  }
}



export default IndexNuovaRealizzazione