import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Showroom from '../../components/showroom'


import {Helmet} from "react-helmet";
class IndexSopralluogo extends Component {



    render() {

        const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/servizi" bg="#f0f0f0">SERVIZI</AniLink></li>
            <li><span>ASSISTENZA</span></li>
        </ul>

        return (
            <Layout>
                <SEO title="Assistenza" description="Aprire srl - Assistenza" />

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
                    <title>Assistenza sostituzione infissi – Aprire Srl </title>
                    <meta name="description" content="Stai cercando un’impresa che possa darti assistenza anche dopo la sostituzione degli infissi oltre ad altri servizi e prodotti in campo edilizio? Contatta Aprire Srl. " />
                </Helmet>

                <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
                <h1>Assistenza post vendita</h1>
                <p>Amiamo seguire i lavori dall’inizio alla fine e anche dopo, fornendo un servizio specifico di <b>assistenza dopo la sostituzione degli infissi</b> e non solo, a cui puoi rivolgerti in ogni momento. Il nostro team è lieto di aiutarti a chiarire i tuoi dubbi e a capire come intervenire in caso di eventuali problemi. </p>
                <h2>Assistenza dopo la sostituzione degli infissi: servizio ad hoc</h2>
                <p>Noi di Aprire Srl abbiamo previsto un servizio mirato all’ <b>assistenza post vendita dopo la sostituzione degli infissi</b> e per altri lavori che eseguiamo nel processo costruttivo di un’abitazione. Puoi contattarci al numero 039509538 negli orari di ufficio dal lunedì al venerdì. </p>
                <p>Il nostro incaricato virtuale per l’<b>assistenza dopo la sostituzione degli infissi</b> è disponibile anche tramite i social media per darti un supporto completo nell’individuare il problema e le tue esigenze specifiche. Seguici sui social o contattaci. Noi ci siamo e siamo pronti ad aiutarti e a venire incontro alle tue esigenze. </p>
                </div></div></div>
                <Showroom bg={'#fff'} />


            </Layout>
        )
    }
}



export default IndexSopralluogo
