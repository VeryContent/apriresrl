import React, { Component } from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from "../../components/layout"

import SEO from "../../components/seo"
import Hero from '../../components/hero'

import Showroom from '../../components/showroom'

import {Helmet} from "react-helmet";    

class IndexProgettazione extends Component {

    

    render() {

        const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><AniLink cover direction="bottom" to="/servizi" bg="#f0f0f0">SERVIZI</AniLink></li>
            <li><span>PROGETTAZIONE</span></li>
        </ul>

        return (
            <Layout>
                <SEO title="Progettazione" description="Aprire srl - Progettazione" />
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
                    <title>Progettazione casa con Architetto – Aprire Srl </title>
                    <meta name="description" content="" />
                </Helmet>

                <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
                <h1>Progettazione casa con architetto esterno: lavori su misura </h1>
                <p>Piccolo o grande che sia, uno spazio abitativo deve rispecchiare alla perfezione le esigenze e la personalità di chi lo vive quotidianamente. Per questo ti offriamo la <b>progettazione di casa con il supporto di un architetto</b>, in modo da proporti soluzioni personalizzate per nuove realizzazioni o ristrutturazioni. </p>
                <h2>Progettazione</h2>
                <p>La fase della <b>progettazione della casa sotto la guida e la supervisione di un architetto esterno</b>, che collabora con noi per i nostri clienti, è quella più importante di tutto il processo costruttivo. Durante tutta questa fase garantiamo l’affiancamento del nostro ufficio tecnico al professionista e al cliente. Potremo così sviluppare e risolvere insieme tutte le esigenze e personalizzazioni del progetto. Forniremo disegni, schede tecniche e prestazionali, oltre alle certificazioni dei prodotti scelti.</p>
                <p>La <b>progettazione della tua casa fatta da un architetto</b> può riguardare spazi interni da ideare o arredare, o ancora rinnovare o risistemare abitazioni, interamente o in alcune parti singole oancora spazi esterni da creare o ristrutturare con coperture come terrazze, giardini e piscine. Ogni elemento d’architettura per interni ed esterni viene curato nei minimi particolari.Per citare Leonardo da Vinci, “i dettagli fanno la perfezione e la perfezione non è un dettaglio”. </p>
                <p>Aggiorniamo costantemente il nostro team impegnato nella <b>progettazione di una casa eseguita da un architetto</b> sotto il profilo della formazione teorica e pratica. Questo ci permette anche di avere conoscenze approfondite sull’evoluzione delle normative in campo acustico, antincendio e sulla sicurezza. Lo studio del nodo falso telaio-muratura o falso telaio-serramento è integrato nel processo di elaborazione del nostro ufficio tecnico.</p>
                </div></div></div>

                <Showroom bg={'#fff'} />


            </Layout>
        )
    }
}



export default IndexProgettazione
