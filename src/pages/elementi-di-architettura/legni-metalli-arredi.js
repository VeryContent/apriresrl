import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Arredi from '../../components/arredi'
import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexArredi extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/elementi-di-architettura" bg="#f0f0f0">ELEMENTI DI ARCHITETTURA</AniLink></li>
            <li><span>LEGNI, METALLI, ARREDI</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="Legni, metalli, arredi" description="Aprire srl - Arredamenti Ethnicraft, pavimenti in legno, realizzazioni customizzate di complementi in ferro e legno. Maniglie Formani e Pullcast." />
        
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
              <title>Rivenditore arredamenti Ethnicraft Formani e Pullcast – Aprire Srl  </title>
              <meta name="description" content="Vuoi abbellire la tua casa con mobili di qualità? Aprire Srl di Calco (Lecco) è rivenditore arredamenti Ethnicraft Formani e Pullcast. Contattaci.  " />
        </Helmet>        
        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Rivenditore arredamenti Ethnicraft, Formani e Pullcast </h1>
        <p>Scegliamo il meglio, anche quando si tratta di rivendere prodotti di alta qualità. per questo motivo abbiamo scelto gli <b>arredamenti ethnicraft</b>, le maniglie <b>Formani e Pullcast</b>, partner con cui condividiamo gli stessi valori di trasparenza, autenticità, qualità. Ti servono mobili o complementi d’arredo particolari, in stile etno-chic? Vuoi maniglie e pomelli che diano un tocco di lusso a una porta? Vieni da noi, sarai nel posto giusto.</p>
        <h2>Arredamenti Ethnicraft, pavimenti in legno, realizzazioni customizzate di complementi in ferro e legno. Maniglie Formani e Pullcast.</h2>
        <p>Aprire Srl non è per i compromessi, ma ama un linguaggio rigoroso, rispettoso dei materiali e allo stesso tempo caldo ed emozionante anche in qualità di <b>rivenditore di arredamenti</b>: mobili e complementi di arredo con un carattere deciso.</p>
        <p>Gli arredi Ethnicraft sono semplici, funzionali e di qualità grazie al calore e al pregio del legno massello, con attenzione e cura per l’ambiente. Offriamo anche un’ampia gamma di maniglie per porte e maniglioni, maniglie per finestre, pomoli e maniglie per mobili firmate da Formani e Pullcast, affermati brand del lusso internazionale nel campo dell’interior design. </p>
        <p>In quanto <b>rivenditore di arredamenti Ethnicraft Formani e Pullcast</b> abbiamo selezionato aziende dedite a lavorare con particolare cura materie prime quali legno, metallo e vetro. Dal calore del legno come il teak, ottenuto dal recupero di edifici dismessi o da piantagioni FSC, finiti a olio, fino alle forme semplici e lineari dei mobili in vetro e alluminio. Scegli quello che più si adatta alla tua casa.</p>
        </div></div></div>

        <Arredi />
        <Showroom bg={'#f0f0f0'} />
        
    
      </Layout>
    )
  }
}



export default IndexArredi