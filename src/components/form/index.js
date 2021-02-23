import React, { Component } from 'react'

import axios from 'axios'
import { Formik } from 'formik'


const Form = () => {

    


        return (

            
                <Formik
                    initialValues={{
                        nome: '',
                        email: '',
                        soggetto: '',
                        messaggio: ''
                    }}
                    validate={values => {
                        let errors = {};

                        if (!values.nome) {
                            errors.nome = <span className="uk-text-meta uk-text-danger">Campo richiesto</span>;
                        }

                        if (!values.soggetto) {
                            errors.soggetto = <span className="uk-text-meta uk-text-danger">Campo richiesto</span>;
                        }

                        if (!values.messaggio) {
                            errors.messaggio = <span className="uk-text-meta uk-text-danger">Campo richiesto</span>;
                        }

                        if (!values.email) {
                            errors.email = <span className="uk-text-meta uk-text-danger">Campo richiesto</span>;
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = <span className="uk-text-meta uk-text-danger">Email non valida</span>
                        }

                        return errors;
                    }}


                    onSubmit={(values, actions) => {

                        const mailContatto = {
                            email: 'info@apriresrl.it',
                            nome: 'Aprire s.r.l.',
                            nomeA: 'Aprire s.r.l.',
                            emailA: 'info@apriresrl.it',
                            soggetto: values.soggetto,
                            html:
                                '<h2>' + values.soggetto + '</h2><br />' +
                                values.soggetto + '<br />' +
                                values.nome + '<br />' +
                                values.email + '<br />' +
                                values.messaggio + '<br />'
                        }

                        axios.post(`https://apriresrl.netlify.com/.netlify/functions/email`, mailContatto)
                            .then(res => {

                                if (res.status === 200) {
                                    //toast.success(lingua.successo)
                                    actions.setSubmitting(false)
                                    actions.resetForm({})

                                } else {
                                    //toast.error(lingua.errore)
                                    actions.setSubmitting(false)
                                }

                            })

                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        isSubmitting,

                    }) => (
                            <form onSubmit={handleSubmit} className="uk-width-large@s uk-width-xlarge@m uk-width-medium" >
                                <div className="uk-width-1-1@s">

                                    <div className="uk-margin-small">
                                        <div className="uk-form-controls">
                                            <input
                                                className={errors.nome && touched.nome ? 'uk-input uk-form-danger' : 'uk-input'}
                                                type="text"
                                                placeholder="Il tuo nome"
                                                name="nome"
                                                onChange={handleChange}
                                                value={values.nome || ''}
                                            />
                                        </div>
                                        {errors.nome && touched.nome && errors.nome}
                                    </div>

                                    <div className="uk-margin-small">
                                        <div className="uk-form-controls">
                                            <input
                                                className={errors.email && touched.email ? 'uk-input uk-form-danger' : 'uk-input'}
                                                type="text"
                                                placeholder="La tua email"
                                                name="email"
                                                onChange={handleChange}
                                                value={values.email || ''}
                                            />
                                        </div>
                                        {errors.email && touched.email && errors.email}
                                    </div>

                                    <div className="uk-margin-small">
                                        <div className="uk-form-controls">
                                            <input
                                                className={errors.soggetto && touched.soggetto ? 'uk-input uk-form-danger' : 'uk-input'}
                                                type="text"
                                                placeholder="Oggetto del messaggio"
                                                name="soggetto"
                                                onChange={handleChange}
                                                value={values.soggetto || ''}
                                            />
                                        </div>
                                        {errors.soggetto && touched.soggetto && errors.soggetto}
                                    </div>

                                
                                
                                    <div className="uk-margin-small">
                                        <div className="uk-form-controls">
                                            <textarea
                                                style={{ height: '140px' }}
                                                className={errors.messaggio && touched.messaggio ? 'uk-textarea uk-form-danger' : 'uk-textarea'}
                                                rows="5"
                                                name="messaggio"
                                                placeholder="Il tuo messaggio"
                                                onChange={handleChange}
                                                value={values.messaggio || ''}
                                            >
                                            </textarea>
                                        </div>
                                        {errors.messaggio && touched.messaggio && errors.messaggio}
                                    </div>

                                    <div className="uk-margin">
                                        <button type="submit" className="uk-button uk-button-secondary">{isSubmitting ? "Attendere..." : "Invia messaggio"}</button>
                                    </div>
                                </div>

                            </form>
                        )}

                </Formik>
                
        )
    }


export default Form