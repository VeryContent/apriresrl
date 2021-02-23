import React, { Component } from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from '../components/hero'

import Showroom from '../components/showroom'

const lingua = {
    titolo: "Gestione dei Cookie",
    sottotitolo_01: "Cosa sono i cookie e perché sono importanti ai fini dell’esperienza dell’utente?",
    testo_01: "I cookie sono file di testo contenenti piccoli quantitativi di informazioni, che vengono scaricati sul tuo computer o dispositivo mobile quando visiti un sito Web o una applicazione online. Ad ogni successiva visita, i cookie vengono quindi inviati nuovamente a chi li ha originati o ad un altro sito Web che riconosce quel determinato cookie.",
    testo_02: "In generale, i nostri cookie svolgono sino a tre funzioni diverse:",
    sottotitolo_02: "Cookie essenziali",
    testo_03: "Alcuni cookie sono di vitale importanza per il funzionamento del nostro sito. Senza di essi non saresti in grado di navigare al suo interno e utilizzare alcune delle sue funzioni. I cookie essenziali permettono di ricordare, da una pagina all’altra del processo di acquisto, le informazioni da te fornite e le tue scelte.",
    testo_04: "Poiché questi cookie sono essenziali, non li potrai disabilitare sul nostro sito.",
    sottotitolo_03: "Cookie di funzionalità",
    testo_05: "Potremmo utilizzare cookie di funzionalità per ricordare le preferenze da te indicate in visite precedenti e le modifiche che hai apportato per personalizzare il sito secondo i tuoi gusti.",
    testo_06: "Attualmente, non ci avvaliamo di cookie di funzionalità.",
    sottotitolo_04: "Cookie di performance",
    testo_07: "Facciamo uso dei cookie di performance per analizzare il modo in cui i visitatori usano il sito e per monitorare le performance dello stesso. Questo ci consente di offrire un’esperienza di qualità elevata personalizzando la nostra offerta e identificando e risolvendo rapidamente eventuali problematiche che possano insorgere.",
    testo_08: "Per esempio, potremmo usare i cookie di performance per tracciare le sezioni che risultano essere più popolari, per individuare il metodo di collegamento che si riveli più efficace e per stabilire le cause per le quali alcune sezioni ricevono messaggi di errore.",
    testo_09: "Questi cookie non raccolgono informazioni che permettono di identificare un visitatore. Tutti i dati raccolti vengono aggregati e pertanto, sono anonimi e vengono usati solo per migliorare il funzionamento del sito.",
    sottotitolo_05: "Maggiori informazioni",
    testo_10: "sono usati per raccogliere informazioni sulle modalità di utilizzo di questo sito da parte dei visitatori. Noi usiamo le informazioni per riferire sul suo utilizzo e per aiutarci a migliorare il sito stesso. I cookie raccolgono le informazioni in forma anonima, quali il numero di visitatori, la provenienza degli stessi e le pagine da essi visitate.",
    sottotitolo_06: "Come puoi rifiutare o revocare il consenso ai cookie?",
    testo_11: "Puoi rifiutare l'utilizzo dei cookie e in qualsiasi momento puoi revocare un consenso già fornito.",
    testo_12: "Poiché i cookie sono collegati al browser utilizzato, puoi disabilitarli direttamente dal browser, così da rifiutare o revocare il consenso al loro utilizzo.",
    testo_13: "La disabilitazione dei cookie potrebbe impedire il corretto utilizzo di alcune funzioni del sito stesso; in particolare i servizi forniti da terze parti potrebbero non essere utilizzabili.",
    testo_14: "Le istruzioni per la disabilitazione dei cookie, e per l'eventuale eliminazione di cookie già presenti sul dispositivo dell'Utente, si trovano alle seguenti pagine web:",
    chrome: "http://support.google.com/chrome/bin/answer.py?hl=it&answer=95647",
    firefox: "http://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie",
    explorer: "https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies",
    edge: "https://support.microsoft.com/it-it/help/4027947/windows-delete-cookies",
    opera: "http://help.opera.com/Windows/10.00/it/cookies.html",
    safari: "https://support.apple.com/it-it/HT201265",
    torna: "Torna al sito",
    salva: "Salva le modifiche",
    success: "Le modifiche sono state salvate"
}


class IndexCookiePolicy extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            userId: ''
        }
    }

    componentDidMount() {
        const userId = this.props.location.search.substr(6)
        this.setState({
            checked: JSON.parse(localStorage.getItem("apriresrl_analytics")) || false,
            userId
        })
    }

    onChange() {
        this.setState({
            checked: !this.state.checked
        })
    }

    setAnalytics(lin) {
        localStorage.setItem('apriresrl_analytics', this.state.checked)
    }

    render() {

        const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><span>COOKIE POLICY</span></li>
        </ul>

        return (
            <Layout>
                
                <SEO title="Cookie Policy" description="Aprire srl - Cookie Policy" />

                <div data-uk-height-viewport="expand: true">
                    <Hero titolo="Cookie Policy" sottotitolo="" classe="uk-section uk-section-medium" bread={bread}>
                        <div className="uk-margin">
                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_01}</p>
                            <p className="uk-text-small">{lingua.testo_01}</p>
                            <p className="uk-text-small">{lingua.testo_02}</p>
                        </div>

                        <table className="uk-table uk-table-divider uk-margin">
                            <tbody>
                                <tr>
                                    <td className="uk-flex uk-flex-top">

                                        <label className="uk-switch" htmlFor="default-0">
                                            <input type="checkbox" id="default-0" checked={false} onChange={this.onChange.bind(this)} disabled={true} />
                                            <div className="uk-switch-slider"></div>
                                        </label>

                                    </td>
                                    <td>
                                        <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_02}</p>
                                        <p className="uk-text-small">{lingua.testo_03}</p>
                                        <p className="uk-text-small">{lingua.testo_04}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="uk-flex uk-flex-top">
                                        <label className="uk-switch" htmlFor="default-1">
                                            <input type="checkbox" id="default-1" checked={false} onChange={this.onChange.bind(this)} disabled={true} />
                                            <div className="uk-switch-slider"></div>
                                        </label>
                                    </td>
                                    <td>
                                        <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_03}</p>
                                        <p className="uk-text-small">{lingua.testo_05}</p>
                                        <p className="uk-text-small">{lingua.testo_06}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="uk-flex uk-flex-top">
                                        <label className="uk-switch" htmlFor="default-2">
                                            <input type="checkbox" id="default-2" checked={this.state.checked} onChange={this.onChange.bind(this)} disabled={false} />
                                            <div className="uk-switch-slider"></div>
                                        </label>

                                    </td>
                                    <td>
                                        <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_04}</p>
                                        <p className="uk-text-small">{lingua.testo_07}</p>
                                        <p className="uk-text-small">{lingua.testo_08}</p>
                                        <p className="uk-text-small">{lingua.testo_09}</p>
                                        <ul data-uk-accordion>
                                            <li>
                                                <a className="uk-accordion-title uk-text-small uk-text-uppercase" href="#">{lingua.sottotitolo_05}</a>
                                                <div className="uk-accordion-content">
                                                    <table className="uk-table uk-table-small">
                                                        <tbody>
                                                            <tr>
                                                                <td classn="uk-table-shrink">
                                                                    <p className="uk-text-small uk-text-bold">_gat _ga _gid (Google Analytics)</p>
                                                                </td>
                                                                <td>
                                                                    <p className="uk-text-small">_gat, _ga, _gid {lingua.testo_10}</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="uk-margin">
                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_06}</p>
                            <p className="uk-text-small">{lingua.testo_11} {lingua.testo_12} {lingua.testo_13}</p>
                            <p className="uk-text-small">{lingua.testo_14}</p>
                            <ul>
                                <li className="uk-list uk-text-small">Google Chrome <a href={lingua.chrome} target="_blank">{lingua.chrome}</a></li>
                                <li className="uk-list uk-text-small">Mozilla Firefox <a href={lingua.firefox} target="_blank">{lingua.firefox}</a></li>
                                <li className="uk-list uk-text-small">Microsoft Internet Explorer <a href={lingua.explorer} target="_blank">{lingua.explorer}</a></li>
                                <li className="uk-list uk-text-small">Microsoft Edge <a href={lingua.edge} target="_blank">{lingua.edge}</a></li>
                                <li className="uk-list uk-text-small">Opera <a href={lingua.opera} target="_blank">{lingua.opera}</a></li>
                                <li className="uk-list uk-text-small">Apple Safari <a href={lingua.safari} target="_blank">{lingua.safari}</a></li>
                            </ul>
                        </div>
                    </Hero>
                </div>

                <Showroom bg={'#fff'} />


            </Layout>
        )
    }
}



export default IndexCookiePolicy