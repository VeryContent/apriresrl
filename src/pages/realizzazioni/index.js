import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Realizzazioni from '../../components/realizzazioni'
import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexRealizzazioni extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><span>REALIZZAZIONI</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="Realizzazioni" description="Aprire srl - Le nostre realizzazioni" />
        
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
          <title>Lavori svolti Aprire Srl – Aprire Srl</title>
          <meta name="description" content="Vuoi conoscere i lavori svolti Aprire Srl, dalle nuove realizzazioni alle ristrutturazioni? Contattaci e fissa un appuntamento presso la nostra sede di Calco. " />
      </Helmet>

      <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
      <h1>Lavori svolti Aprire Srl: nuove realizzazioni e restyling </h1>
      <p>I <b>lavori svolti da Aprire Srl</b> sono numerosi e spaziano da nuove realizzazioni a ristrutturazioni di contesti abitativi e non già esistenti. Siamo al tuo servizio per poterti consigliare e guidare nel modo migliore studiando con te le soluzioni più adatte alle tue esigenze e a quelle dei tuoi cari.</p>
      </div></div></div>

        <Realizzazioni bg={'#969a9d'} tp={'#ffffff'} />
        <Showroom bg={'#969a9d'} />

        
        
    
        
      </Layout>
    )
  }
}



export default IndexRealizzazioni