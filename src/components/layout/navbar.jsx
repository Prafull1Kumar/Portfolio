import HamburgerMenu from "@/components/icons/hamburgerMenu";
import {useTranslations} from "next-intl";
import LanguageDropdown from "@/components/layout/languageDropdown";
import Image from 'next/image';
import {HOME_SECTION} from "@/features/landingPage/landingPage.constants";
import {EXPERIENCE_SECTION} from "@/features/experience/experience.constants";
import {SKILL_SECTION} from "@/features/skills/skills.constants";
import {PROJECT_SECTION} from "@/features/projects/projects.constants";
import {CONTACT_SECTION} from "@/features/contact/contact.constants";

function Navbar() {
    const t = useTranslations('navbar')
    return <>
        <div className="navbar bg-base-100 text-neutral-content w-full sticky top-0 left-0 z-20">
            <div className="navbar-start">

                <div className="flex-1">
                    <Image src="/logo.svg" alt="home" width={128} height={32} className="h-4 w-auto" priority/>
                </div>
            </div>
            <div className="navbar-end">
                <LanguageDropdown/>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" aria-label="Open navigation menu" className="btn btn-ghost lg:hidden">
                        <HamburgerMenu></HamburgerMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        <li><a aria-label={`${t('home')} section`} href={`#${HOME_SECTION}`}>{t('home')}</a></li>
                        <li><a aria-label={`${t('experience')} section`}
                               href={`#${EXPERIENCE_SECTION}`}>{t('experience')}</a></li>
                        <li><a aria-label={`${t('knowledge')} section`} href={`#${SKILL_SECTION}`}>{t('knowledge')}</a>
                        </li>
                        <li><a aria-label={`${t('projects')} section`} href={`#${PROJECT_SECTION}`}>{t('projects')}</a>
                        </li>
                        <li><a aria-label={`${t('contact')} section`} href={`#${CONTACT_SECTION}`}>{t('contact')}</a>
                        </li>
                    </ul>
                </div>
                <div className="lg:flex hidden  flex-none ">
                    <ul className="menu menu-horizontal px-4">
                        <li><a aria-label={`${t('home')} section`} href={`#${HOME_SECTION}`}
                               className="btn btn-ghost text-lg">{t('home')}</a></li>
                        <li><a aria-label={`${t('experience')} section`} href={`#${EXPERIENCE_SECTION}`}
                               className="btn btn-ghost text-lg">{t('experience')}</a></li>
                        <li><a aria-label={`${t('knowledge')} section`} href={`#${SKILL_SECTION}`}
                               className="btn btn-ghost text-lg">{t('knowledge')}</a></li>
                        <li><a aria-label={`${t('projects')} section`} href={`#${PROJECT_SECTION}`}
                               className="btn btn-ghost text-lg">{t('projects')}</a></li>
                        <li><a aria-label={`${t('contact')} section`} href={`#${CONTACT_SECTION}`}
                               className="btn btn-ghost text-lg">{t('contact')}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>

}

export default Navbar