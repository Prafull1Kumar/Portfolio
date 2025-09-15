"use client"

import React, {useEffect, useReducer} from 'react'
import FormButton from "@/features/contact/components/formButton";
import {contactReducer, initialState, ACTIONS} from "@/features/contact/store/contactReducer";
import {useTranslations} from "next-intl";
import {CONTACT_T_NODE, EMAIL_FORM, FORM_TITLE, MESSAGE_FORM, NAME_FORM} from "@/features/contact/contact.constants";

function ContactForm() {
    const t = useTranslations(CONTACT_T_NODE)
    const [state, dispatch] = useReducer(contactReducer, initialState)

    const onNameChange = (e) => dispatch({action: ACTIONS.UPDATE_FIELD, field: 'name', value: e.target.value})

    const onMailChange = (e) => dispatch({action: ACTIONS.UPDATE_FIELD, field: 'email', value: e.target.value})


    const onMsgChange = (e) => dispatch({action: ACTIONS.UPDATE_FIELD, field: 'msg', value: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({action: ACTIONS.FORM_SUBMIT});
        fetch('api/contact', {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                name: state.name, email: state.email, message: state.msg,
            })
        }).then(res => res.json())
            .then(json => dispatch({action: ACTIONS.RESPONSE_RECEIVED, value: json.success}))
            .catch(_ => dispatch({action: ACTIONS.RESPONSE_RECEIVED, value: false}))
    }

    useEffect(() => {
        if (state.msgSent || state.error) {
            const timer = setTimeout(() => dispatch({action: ACTIONS.FEEDBACK_GIVEN}), 1000)
            return () => clearTimeout(timer)
        }
    }, [state.msgSent, state.error])

    return (<form id="contact-form" onSubmit={onSubmit}>
        <h2 className="footer-title text-xl lg:text-2xl flex items-center">{t(FORM_TITLE)}</h2>
        <label className="form-control ">
            <div className="label">
                <span className="label-text text-lg">{t(NAME_FORM)}</span>
            </div>
            <input type="text" onChange={onNameChange} value={state.name}
                   className={`input input-bordered input-md input-primary w-full transition-all duration-300 ease-in-out
                   ${isFieldDisabled(state) ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-text'}`}
                   disabled={isFieldDisabled(state)}/>
        </label>
        <label className="form-control">
            <div className="label">
                <span className="label-text text-lg">{t(EMAIL_FORM)}</span>
            </div>
            <input type="email" onChange={onMailChange} value={state.email}
                   className={`input validator input-bordered input-md input-primary w-full transition-all duration-300 ease-in-out
                   ${isFieldDisabled(state) ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-text'}`}
                   disabled={isFieldDisabled(state)}/>
            <div className="label">
          <span className={`label-text-alt text-error transition-opacity duration-150  
                ${state.validMail ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}>
            Enter valid email address
          </span>
            </div>
        </label>
        <label className="form-control">
            <div className="label">
                <span className="label-text text-lg">{t(MESSAGE_FORM)}</span>
            </div>
            <textarea className={`textarea textarea-primary h-24 w-full transition-all duration-300 ease-in-out
                   ${isFieldDisabled(state) ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-text'}`}
                      onChange={onMsgChange} value={state.msg}
                      disabled={isFieldDisabled(state)}></textarea>
        </label>
        <input type="text" name="faxNumber" className="hidden" autoComplete="off" tabIndex="-1" aria-hidden="true"/>
        <FormButton state={state}/>
    </form>)
}

const isFieldDisabled = (state) => state.isLoading || state.msgSent || state.error


export default ContactForm