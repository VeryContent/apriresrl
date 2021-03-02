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
            <li><span>SOPRALLUOGO</span></li>
        </ul>

        return (
            <Layout>
                <SEO title="Sopralluogo" description="Aprire srl - Sopralluogo" />

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
                    <title>Sopralluogo per sostituzione infissi in una ristrutturazione – Aprire Srl </title>
                    <meta name="description" content="Il sopralluogo per la sostituzione degli infissi in un lavoro di ristrutturazione è una fase essenziale per procedere all’ideazione e alla realizzazione del processo costruttivo. Chiama Aprire Srl.  " />
                </Helmet>

                <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
                <h1>Sopralluogo preliminare per la sostituzione degli infissi</h1>
                <p>Di fronte alla possibilità di un progetto costruttivo o ricostruttivo, nel caso del restyling di uno spazio, una fase necessaria e imprescindibile è il <b>sopralluogo preliminare per verificare lo stato del cantiere</b> . Seguiranno poi altre visite sul posto. Noi di Aprire Srl lavoriamo con passione, precisione e scrupolo, studiando ogni minimo dettaglio. </p>
                <h2>Sopralluogo: soluzioni personalizzate </h2>
                <p>Se la progettazione è fondamentale, il <b>sopralluogo preliminare</b> è essenziale. Grazie ad esso possiamo comprendere le dinamiche “sul campo” che richiedono le proposte più adatte. È proprio grazie ai sopralluoghi e al costante monitoraggio dei cantieri durante il loro sviluppo che possiamo intervenire con tempestività in caso di criticità improvvise.</p>
                <p>La nostra procedura prevede un primo <b>sopralluogo sia in un’ottica di una ristrutturazione</b> sia per realizzazione ex novo in una fase iniziale, seguito da un altro alla posa dei controtelai avvenuta e, qualora fosse richiesto dal tipo di progetto, anche da ulteriori visite in cantiere durante l’esecuzione delle opere per verificare che i nodi muratura-serramento siano impostati correttamente.</p>
                <p>I nostri tecnici hanno maturato un’esperienza decennale nel campo della serramentistica. Già in fase di <b>sopralluogo preliminare durante una ristrutturazione</b> o per far fronte ad altre esigenze costruttive sono in grado di fornire le migliori soluzioni tecniche ed economiche a seconda delle tue esigenze, per poi riportare in azienda tutti i dati che ci consentiranno di formulare la migliore proposta senza avere spiacevoli sorprese finali.</p>
                </div></div></div>

                <Showroom bg={'#fff'} />


            </Layout>
        )
    }
}



export default IndexSopralluogo
