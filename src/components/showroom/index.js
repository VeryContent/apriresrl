import React from 'react'

const Showroom = (props) => {
    return (
        <div className="uk-section uk-padding-remove-vertical uk-light uk-position-relative" style={{ background: '#3f4042', height: '100%' }}>

            <div className="uk-height-small uk-width-1-1" style={{ background: props.bg }} />
            <div className="uk-container uk-container-large" >
                <div className="uk-padding-large uk-width-1-1" style={{ background: '#555658', marginTop: '-150px' }}>

                    <h2 className="uk-heading-secondary">Il nostro showroom</h2>

                    <div data-uk-grid>
                        <div className="uk-width-2-3@m">
                            <p>Nella nostra sede storica di Calco in via Indipendenza 15, dove abbiamo l’officina, l’ufficio tecnico e amministrativo, trovate i nostri spazi espositivi, ampliati nel 2019. Oltre 500 metri quadrati dove esponiamo una selezione dei migliori prodotti dei nostri partner. Sarete accompagnati da personale qualificato che conosce perfettamente i prodotti esposti per esperienza diretta. Lo spazio è dotato anche di postazione con realtà virtuale.</p>
                        </div>
                        <div className="uk-width-1-3@m uk-text-right@m">

                            <p className="uk-text-lead"><a href="mailto:info@apriresrl.it"><span className="uk-margin-right" data-uk-icon="icon: mail; ratio: 2.5"></span>info@apriresrl.it</a></p>
                            <p className="uk-text-lead uk-visible@s" style={{ color: '#fff' }}><span className="uk-margin-right" data-uk-icon="icon: receiver; ratio: 2.5"></span>+39 039 509538</p>
                            <span itemProp="telephone">
                                <a href="tel:+39039509538" className="uk-hidden@s uk-button uk-button-default">
                                    <span className="uk-margin-right uk-hidden" data-uk-icon="icon: receiver; ratio: 2.5"></span><span className="uk-text-lead">Chiama ora</span>
                                </a>
                            </span>

                        </div>
                    </div>

                    <div className="uk-child-width-expand@s" data-uk-grid>
                        <div>
                            <table className="uk-table uk-table-divider">
                                <thead>
                                    <tr>
                                        <th>Ufficio: da Lunedì a Venerdì</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>08-12 | 14-18</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table className="uk-table uk-table-divider">
                                <thead>
                                    <tr>
                                        <th>Esposizione: da Lunedì a Sabato</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Si riceve solo su appuntamento telefonico</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Showroom