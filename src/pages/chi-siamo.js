import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from '../components/hero'

import ChiSiamo from '../components/chisiamo'
import Showroom from '../components/showroom'


import {Helmet} from "react-helmet";
class IndexElementi extends Component {



    render() {

        const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><span>CHI SIAMO</span></li>
        </ul>

        return (
            <Layout>
                <SEO title="Serramenti e infissi a Calco – Aprire Srl" description="Cerchi serramenti e infissi a Calco e in provincia di Lecco? Rivolgiti ad Aprire Srl, specializzato nella rivendita di questi elementi di architettura da 25 anni." />
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
                    <title>Serramenti e infissi a Calco – Aprire Srl </title>
                    <meta name="description" content="Cerchi serramenti e infissi a Calco e in provincia di Lecco? Rivolgiti ad Aprire Srl, specializzato nella rivendita di questi elementi di architettura da 25 anni. " />
                </Helmet>

                <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
                <h1>Serramenti e infissi a Calco: i dettagli che fanno la differenza </h1>
               <p>Ti capita mai di osservare una casa mai vista prima e pensare che quella sia la dimora dei tuoi sogni? Sei rimasto affascinato da particolari come finestre, verande, pergole, cancelli e inferriate che davano valore aggiunto al contesto, in qualunque luogo si trovasse? Allora facciamo al caso tuo. Siamo rivenditori di <b>serramenti porte ed elementi di architettura a Calco</b> da venticinque anni, oltre a occuparci di nuove realizzazioni e ristrutturazioni. </p>
               <h2>Chi siamo: passione e qualità </h2>
               <p>Certe case hanno un fascino, una storia, un’anima. Non importa che siano per forza lussuose. A volte anche quelle circondate da colate di cemento in quartieri di periferia catturano la nostra attenzione e ci conquistano. È la loro identità e la loro capacità di distinguersi che le fa emergere rispetto alle altre, anche attraverso elementi come serramenti e infissi. Ma ti sei mai chiesto perché certe abitazioni, a prima vista, attirano la nostra attenzione mentre altre la respingono?</p>
               <p>Tendiamo a considerare elementi di architettura fondamentali per la nostra vita, quali sono serramenti e infissi che noi rivendiamo, come semplici dettagli, e non ci rendiamo conto che sono i dettagli a fare la differenza.</p>
               <p>Credici, non si tratta di mera deformazione professionale da parte nostra. È una visione filosofica che però trova riscontro in venticinque anni di attività, in una costante esperienza sul campo e in un continuo miglioramento delle competenze e qualifiche da parte di tutto il nostro team. Un lavoro che per noi non ha mai smesso di essere, prima di tutto, una passione. </p>
               </div></div></div>

                <ChiSiamo />
                <Showroom bg={'#f0e89f'} />


            </Layout>
        )
    }
}



export default IndexElementi