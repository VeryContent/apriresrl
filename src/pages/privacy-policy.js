import React, { Component } from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from '../components/hero'

import Showroom from '../components/showroom'

const lingua = {
    titolo: "Privacy Policy",
    sottotitolo_01: "Informativa sintetica",
    testo_01: "non pubblica banner pubblicitari, non utilizza dati degli utenti a fini pubblicitari o comunque per profilare gli utenti;",
    testo_02: "minimizza il più possibile la raccolta e l’uso dei dati personali degli utenti;",
    testo_03: "utilizza per specifiche funzionalità del sito servizi di terze parti, che potrebbero raccogliere dati degli utenti in forma anonima;",
    testo_04: "il consenso all’utilizzo dei dati si conferisce tramite il banner dedicato, e in alcuni casi tramite i moduli di contatto o registrazione account, ed è revocabile in qualsiasi momento.",
    testo_05: "Di seguito vi forniamo informazioni più dettagliate sul trattamento dei vostri dati personali.",
    sottotitolo_02: "Informativa dettagliata",
    testo_06: "In ottemperanza degli obblighi derivanti dalla normativa europea (Regolamento Generale per la protezione dei dati personali n. 2016/679, entrata in vigore il 25 maggio 2018) in materia di tutela dei dati personali,",
    testo_07: "rispetta e tutela la riservatezza dei visitatori e degli utenti, ponendo in essere ogni sforzo possibile e proporzionato per non ledere i rispettivi diritti.",
    sottotitolo_03: "Su quali basi trattiamo i dati",
    testo_08: "tratta i dati prevalentemente in base al consenso degli utenti, avviene tramite il banner posto sulla pagina, quale comportamento concludente e costituente consenso implicito, col quale i visitatori/utenti acconsentono al trattamento dei loro dati personali in relazione alle modalità e alle finalità di seguito descritte, compreso l'eventuale diffusione a terzi se necessaria per l'erogazione di un servizio. Tramite i moduli di comunicazione o di richiesta di servizi vengono raccolti ulteriori consensi relativi alla finalità specifica del servizio.",
    testo_09: "Il conferimento dei dati e quindi il consenso alla raccolta e al trattamento dei dati è facoltativo, l'Utente può negare il consenso, e può revocare in qualsiasi momento un consenso già fornito, tramite le impostazioni del browser per i cookie, nella pagina 'Cookie Policy' o tramite il modulo dei contatti. Tuttavia negare il consenso può comportare l'impossibilità di utilizzare alcuni servizi.",
    sottotitolo_04: "Come utilizziamo i dati raccolti",
    testo_10: "I dati raccolti sono utilizzati anche per le seguenti finalità:",
    testo_11: "Statistica (analisi). Raccogliamo dati in forma esclusivamente aggregata e anonima al fine di verificare il corretto funzionamento del sito, e l’utilizzo da parte degli utenti per renderlo più facile e veloce da consultare. Nessuna di queste informazioni è correlata all’Utente del sito, e non ne consente in alcun modo l'identificazione.",
    testo_12: "Sicurezza. Raccogliamo dati al fine di tutelare la sicurezza del Sito (filtri antispam, firewall, rilevazione virus) e degli Utenti. I dati sono registrati automaticamente e possono eventualmente comprendere anche dati personali che potrebbero essere utilizzati, conformemente alle leggi vigenti in materia, al fine di bloccare tentativi di danneggiamento al sito medesimo o di recare danno ad altri Utenti. Tali dati non sono mai utilizzati per l'identificazione o la profilazione.",
    testo_14: "Attività accessorie. Comunichiamo dati a terze parti (consulenti, legali, spedizionieri) che svolgono funzioni necessarie o strumentali all'operatività del servizio, e per consentire a terze parti di svolgere attività tecniche, logistiche e di altro tipo per nostro conto (es. invio posta, analisi dati ecc…). Tali parti terze hanno accesso solo ai dati personali che sono necessari per svolgere i propri compiti, si impegnano a non utilizzare i dati per altri scopi, e sono tenuti a trattare i dati personali in conformità delle normative vigenti.",
    sottotitolo_05: "Quali dati raccogliamo",
    testo_15: "raccoglie dati in due modi.",
    testo_16: "Dati raccolti automaticamente. Alcuni dati sono raccolti dal provider smtp",
    testo_17: "e da Google Analytics. Ad esempio, dati tecnici come il tipo di browser, l’internet service provider, data e orario della visita, tempo di permanenza sul sito, pagina di provenienza e di uscita. Altri dati vengono raccolti utilizzando i cookie o tecnologie similari. Per ulteriori informazioni fai riferimento alla pagina 'Gestione dei Cookie'. Questi dati sono utilizzati a fini di statistica e non consentono l’identificazione fisica dell’Utente.",
    testo_18: "Dati forniti volontariamente dall’Utente. Il sito può raccogliere altri dati in caso di utilizzo volontario di servizi da parte degli utenti, come comunicazioni (moduli per contatto): ad esempio nome e cognome, indirizzo email ecc. Questi dati sono forniti volontariamente dall'Utente al momento della richiesta del servizio e verranno utilizzati esclusivamente per l'erogazione del servizio richiesto e trattati per il solo tempo necessario alla fornitura del servizio. Gli Utenti esentano",
    testo_19: "da qualsiasi responsabilità in merito ad eventuali violazioni delle leggi. Spetta all'Utente verificare di avere i permessi per l'immissione di dati personali di terzi o di contenuti tutelati dalle norme nazionali ed internazionali.",
    sottotitolo_06: "Dove sono trattati i dati",
    testo_20: "I dati raccolti dal sito sono trattati presso la sede del Titolare del Trattamento, e presso i datacenter di Google Firebase, che è responsabile del trattamento dei dati elaborando i dati per conto del titolare, si trova nello Spazio Economico Europeo e agisce in conformità delle norme europee.",
    sottotitolo_07: "Per quanto tempo sono conservati i dati",
    testo_21: "I dati sono trattati per i tempi necessari agli scopi per i quali sono stati raccolti, e comunque non oltre i tempi prescritti dalle norme di legge. Alla scadenza i dati saranno cancellati o anonimizzati, a meno che non sussistano ulteriori finalità per la conservazione degli stessi.",
    testo_22: "I dati raccolti sono trattati per i seguenti periodi:",
    testo_23: "finalità di statistica ed analisi: i dati sono trattati in forma aggregata e quindi anonima;",
    testo_25: "finalità di registrazione al sito: i dati degli utenti registrati vengono conservati per tutta la durata del servizio.",
    sottotitolo_08: "A chi possono essere trasferiti i dati",
    testo_26: "Nello svolgimento delle nostre attività possiamo dover trasferire alcuni dati a terze parti che svolgono compiti specifici strumentali a quelli del sito, per l’esecuzione di controlli di sicurezza o di ottimizzazione del sito, o per la fornitura di uno specifico servizio richiesto dagli Utenti (es. comunicazioni), o per una legittima richiesta da parte dell’autorità giudiziaria nei soli casi previsti dalla legge.",
    testo_27: "Le terze parti hanno accesso solo ai dati personali che sono necessari per svolgere i propri compiti, non possono utilizzare i dati per altri scopi e sono tenute a trattare i dati personali in conformità a questa Informativa sulla privacy, alle istruzioni fornite dal Titolare, e ai sensi delle normative applicabili in materia di protezione dei dati personali.",
    testo_28: "Inoltre potrebbero venire a conoscenza dei dati degli Utenti altri soggetti terzi che agiscono quali titolari autonomi del trattamento, utilizzando i dati anche per finalità diverse ed ulteriori rispetto a quelle di questo Sito. Altri fornitori di servizi terzi che sono titolari autonomi del trattamento sono: Google Analytics, Google Firebase, Mailjet.",
    testo_29: "I titolari autonomi del trattamento sono vincolati alle norme europee e nazionali in materia di tutela dei dati personali, e ne rispondono personalmente in piena autonomia.",
    sottotitolo_09: "Trasferimento dei dati in paesi extra UE",
    testo_30: "Possiamo dover condividere alcuni dei dati raccolti con servizi localizzati al di fuori dell'area SEE (Spazio Economico Europeo). In particolare a Google Analytics, Google Firebase, Mailjet,.",
    testo_31: "Di seguito, rinvio alle privacy policy dei terzi fornitori di servizi utilizzati:",
    analytics: "https://policies.google.com/privacy?hl=it",
    firebase: "https://firebase.google.com/support/privacy/",
    mailjet: "https://www.mailjet.com/security-privacy/",
    testo_32: "Il trasferimento è autorizzato in base a specifiche decisioni dell'Unione Europea e del Garante per la tutela dei dati personali, in particolare la decisione 1250/2016.",
    testo_33: "Privacy Shield:",
    testo_34: "Pagina informativa del Garante italiano:",
    testo_35: "Qui il sito curato dal Dipartimento del Commercio USA:",
    testo_36: "Per cui non occorre un ulteriore consenso rispetto alla base giuridica utilizzata per la raccolta e il trattamento nel SEE. Le aziende sopra menzionate garantiscono la propria adesione al Privacy Shield.",
    shield: "https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/eu-us-privacy-shield_en",
    garante: "https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/5306161",
    usa: "https://www.privacyshield.gov/welcome",
    sottotitolo_10: "Quali diritti hai in merito ai dati da noi trattati",
    testo_37: "Quale interessato al trattamento Ai sensi del Regolamento europeo 679/2016 (GDPR) e dell'art. 7 del D. Lgs. 30 giugno 2003, n. 196",
    testo_37bis: "puoi esercitare i seguenti diritti:",
    link_01: "https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/1311248",
    testo_38: "opporti in tutto o in parte, per motivi legittimi al trattamento dei dati personali che ti riguardano ai fini di invio di materiale pubblicitario o di vendita diretta o per il compimento di ricerche di mercato o di comunicazione commerciale;",
    testo_39: "richiedere la conferma dell'esistenza di dati personali che ti riguardano (diritto di accesso);",
    testo_40: "conoscerne l'origine;",
    testo_41: "riceverne comunicazione intelligibile;",
    testo_42: "avere informazioni circa la logica, le modalità e le finalità del trattamento;",
    testo_43: "richiederne l'aggiornamento, la rettifica, l'integrazione, la cancellazione, la trasformazione in forma anonima, il blocco dei dati trattati in violazione di legge, ivi compresi quelli non più necessari al perseguimento degli scopi per i quali sono stati raccolti;",
    testo_44: "nei casi di trattamento basato su consenso, ricevere al solo costo dell’eventuale supporto, i tuoi dati forniti al titolare, in forma strutturata e leggibile da un elaboratore di dati e in un formato comunemente usato da un dispositivo elettronico;",
    testo_45: "presentare un reclamo all’Autorità di controllo (Garante Privacy – link alla pagina del Garante",
    link_02: "https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/4535524",
    testo_46: "nonché, più in generale, esercitare tutti i diritti che ti sono riconosciuti dalle vigenti disposizioni di legge.",
    testo_47: "Le richieste vanno rivolte al Titolare del trattamento.",
    sottotitolo_11: "Soggetti del trattamento",
    testo_48: "Titolare del trattamento ai sensi delle leggi vigenti è",
    testo_49: "contattabile tramite il modulo dei contatti, o alla mail",
    sottotitolo_12: "Aggiornamenti",
    testo_50: "La presente Privacy Policy è aggiornata alla data del 25/11/2019",
    torna: "Torna al sito"
}


class IndexPrivacyPolicy extends Component {

    

    render() {

        const bread = <ul className="uk-breadcrumb">
            <li><AniLink cover direction="bottom" to="/" bg="#f0f0f0">HOME</AniLink></li>
            <li><span>PRIVACY POLICY</span></li>
        </ul>

        return (
            <Layout>
                
                <SEO title="Privacy Policy" description="Aprire srl - Privacy Policy" />

                <div data-uk-height-viewport="expand: true">
                <Hero titolo="Privacy Policy" sottotitolo="" classe="uk-section uk-section-medium" bread={bread}>
                <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_01}</p>
                                            <p className="uk-text-small uk-text-bold">Questo sito,</p>
                                            <ul className="uk-list uk-list-bullet">
                                                <li className="uk-text-small">{lingua.testo_01}</li>
                                                <li className="uk-text-small">{lingua.testo_02}</li>
                                                <li className="uk-text-small">{lingua.testo_03}</li>
                                                <li className="uk-text-small">{lingua.testo_04}</li>
                                            </ul>

                                            <p className="uk-text-small">{lingua.testo_05}</p>
                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_02}</p>
                                            <p className="uk-text-small">{lingua.testo_06} il sito {lingua.testo_07}</p>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_03}</p>
                                            <p className="uk-text-small">Questo sito {lingua.testo_08}</p>
                                            <p className="uk-text-small">{lingua.testo_09}</p>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_04}</p>
                                            <p className="uk-text-small">{lingua.testo_10}</p>
                                            <ul className="uk-list uk-list-bullet">
                                                <li className="uk-text-small">{lingua.testo_11}</li>
                                                <li className="uk-text-small">{lingua.testo_12}</li>
                                                <li className="uk-text-small">{lingua.testo_14}</li>
                                            </ul>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_05}</p>
                                            <p className="uk-text-small">Il sito {lingua.testo_15}</p>
                                            <ul className="uk-list uk-list-bullet">
                                                <li className="uk-text-small">{lingua.testo_16} {lingua.testo_17}</li>
                                                <li className="uk-text-small">{lingua.testo_18} questo Sito {lingua.testo_19}</li>
                                            </ul>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_06}</p>
                                            <p className="uk-text-small">{lingua.testo_20}</p>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_07}</p>
                                            <p className="uk-text-small">{lingua.testo_21}</p>
                                            <p className="uk-text-small">{lingua.testo_22}</p>
                                            <ul className="uk-list uk-list-bullet">
                                                <li className="uk-text-small">{lingua.testo_23}</li>
                                                <li className="uk-text-small">{lingua.testo_25}</li>
                                            </ul>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_08}</p>
                                            <p className="uk-text-small">{lingua.testo_26}</p>
                                            <p className="uk-text-small">{lingua.testo_27}</p>
                                            <p className="uk-text-small">{lingua.testo_28}</p>
                                            <p className="uk-text-small">{lingua.testo_29}</p>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_09}</p>
                                            <p className="uk-text-small">{lingua.testo_30}</p>
                                            <p className="uk-text-small">{lingua.testo_31}</p>
                                            <ul>
                                                <li className="uk-list uk-text-small">Google Analytics (Google) <a href={lingua.analytics} target="_blank">{lingua.analytics}</a></li>
                                                <li className="uk-list uk-text-small">Google Firebase <a href={lingua.firebase} target="_blank">{lingua.firebase}</a></li>
                                                <li className="uk-list uk-text-small">Mailjet <a href={lingua.mailjet} target="_blank">{lingua.mailjet}</a></li>

                                            </ul>
                                            <p className="uk-text-small">{lingua.testo_32}</p>
                                            <ul>
                                                <li className="uk-list uk-text-small">{lingua.testo_33} <a href={lingua.shield} target="_blank">{lingua.shield}</a></li>
                                                <li className="uk-list uk-text-small">{lingua.testo_34} <a href={lingua.garante} target="_blank">{lingua.garante}</a></li>
                                                <li className="uk-list uk-text-small">{lingua.testo_35} <a href={lingua.usa} target="_blank">{lingua.usa}</a></li>
                                            </ul>
                                            <p className="uk-text-small">{lingua.testo_36}</p>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_10}</p>
                                            <p className="uk-text-small">{lingua.testo_37} (<a href={lingua.link_01} target="_blank">{lingua.link_01}</a>), {lingua.testo_37bis}</p>
                                            <ul className="uk-list uk-list-bullet">
                                                <li className="uk-text-small">{lingua.testo_38}</li>
                                                <li className="uk-text-small">{lingua.testo_39}</li>
                                                <li className="uk-text-small">{lingua.testo_40}</li>
                                                <li className="uk-text-small">{lingua.testo_41}</li>
                                                <li className="uk-text-small">{lingua.testo_42}</li>
                                                <li className="uk-text-small">{lingua.testo_43}</li>
                                                <li className="uk-text-small">{lingua.testo_44}</li>
                                                <li className="uk-text-small">{lingua.testo_45} <a href={lingua.link_02} target="_blank">{lingua.link_02}</a>);</li>
                                                <li className="uk-text-small">{lingua.testo_46}</li>
                                            </ul>
                                            <p className="uk-text-small">{lingua.testo_47}</p>

                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_11}</p>
                                            <p className="uk-text-small">{lingua.testo_48} Fabrizio Bosisio, {lingua.testo_49} <a href={"mailto:info@apriresrl.it"}>info@apriresrl.it</a></p>
                                            <p className="uk-text-small uk-text-bold">{lingua.sottotitolo_12}</p>
                                            <p className="uk-text-small">{lingua.testo_50}.</p>
                </Hero>
</div>

                <Showroom bg={'#fff'} />


            </Layout>
        )
    }
}



export default IndexPrivacyPolicy