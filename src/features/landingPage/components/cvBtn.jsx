"use client"

import {useLocale, useTranslations} from "next-intl";
import {CV_PATH, GET_CV_BTN, LANDING_PAGE_T_NODE} from "@/features/landingPage/landingPage.constants";
import DownloadIcon from "@/components/icons/downloadIcon";

function CvBtn() {
    const locale = useLocale()
    const t = useTranslations(LANDING_PAGE_T_NODE)

    const getFileName = () =>
        (locale === 'it' ? CV_PATH + locale : CV_PATH + 'en') + '.pdf'


    return <a aria-label="Download CV" href={getFileName()} download>
        <button className="btn btn-outline btn-secondary">{t(GET_CV_BTN)}<DownloadIcon/></button>
    </a>
}

export default CvBtn