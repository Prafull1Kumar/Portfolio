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
    return <div className="flex flex-col items-center justify-center">
        <Analytics/>
        <Navbar></Navbar>
        <section id={HOME_SECTION} className="w-screen h-screen landing-section">
            <div className=" relative w-screen h-[93%] flex items-center justify-center z-10">
                <Landing></Landing>
            </div>
        </section>
        <div className="main-body flex-grow ">
            <section id={EXPERIENCE_SECTION}
                     className="min-h-screen w-full scroll-mt-28">
                <Experience></Experience></section>
            <section id={SKILL_SECTION} className="min-h-screen flex items-center justify-center">
                <Knowledge></Knowledge></section>
            <GithubContributions />
            <section id={PROJECT_SECTION}
                     className="min-h-screen flex items-center justify-center scroll-mt-20 lg:scroll-mt-28">
                <Projects></Projects></section>
        </div>
        <section id={CONTACT_SECTION} className="w-screen  mt-60">
            <Contact></Contact>
        </section>
        <HomeDetector/>
        <FloatingActionButton/>
        <ScrollSyncUrl/>
    </div>
}
