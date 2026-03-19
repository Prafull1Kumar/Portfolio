import ProjectCard from "@/features/projects/components/projectCard";
import MasonryLayout from "@/components/layout/masonryLayout";
import {useTranslations} from "next-intl";
import {PROJECTS_T_NODE, PORTFOLIO, SUSTAIN, IDEOLOGIES, AI_JOB_OUTREACH_AGENT, ONBOARD_AI} from "@/features/projects/projects.constants";

const m = [
    {
        key: PORTFOLIO,
        imageUrl: '/portfolio.webp',
        url: 'https://github.com/MatteoMartinelliMM/portfolio',
        techList: ['NextJS', 'React', 'TailwindCSS', 'DaisyUI']
    },
    {
        key: SUSTAIN,
        imageUrl: '/sustain.jpg',
        url: 'https://github.com/Prafull1Kumar/Sustain',
        techList: ['Python', 'Scikit-learn', 'React', 'Node.js', 'PostgreSQL']
    },
    {
        key: IDEOLOGIES,
        imageUrl: '/searchengine.png',
        url: 'https://github.com/Prafull1Kumar/Ideologies-Search-Engine.git',
        techList: ['Python', 'React', 'Node.js', 'TF-IDF', 'PageRank', 'HITS', 'Clustering']
    },
    {
        key: AI_JOB_OUTREACH_AGENT,
        imageUrl: '/aijoboutreachagent.jpg',
        url: 'https://github.com/Prafull1Kumar/AI-Job-Outreach-Agent',
        techList: ['Python', 'OpenAI', 'Automation', 'LLMs', 'Job Search']
    },
    {
        key: ONBOARD_AI,
        imageUrl: '/appMockup_2.jpg',
        url: 'https://github.com/devils-angel/HackUTDGoldie',
        techList: ['Hackathon', 'Full Stack', 'AI', 'Web App']
    },
]

function Projects() {
    const projectT = useTranslations(PROJECTS_T_NODE)
    const navT = useTranslations('navbar')
    const mi = translateProjects(projectT)
    return (
        <div className="w-full space-y-12">
            <div className="section-heading">
                <span className="eyebrow">case studies</span>
                <h2><span>{navT('projects')}</span></h2>
                <p className="max-w-3xl text-base text-slate-300/80">
                    Systems, search engines, and hackathon builds that highlight how I translate constraints into thoughtful, resilient products.
                </p>
            </div>
            <MasonryLayout>
                {mi.map((item, index) => (<ProjectCard key={index} project={item}></ProjectCard>))}
            </MasonryLayout>
        </div>
    )
}

function translateProjects(t) {
    return m.map((e) => ({
        title: t(`${e.key}.title`),
        description: t(`${e.key}.description`),
        imageUrl: e.imageUrl,
        url: e.url,
        techList: e.techList,
        screenshots: e.screenshots?.length ? e.screenshots : [e.imageUrl]
    }))
}

export default Projects
