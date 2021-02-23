import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Interior from '../../components/interior'
import Showroom from '../../components/showroom'

import {Helmet} from "react-helmet";
class IndexInterior extends Component {



  render() {

    const bread = <ul className="uk-breadcrumb">
      <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
      <li><AniLink cover direction="bottom" to="/elementi-di-architettura" bg="#f0f0f0">ELEMENTI DI ARCHITETTURA</AniLink></li>
      <li><span>INTERIOR</span></li>
    </ul>

    return (
      <Layout>
        <SEO title="Interior" description="Aprire srl - Interior, la nostra offerta non si limita a
  poche idee. Dal laminato alla porta rasoparete, dall’utilizzo di
  essenze legnose particolari quali l’ulivo, o il legno invecchiato
naturalmente, alle porte a vetro." />
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
              <title>Consulenza arredamento d’interni – Aprire Srl  </title>
              <meta name="description" content="Hai bisogno di una consulenza per il tuo progetto di interior?Contatta Aprire Srl di Calco, i nostri consulenti ti seguiranno passo dopo passo." />
        </Helmet>

        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Consulenza per l’interor: soluzioni abitative  </h1>
        <p>Le porte interne di un’abitazione o di un altro locale non servono solo a delimitare i differenti ambiti dello spazio complessivo. Svolgono anche un’importante funzione estetica e costituiscono dei veri e propri elementi d’arredo capaci di caratterizzare e dare identità al contesto. La progettazione d’interni è un’arte che va studiata e curata nei minimi dettagli, in un perfetto connubio tra tecnica ed estro, senza lasciare nulla al caso. </p>
        <h2>Porte interne in legno, in vetro, scale, soluzioni rasoparete</h2>
        <p>Anche per le porte, così come per gli altri elementi di architettura che proponiamo, la nostra offerta legata alla <b>consulenza nell’arredamento d’interni</b> non si limita a poche idee. Dal laminato alle soluzioni rasoparete non solo per porte, dall’utilizzo di essenze legnose particolari quali l'ulivo, o il legno invecchiato naturalmente, o al vetro, proponiamo un <b>supporto successivo alla progettazione d’interni:</b> porte a battente, scorrevoli, a interno o esterno muro, secondo le tue esigenze, ricercando equilibrio tra estetica e funzionalità. </p>
        <p>Le porte per interno sono un importante elemento d’architettura per le nostre case. Non fungono solo da collegamento tra i diversi ambienti interni di un’abitazione, ma sono una componente fondamentale nella progettazione che noi curiamo in ogni singolo dettaglio: dal tipo di materiale utilizzato allo stile, fino al colore. Tutti aspetti che danno carattere a un’abitazione. L’interior design per noi è sinonimo di realizzazione, anche sulla base di un progetto, di scale in ferro, vetro o legno, completate da ringhiere e parapetti</p>
        
        </div></div></div>

        <Interior />
        <Showroom bg={'#f0f0f0'} />


      </Layout>
    )
  }
}

export default IndexInterior
