import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Oscuranti from '../../components/oscuranti'
import Showroom from '../../components/showroom'

import {Helmet} from "react-helmet";
class IndexOscuranti extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/elementi-di-architettura" bg="#f0f0f0">ELEMENTI DI ARCHITETTURA</AniLink></li>
            <li><span>OSCURANTI</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="Sistemi Oscuranti" description="Aprire srl - Oscuranti. Frangisole, tende o persiane, consideriamo ogni sistema oscurante per la gestione della luce all’interno di ogni casa. Con un occhio sempre rivolto alle soluzioni più innovative e tecnologiche che la moderna Domotica è in grado di offrire." />
        
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
              <title>Installazione sistemi oscuranti – Aprire Srl  </title>
              <meta name="description" content="Vuoi qualcuno che si occupi di installazione sistemi oscuranti nella tua abitazione? Rivolgiti ad Aprire Srl di Calco. " />
        </Helmet>

        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Installazione sistemi oscuranti: gestire la luce in interni ed esterni</h1>
        <p>Tapparelle, scuri interni ed esterni, persiane, veneziane. Sono quattro tipologie da considerare per <b>l’installazione di sistemi oscuranti</b> per finestre, qualcosa di più di meri accessori. Si tratta di elementi che aiutano a ripararsi ulteriormente dai raggi solari, favoriscono la regolazione della luce e aiutano a ottenere isolamento termoacustico, proteggendo ulteriormente dagli agenti atmosferici. </p>
        <h2>Sistemi oscuranti interni ed esterni per la gestione della luce</h2>
        <p>Luce e ombra sono coinquilini silenziosi delle nostre dimore. Se ben sfruttati, con le giuste soluzioni, diventano determinanti nell’arredare le abitazioni. Per questo <b>l’installazione di sistemi oscuranti</b>, altro tipo di prodotti che offriamo accanto a infissi, serramenti e vari elementi di architettura, richiede competenza ed esperienza, oltre a offerte su misura in base alle esigenze della singola unità abitativa. Le nostre proposte di frangisole, tende o persiane sono tutte personalizzabili e ben si sposano con qualsiasi tipo di ambiente o di contesto architettonico, anche in condizioni di uso intensivo o in ambienti difficili caratterizzati da freddo o caldo eccessivo e rispetto ad altre caratteristiche di cui tenere conto. </p>
        <p>Come società specializzata nell’<b>installazione di sistemi oscuranti</b>, consideriamo ogni sistema oscurante stesso in ogni suo aspetto per la gestione della luce all’interno di ogni casa, affinché possa garantire affidabilità e durata nel tempo. Abbiamo sempre un occhio rivolto alle soluzioni più innovative e tecnologiche che la moderna domotica è in grado di offrire, tra cui l’utilizzo di sensori esterni, anche da remoto, ovvero dispositivi che permettono ormai di controllare in maniera automatica i movimenti dei sistemi oscuranti più evoluti.</p>
        
        </div></div></div>

        <Oscuranti />
        <Showroom bg={'#f0f0f0'} />
        
    
      </Layout>
    )
  }
}



export default IndexOscuranti