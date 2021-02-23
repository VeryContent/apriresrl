import React, { Component } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Hero from '../components/hero'
import Immagine from '../components/immagine'
import IncipitElementi from '../components/incipitElementi'
import IncipitServizi from '../components/incipitServizi'
import IncipitRealizzazioni from '../components/incipitRealizzazioni'
import Elementi from '../components/elementi'
import Servizi from '../components/servizi'
import Realizzazioni from '../components/realizzazioni'

import Showroom from '../components/showroom'
import {Helmet} from "react-helmet";

class IndexPage extends Component {
  


  render() {
    return (
      <Layout>
        
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
        <title>Sostituzione infissi Lombardia – Aprire Srl</title>
        <meta name="description" content="Sei interessato a una sostituzione infissi Lombardia o a una nuova realizzazione? Affidati agli esperti di Aprire Srl di Olgiate Calco (Lecco). " />
        </Helmet>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        
    
        <Hero titolo="&#34;Volevo ritagliare l’azzurro del cielo&#34;" sottotitolo="&mdash; Carlo Scarpa" classe="uk-section uk-section-medium" tipo="home">
          <p>Elementi dell’architettura, questi sono porte, finestre, ingressi, ringhiere, cancelli. L’alfabeto che compone un edificio. Spesso elementi che “ritagliano l’azzurro del cielo”.</p>
          <p>Con questi elementi lavoriamo tutti i giorni, da 25 anni.</p>
        </Hero>
    
        <Immagine />
        <div className="uk-section" style={{backgroundColor: "#f0f0f0"}}><div className="uk-container">
        <h1>Sostituzione infissi in Lombardia e nuove realizzazioni</h1>
        <p>Da oltre 25 anni siamo specializzati nella realizzazione di progetti personalizzati per nuove realizzazioni e sostituzione infissi in vecchi edifici. La nostra sede è a Calco, in provincia di Lecco. Oltre che sostituire infissi in ogni tipologia di edificio in Lombardia, siamo rivenditori sul territorio di: serramenti, porte interne, scale, verande, cancelli. I nostri servizi comprendono progettazione, sopralluogo, posa in opera eseguita dal nostro personale interno e qualificato e attuata secondo gli standard normativi in vigore, nonché l'assistenza postvendita.</p>
        
        <p>Professionalità, cortesia e capacità di dialogo con i nostri clienti sono i prerequisiti che da un quarto di secolo distinguono la nostra azienda e la confermano come interlocutore privilegiato per quanti, preferiscano appoggiarsi ad un partner affidabile e competente per la sostituzione infissi della propria casa.Ci poniamo come riferimento anche per chi è in cerca di elementi di architettura e non solo, sia nel caso di privati che in quello di studi di architettura. </p>
        <p>L'attenta progettazione e la precisa valutazione delle scelte tecniche ed estetiche idonee assicurano il perfetto controllo dei lavori. Dalla stesura del preventivo, passando per il cantiere vero e proprio, fino alle fasi di posa in opera come nell’installazione di nuovi elementi su edifici esistenti: tutti i passaggi saranno da noi controllati e verificati direttamente, con costanza e precisione, in ogni procedura per garantirne il risultato più idoneo e la massima efficienza nel tempo.</p>
        <p>La nostra filosofia aziendale si basa su valori di correttezza, trasparenza e onestà uniti alla passione per il lavoro eseguito a regola d’arte, insieme alla continua ricerca di finiture e prodotti offerti nel miglior rapporto qualità-prezzo. Nella nostra visione i prodotti di cui siamo rivenditori e che costituiscono un edificio – porte, finestre, ingressi, ringhiere, cancelli – non sono semplici componenti edili, bensì elementi di architettura che “ritagliano l’azzurro del cielo” (Carlo Scarpa). </p>
        
        </div></div>
        
        <IncipitElementi />
        <Elementi bg={'#ffffff'} tp={'#f0f0f0'} />
    
        <IncipitServizi />
    
        <Servizi bg={'#ffffff'} tp={'#f0f0f0'} />
    
        <IncipitRealizzazioni />
    
        <Realizzazioni bg={'#ffffff'} tp={'#969a9d'} />
    
        
    
        <Showroom bg={'#ffffff'} />
    
      </Layout>
    )
  }
}



export default IndexPage
