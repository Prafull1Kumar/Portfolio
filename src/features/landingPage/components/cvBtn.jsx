"use client"

import {useLocale, useTranslations} from "next-intl";
import {CV_PATH, GET_CV_BTN, LANDING_PAGE_T_NODE} from "@/features/landingPage/landingPage.constants";
import DownloadIcon from "@/components/icons/downloadIcon";

function CvBtn({className = ''}) {
    const locale = useLocale()
    const t = useTranslations(LANDING_PAGE_T_NODE)

    const getFileName = () =>
        (locale === 'it' ? CV_PATH + locale : CV_PATH + 'en') + '.pdf'


    return <a aria-label="Download CV" href={getFileName()} download>
        <button
            className={`inline-flex items-center gap-3 rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100 transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 ${className}`}>
            {t(GET_CV_BTN)}
            <DownloadIcon/>
        </button>
    </a>
}

export default CvBtn
