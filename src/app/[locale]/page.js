import Navbar from "@/components/layout/navbar";
import Landing from "@/features/landingPage/components/landing";
import Experience from "@/features/experience/components/experience";
import Knowledge from "@/features/skills/components/knowledge";
import Projects from "@/features/projects/components/projects";
import Contact from "@/features/contact/components/contact";
import FloatingActionButton from "@/components/ui/floatingActionButton";
import ScrollSyncUrl from "@/components/logic/scrollSyncUrl";
import {Analytics} from "@vercel/analytics/react"
import HomeDetector from "@/components/logic/homeDetector";
import GithubContributions from "@/components/ui/githubCalendar";
import {HOME_SECTION} from "@/features/landingPage/landingPage.constants";
import {EXPERIENCE_SECTION} from "@/features/experience/experience.constants";
import {SKILL_SECTION} from "@/features/skills/skills.constants";
import {PROJECT_SECTION} from "@/features/projects/projects.constants";
import {CONTACT_SECTION} from "@/features/contact/contact.constants";

export default function Home() {
    return <div className="relative flex min-h-screen w-full flex-col items-center">
        <Analytics/>
        <Navbar></Navbar>
        <main className="flex w-full flex-col items-center gap-20 px-4 pb-24 pt-32">
            <section id={HOME_SECTION} className="w-full landing-section">
                <div className="section-shell glass-panel">
                    <Landing></Landing>
                </div>
            </section>
            <section id={EXPERIENCE_SECTION}
                     className="w-full scroll-mt-32">
                <div className="section-shell glass-panel">
                    <Experience></Experience>
                </div>
            </section>
            <section id={SKILL_SECTION} className="w-full">
                <div className="section-shell glass-panel">
                    <Knowledge></Knowledge>
                </div>
            </section>
            <section id={PROJECT_SECTION}
                     className="w-full scroll-mt-32">
                <div className="section-shell glass-panel">
                    <Projects></Projects>
                </div>
            </section>
            <section id={CONTACT_SECTION} className="w-full">
                <div className="section-shell glass-panel">
                    <Contact></Contact>
                </div>
            </section>
        </main>
        <HomeDetector/>
        <FloatingActionButton/>
        <ScrollSyncUrl/>
    </div>
}
