import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Facciate from '../../components/facciate'
import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexFacciate extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/elementi-di-architettura" bg="#f0f0f0">ELEMENTI DI ARCHITETTURA</AniLink></li>
            <li><span>FACCIATE</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="Facciate" description="Aprire srl - Realizzazione di facciate con materiali tradizionali o innovativi e tecnologici." />
        
    
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
              <title>Realizzazione facciate – Aprire Srl  </title>
              <meta name="description" content="Hai bisogno di qualcuno che si occupi della realizzazione facciate di abitazioni e altro? Contatta Aprire Srl a Olgiate Calco, a Lecco. " />
        </Helmet>

        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Realizzazione facciate: lavori a regola d’arte </h1>
        <p>Occorre costruire una nuova facciata oppure c’è da ristrutturare quella vecchia, mantenendone intatte alcune caratteristiche? La <b>realizzazione delle facciate</b> è uno dei compiti che portiamo avanti da anni valutando sempre tutte le caratteristiche di un contesto abitativo per offrire al cliente la soluzione migliore dal punto di vista dell’estetica, della funzionalità, della sicurezza.</p>
        <h2>Realizzazione di facciate con materiali tradizionali, innovativi e hi tech</h2>
        <p>Dalle nuove costruzioni alle ristrutturazioni di quelle vecchie, ci occupiamo della <b>realizzazione di facciate</b>. Non si tratta di una mera questione di estetica. La facciata è il primo elemento che racconta l’edificio e ne denota lo “stato di salute”. L’involucro esterno di un’abitazione è decisivo per la durata di un edificio, proteggendolo dai fattori meteorologici e climatici. Una facciata riduce il consumo energetico perché funge da coibentazione e contribuisce a creare un clima interno piacevole, garantisce una migliore protezione antincendio e assicura un’insonorizzazione adeguata in grado di offrire un isolamento ottimale.</p>
        <p>Abbiamo selezionato aziende che offrono svariate soluzioni per la <b>realizzazione di facciate</b> in cui siamo specializzati, da quella ventilata a quella vetrata, passando per la classica facciata continua. Le caratteristiche delle facciate che proponiamo, sono leggerezza, durabilità, facilità di posa e grande libertà compositiva, perciò adatte a molteplici destinazioni d’uso, sia per nuovi edifici che per la riqualificazione delle murature perimetrali di edifici esistenti.</p>
        
        </div></div></div>

        <Facciate />
        <Showroom bg={'#f0f0f0'} />
        
    
      </Layout>
    )
  }
}



export default IndexFacciate