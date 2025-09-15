"use client"

import {Link, usePathname} from "@/i18n/navigation";
import ItFlag from "@/components/icons/itFlag";
import EnFlag from "@/components/icons/enFlag";
import DeFlag from "@/components/icons/deFlag";
import {useLocale} from "next-intl";

function LanguageDropdown() {

    const pathname = usePathname()
    const locale = useLocale()

    return <div className="dropdown dropwon-start">
        <div tabIndex={0} role="button" aria-label="Open language selector" className="btn btn-sm btn-ghost">
            {currentLanguage(locale)}
        </div>
        <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-28 text-sm"
        >
            <li><Link aria-label="Set language to English" locale="en" href={pathname}><EnFlag/><span>EN</span></Link></li>
            <li><Link aria-label="Imposta lingua in Italiano" locale="it" href={pathname}><ItFlag/><span>IT</span></Link></li>
            <li><Link aria-label="Sprache auf Deutsch einstellen" locale="de" href={pathname}><DeFlag/><span>DE</span></Link></li>
        </ul>
    </div>
}

function currentLanguage(locale) {
    switch (locale) {
        case 'en':
            return <div className="flex items-center justify-start gap-2 whitespace-nowrap"><EnFlag/><span className="hidden lg:inline uppercase mt-1">{locale}</span></div>
        case 'it':
            return <div className="flex items-center justify-start gap-2 whitespace-nowrap"><ItFlag/><span className="hidden lg:inline uppercase mt-1">{locale}</span></div>
        case 'de':
            return <div className="flex items-center justify-start gap-2 whitespace-nowrap"><DeFlag/><span className="hidden lg:inline uppercase mt-1">{locale}</span></div>
        default:
            return <div><EnFlag/><span className="hidden lg:inline uppercase mt-1">{locale}</span></div>
    }
}

export default LanguageDropdown