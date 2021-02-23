import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Outdoor from '../../components/outdoor'
import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexOutdoor extends Component {
  


  render() {

    const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/elementi-di-architettura" bg="#f0f0f0">ELEMENTI DI ARCHITETTURA</AniLink></li>
            <li><span>OUTDOOR</span></li>
        </ul>

    return (
      <Layout>
        <SEO title="Outdoor" description="Aprire srl - Coperture, tende, pergole e verande per godersi gli esterni di casa tutto l’anno." />
        
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
              <title>Montaggio tende pergole verande – Aprire Srl   </title>
              <meta name="description" content="Cerchi una realtà specializzata nel montaggio di tende pergole verande? Contatta Aprire Srl. Visita la sua sede a Olgiate Calco. " />
        </Helmet>        
        <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
        <h1>Montaggio tende, pergole, verande: l’outdoor di classe </h1>
        <p>Tra i vari servizi che forniamo alla clientela c’è anche la fornitura e il <b>montaggio di tende, pergole, verande</b> che consente di valorizzare spazi esterni delle abitazioni e usufruirne nella maniera migliore in qualsiasi stagione.  </p>
        <h2>Coperture, tende, pergole e verande: comfort all’aperto tutto l’anno</h2>
        <p>L’uomo e la natura sono due dimensioni che possono coesistere solo rispettandosi l’un l’altro in armonia. Da sempre seguiamo questo approccio armonico anche nel <b>montaggio di tende, pergole, verande</b> e nella realizzazione degli ambienti esterni che proponiamo. Per vivere maggiormente spazi esterni come terrazzi e balconi, sia d’inverno che d’estate.</p>
        <p>Prestiamo grande attenzione, a monte, alla funzione a cui la copertura deve assolvere: quest’ultima potrebbe essere di ombreggiamento o schermatura solare come nel caso di tende e pergolati, di protezione da tutti gli altri agenti atmosferici (ancora tende, e poi tettoie e pensiline) o aumento dello spazio vivibile dell’appartamento come le verande. Che si tratti di una veranda ad alto isolamento termico, di un sistema a tetto vetrato, una tenda da sole o una pergola bioclimatica a lamelle orientabili, nella fornitura e <b>montaggio di tende, pergole e verande</b> seguiamo sempre la stessa filosofia in grado di coniugare estetica e funzionalità sempre nel rispetto del contesto architettonico e, naturalmente, dell’ambiente.</p>
        </div></div></div>
        <Outdoor />
        <Showroom bg={'#f0f0f0'} />
        
    
      </Layout>
    )
  }
}



export default IndexOutdoor