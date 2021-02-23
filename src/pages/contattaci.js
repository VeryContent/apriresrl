import React, { Component } from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from '../components/hero'

import Form from '../components/form'
import Contattaci from '../components/contattaci'
import Showroom from '../components/showroom'

import {Helmet} from "react-helmet";

class IndexContattaci extends Component {


    render() {

        const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><span>CONTATTACI</span></li>
        </ul>

        return (
            <Layout>
                <SEO title="Contattaci" description="Aprire srl - contattaci" />
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
                    <title>Come contattare Aprire – Aprire Srl </title>
                    <meta name="description" content="Vuoi sapere come contattare Aprire Srl? Compila il form sottostante. Rivolgiti ai recapiti indicati di seguito. " />
                    </Helmet>
                    <div className="uk-container-large" style={{marginLeft: 'auto',marginRight: 'auto'}}><div className="uk-padding-large uk-width-1-2@l uk-flex uk-flex-middle uk-first-column"><div>
                <h1>Come contattare Aprire: sede, recapiti, orari  </h1>
               <p>Sei interessata/o a fissare con noi un incontro conoscitivo? Ti serve un sopralluogo per avere un preventivo dettagliato e affidabile? Se ti chiedi <b>come contattare Aprire Srl</b>, di seguito trovi tutti i riferimenti. Non esitare a chiamarci o a scriverci per qualsiasi informazione. </p>
               <h2>Home/Contattaci </h2>
               <Form />
               </div></div></div>
                <Contattaci />
                <Showroom bg={'#fdddd1'} />


            </Layout>
        )
    }
}

export default IndexContattaci