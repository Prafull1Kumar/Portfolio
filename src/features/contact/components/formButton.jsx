import React from "react";
import CheckIcon from "@/components/icons/checkIcon";
import ErrorIcon from "@/components/icons/errorIcon";
import {useTranslations} from "next-intl";
import {CONTACT_T_NODE, ERROR_BTN, OK_BTN, SUBMIT_BTN} from "@/features/contact/contact.constants";

function FormButton({state}) {
    const t = useTranslations(CONTACT_T_NODE)
    const disabled = state.isLoading || !state.formFilled
    return (
        <button
            className={`mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] transition-all duration-300 ${buttonType(state)} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            {buttonBody(t, state.isLoading, state.msgSent, state.error)}
        </button>
    );
}

function buttonBody(t,isLoading, msgSent, error) {
    if (isLoading) return <span className="loading loading-spinner"></span>;
    if (msgSent) return <><CheckIcon/>{t(OK_BTN)}</>
    if (error) return <><ErrorIcon/> {t(ERROR_BTN)}</>
    return t(SUBMIT_BTN);
}

function buttonType(state) {
    if (state.msgSent)
        return 'border-emerald-300/60 bg-emerald-500/20 text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.4)]';
    if (state.error)
        return 'border-rose-400/40 bg-rose-500/10 text-rose-100';
    if (!state.formFilled || state.isLoading)
        return 'border-white/15 bg-white/5 text-slate-200';
    return 'border-white/15 bg-white/5 text-white hover:border-emerald-300/50 hover:bg-emerald-500/10';
}

export default FormButton;
