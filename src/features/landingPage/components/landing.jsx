import ParticlesBackground from "@/features/landingPage/components/landingBackground";
import {useTranslations} from "next-intl";
import {BIO, LANDING_PAGE_T_NODE, TITLE} from "@/features/landingPage/landingPage.constants";
import CvBtn from "@/features/landingPage/components/cvBtn";
import Image from "next/image";
import {PROJECT_SECTION} from "@/features/projects/projects.constants";

function Landing() {
    const t = useTranslations(LANDING_PAGE_T_NODE)
    const stats = [
        {value: '4+', label: 'Years shipping', detail: 'backend & cloud systems'},
        {value: '84%', label: 'Request drop', detail: 'AWS DynamoDB optimizations'},
        {value: '3', label: 'Cloud platforms', detail: 'AWS · Azure · GCP'}
    ]
    const focus = ['Platform Engineering', 'API Design', 'Distributed systems']
    return <div className="relative flex flex-col gap-10 overflow-hidden rounded-[32px]">
        <div className="absolute inset-0 opacity-80">
            <ParticlesBackground></ParticlesBackground>
        </div>
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8 text-left">
                <div className="flex flex-wrap gap-3">
                    <span className="tag-pill">
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]"></span>
                        always shipping
                    </span>
                    <span className="tag-pill border-sky-300/40 bg-sky-500/10 text-sky-100">
                        cloud native
                    </span>
                </div>
                <div>
                    <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                        {t(TITLE)}
                    </h1>
                    <p className="mt-3 text-2xl font-semibold text-transparent md:text-3xl" style={{backgroundImage: 'linear-gradient(120deg, #34d399, #38bdf8, #c084fc)', WebkitBackgroundClip: 'text'}}>
                        Backend & cloud alchemist crafting expressive systems
                    </p>
                </div>
                <p className="text-base text-slate-200/90 md:text-lg">
                    {t(BIO)}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a href={`#${PROJECT_SECTION}`} className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:border-white/40 hover:bg-white/10">
                        View work
                    </a>
                    <CvBtn className="border-none bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 text-slate-900 shadow-[0_15px_45px_rgba(59,130,246,0.45)]"/>
                </div>
                <div className="grid gap-4 pt-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.label} className="glow-card p-4">
                            <p className="text-3xl font-semibold text-white">{stat.value}</p>
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">{stat.label}</p>
                            <p className="mt-2 text-xs text-slate-400">{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className="blurred-sphere -right-20 top-10" aria-hidden="true"></div>
                <div className="glow-card relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 text-center">
                    <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" aria-hidden="true"></div>
                    <Image
                        src="/prafull.webp"
                        alt="Prafull portrait"
                        width={480}
                        height={600}
                        className="mx-auto h-72 w-72 rounded-[24px] object-cover object-center shadow-2xl"
                        priority
                    />
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {focus.map(item => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-100/80">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="mt-6 rounded-2xl border border-emerald-300/40 bg-emerald-500/10 p-5 text-left">
                        <p className="text-xs uppercase tracking-[0.4em] text-emerald-100">currently</p>
                        <p className="mt-2 text-lg font-semibold text-white">Scaling distributed systems @ UTD & AWS</p>
                        <p className="text-sm text-emerald-100/80">Let's architect the next leap together.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Landing
