import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Sicurezza from '../../components/sicurezza'
import Showroom from '../../components/showroom'

import {Helmet} from "react-helmet";
class IndexSicurezza extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/elementi-di-architettura" bg="#f0f0f0">ELEMENTI DI ARCHITETTURA</AniLink></li>
            <li><span>SICUREZZA</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="Sicurezza" description="Aprire srl - Gli strumenti per la sicurezza domestica devono essere affidabili, resistenti ma al tempo stesso integrarsi con lo stile e il design della casa." />
        
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
              <title>Installazione porte e persiane di sicurezza – Aprire Srl </title>
              <meta name="description" content="Cerchi un’azienda specializzata in installazione porte e persiane di sicurezza? Il team esperto e qualificato di Aprire Srl fa al caso tuo. Contattalo. " />
        </Helmet>

        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Installazione porte e persiane di sicurezza </h1>
        <p>Porte e persiane non sono solo semplici elementi di architettura di interni ed esterni, ma, nel caso di modelli specifici e innovativi, possono costituire veri e propri sistemi di sicurezza. Noi di Aprire Srl ci occupiamo anche dell’<b>installazione di porte e persiane di sicurezza</b> per il benessere e la tutela tuoi e quelli delle persone che ami. Insieme a noi puoi progettare su misura l’ingresso dei tuoi sogni, a prova di effrazione.  </p>
        <h2>Ingressi, inferriate e tapparelle di sicurezza per la protezione dei tuoi cari</h2>
        <p>Gli strumenti per la sicurezza domestica devono essere affidabili e resistenti, ma al tempo stesso devono integrarsi con lo stile e il design della casa. In quanto realtà specializzata da oltre due decadi nell’installazione di porte e persiane, per privati e per contesti industriali, possiamo offrire un’ampia gamma di porte e persiane blindate, ingressi e tapparelle di sicurezza o inferriate.</p>
        <p>Ogni soluzione che proponiamo è certificata all’effrazione nelle varie classi, a seconda dell’esigenza di protezione. Per difendersi dalle intrusioni, la casa non deve diventare un fortino, una specie di prigione che amplifica le paure e devasta l’habitat domestico e rovina l’estetica. Noi di Aprire Srl ti permettiamo di proteggere te e i tuoi cari con elementi di architettura solidi ed efficaci, che vanno a inserirsi perfettamente nel resto del contesto abitativo. </p>
        <h2>Progetta il tuo ingresso con noi </h2>
        <p>La nostra offerta legata all’<b>installazione di porte e persiane di sicurezza</b> comprende anche una soluzione innovativa come il configuratore di ingressi. L’offerta comprende più di 400 modelli personalizzabili a proprio piacimento: classici, moderni, stravaganti, semplici. Come puoi fare? È semplice. Carica una foto della tua facciata nel configuratore e modifica i colori, le forme e accessori per scegliere la giusta porta per te. Per fare la tua configurazione personalizzata clicca su questo <a href="https://doordesigner.inotherm.it/konfigurator/?lang=it">link</a>. </p>
        
        </div></div></div>

        <Sicurezza />
        <Showroom bg={'#f0f0f0'} />
        
    
      </Layout>
    )
  }
}



export default IndexSicurezza
