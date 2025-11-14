import HamburgerMenu from "@/components/icons/hamburgerMenu";
import {useTranslations} from "next-intl";
import Image from 'next/image';
import {HOME_SECTION} from "@/features/landingPage/landingPage.constants";
import {EXPERIENCE_SECTION} from "@/features/experience/experience.constants";
import {SKILL_SECTION} from "@/features/skills/skills.constants";
import {PROJECT_SECTION} from "@/features/projects/projects.constants";
import {CONTACT_SECTION} from "@/features/contact/contact.constants";

function Navbar() {
    const t = useTranslations('navbar')
    const navItems = [
        {label: t('home'), href: `#${HOME_SECTION}`},
        {label: t('experience'), href: `#${EXPERIENCE_SECTION}`},
        {label: t('knowledge'), href: `#${SKILL_SECTION}`},
        {label: t('projects'), href: `#${PROJECT_SECTION}`},
        {label: t('contact'), href: `#${CONTACT_SECTION}`}
    ]

    return (
        <header className="sticky top-4 z-30 flex w-full justify-center px-4">
            <div className="glass-panel w-full max-w-6xl rounded-[28px] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-2xl">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative flex items-center gap-3">
                            <Image
                                src="/prafull_logo.png"
                                alt="Prafull logo"
                                width={56}
                                height={56}
                                className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 p-2"
                                priority
                            />
                            <div className="hidden flex-col text-xs uppercase tracking-[0.3em] text-slate-200/80 sm:flex">
                                <span className="text-[0.6rem] text-slate-400">Portfolio</span>
                                <span className="text-base font-semibold tracking-[0.2em] text-white">Prafull Kumar</span>
                            </div>
                        </div>
                        <span className="hidden rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-200/70 md:inline-flex">
                            Crafting expressive systems
                        </span>
                    </div>
                    <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                aria-label={`${item.label} section`}
                                className="rounded-full px-4 py-2 text-sm font-medium text-slate-200/80 transition hover:bg-white/10 hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2 lg:hidden">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" aria-label="Open navigation menu"
                                 className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                                <HamburgerMenu></HamburgerMenu>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content glass-panel rounded-2xl border border-white/10 bg-[#050816]/95 p-3 shadow-xl">
                                {navItems.map(item => (
                                    <li key={item.label}>
                                        <a aria-label={`${item.label} section`} href={item.href}
                                           className="rounded-lg px-3 py-2 text-sm text-slate-100/90 hover:bg-white/10">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <a href={`#${CONTACT_SECTION}`} className="hidden rounded-full border border-emerald-300/40 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100 transition hover:border-emerald-300/80 hover:bg-emerald-500/20 lg:inline-flex">
                        Let's talk
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar
