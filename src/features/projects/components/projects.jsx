import ProjectEntry from "@/features/projects/model/projectEntry";
import ProjectCard from "@/features/projects/components/projectCard";
import MasonryLayout from "@/components/layout/masonryLayout";
import {useTranslations} from "next-intl";
import {PROJECTS_T_NODE, MARVEL, PORTFOLIO, FAKE_FOOTBALL, TRIVIA, SUSTAIN} from "@/features/projects/projects.constants";

const m = [
    {
        key: MARVEL,
        imageUrl: '/afse.webp',
        url: 'https://github.com/MatteoMartinelliMM/afse',
        techList: ['Javascript', 'Bootstrap', 'NodeJS', 'MongoDB']
    },
    {
        key: PORTFOLIO,
        imageUrl: '/portfolio.webp',
        url: 'https://github.com/MatteoMartinelliMM/portfolio',
        techList: ['NextJS', 'React', 'TailwindCSS', 'DaisyUI']
    },
    {
        key: FAKE_FOOTBALL,
        imageUrl: '/fakeFootball.webp',
        techList: ['Flutter', 'Bloc', 'Firebase', 'FFmpeg']
    },
    {
        key: TRIVIA,
        imageUrl: '/trivia.webp',
        techList: ['Flutter', 'Bloc', 'NoSQL']
    },
    {
        key: SUSTAIN,
        imageUrl: '/sustain.jpg',
        url: 'https://github.com/Prafull1Kumar/Sustain',
        techList: ['Python', 'Scikit-learn', 'React', 'Node.js', 'PostgreSQL']
    },
]

function Projects() {
    const mi = translateProjects(useTranslations(PROJECTS_T_NODE))
    return <MasonryLayout>
        {mi.map((item, index) => (<ProjectCard key={index} project={item}></ProjectCard>))}
    </MasonryLayout>
}

function translateProjects(t) {
    return m.map(e =>
        new ProjectEntry(t(`${e.key}.title`), t(`${e.key}.description`), e.imageUrl, e.url, e.techList)
    )
}

export default Projects