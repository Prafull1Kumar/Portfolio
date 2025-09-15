import React from "react";
import CheckIcon from "@/components/icons/checkIcon";
import ErrorIcon from "@/components/icons/errorIcon";
import {useTranslations} from "next-intl";
import {CONTACT_T_NODE, ERROR_BTN, OK_BTN, SUBMIT_BTN} from "@/features/contact/contact.constants";

function FormButton({state}) {
    const t = useTranslations(CONTACT_T_NODE)
    return (
        <button
            className={`
        btn mt-5 w-full px-16 force-outline
        transition-all duration-300 ease-in-out
        border-2
        ${buttonType(state)}
      `}
            disabled={state.isLoading || !state.formFilled}
        >
            {buttonBody(t,state.isLoading, state.msgSent, state.error)}
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
    if (!state.formFilled || state.isLoading)
        return 'bg-transparent text-primary border-primary cursor-not-allowed hover:bg-transparent hover:text-primary';
    if (state.msgSent)
        return 'bg-success text-white border-success';
    if (state.error)
        return 'bg-error text-white border-error';
    return 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white';
}

export default FormButton;