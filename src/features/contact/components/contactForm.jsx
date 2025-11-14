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

    return (<form id="contact-form" onSubmit={onSubmit} className="space-y-5">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-300/80">{t(FORM_TITLE)}</p>
        <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{t(NAME_FORM)}</span>
            <input type="text" onChange={onNameChange} value={state.name}
                   className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 ${isFieldDisabled(state) ? 'opacity-60 cursor-not-allowed' : 'opacity-100'}`}
                   placeholder="Ada Lovelace"
                   disabled={isFieldDisabled(state)}/>
        </label>
        <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{t(EMAIL_FORM)}</span>
            <input type="email" onChange={onMailChange} value={state.email}
                   className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 ${isFieldDisabled(state) ? 'opacity-60 cursor-not-allowed' : 'opacity-100'}`}
                   placeholder="you@email.com"
                   disabled={isFieldDisabled(state)}/>
            <span className={`text-xs text-rose-300 transition-opacity duration-150 ${state.validMail ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            Enter valid email address
          </span>
        </label>
        <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{t(MESSAGE_FORM)}</span>
            <textarea className={`min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 ${isFieldDisabled(state) ? 'opacity-60 cursor-not-allowed' : 'opacity-100'}`}
                      onChange={onMsgChange} value={state.msg}
                      placeholder="Tell me about your idea, challenge or roadmap."
                      disabled={isFieldDisabled(state)}></textarea>
        </label>
        <input type="text" name="faxNumber" className="hidden" autoComplete="off" tabIndex="-1" aria-hidden="true"/>
        <FormButton state={state}/>
    </form>)
}

const isFieldDisabled = (state) => state.isLoading || state.msgSent || state.error


export default ContactForm
