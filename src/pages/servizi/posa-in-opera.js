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
            <li><span>POSA IN OPERA</span></li>
        </ul>

        return (
            <Layout>
                <SEO title="Posa in opera" description="Aprire srl - Posa in opera" />

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
                    <title>Posa in opera – Aprire Srl </title>
                    <meta name="description" content="Stai cercando un’impresa specializzata in posa in opera di interni ed esterni ed elementi di architettura? Contatta Aprire Srl. " />
                </Helmet>

                <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
                <h1>Posa in opera: sicurezza e qualità  </h1>
                <p>Quando ci viene affidato un lavoro di sostituzione o installazione a nuovo di serramenti e complementi, facciamo in modo che la <b>posa in opera</b> dei materiali di prima scelta avvenga seguendo le normative vigenti in materia e sia seguita passo dopo passo dal nostro personale altamente qualificato e referenziato. </p>
                <h2>Posa in opera: rispetto delle normative vigenti</h2>
                <p>Il nostro team, specializzato nella <b>posa in opera</b> eseguita direttamente dai componenti del nostro staff e attuata secondo gli standard normativi in vigore, è sottoposto ad aggiornamenti costanti corsi di formazione periodici per lavori in quota, primo soccorso, antincendio, PLE (conduzione di piattaforme mobili elevabili), PES-PAV (idoneità ai lavori elettrici). Solo con un’accurata preparazione, sempre al passo coi tempi e con le innovazioni, è possibile affrontare al meglio e in sicurezza situazioni spesso complicate.Collaboriamo con il marchio Posa Qualità serramenti, per garantire una posa in opera di alto livello.</p>
                <p>La <b>progettazione della tua casa fatta da un architetto</b> può riguardare spazi interni da ideare o arredare, o ancora rinnovare o risistemare abitazioni, interamente o in alcune parti singole oancora spazi esterni da creare o ristrutturare con coperture come terrazze, giardini e piscine. Ogni elemento d’architettura per interni ed esterni viene curato nei minimi particolari.Per citare Leonardo da Vinci, “i dettagli fanno la perfezione e la perfezione non è un dettaglio”. </p>
                <p>Per la <b>posa in opera</b> di elementi d’architettura nell’ambito di realizzazioni e ristrutturazioni edili disponiamo di idonei macchinari per la movimentazione dei materiali e utilizziamo prodotti di ultima generazione per la posa in opera. Offriamo anche servizi di post-vendita e assistenza. </p>
                </div></div></div>
                <Showroom bg={'#fff'} />


            </Layout>
        )
    }
}



export default IndexSopralluogo