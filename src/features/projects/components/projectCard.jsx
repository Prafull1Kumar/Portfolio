import GithubIcon from "@/components/icons/githubIcon";
import LinkIcon from "@/components/icons/linkIcon";
import {useTranslations} from "next-intl";
import {PROJECTS_T_NODE} from "@/features/projects/projects.constants";
import Image from 'next/image';

function ProjectCard({project}) {
    const t = useTranslations(PROJECTS_T_NODE)
    return <div className="group relative mx-0 md:mx-4">
        <div className="glow-card overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-1">
            <CardFigure project={project}/>
            <div className="space-y-5 p-6">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <CardBadge project={project} translator={t}/>
                    </div>
                    <div className="card-description whitespace-pre-line text-sm text-slate-200/90">
                        {project.description}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        project.techList.map((tl, i) =>
                            <span key={i}
                                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-100/80">
                                #{tl}
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
}


function CardBadge({project, translator}) {
    const isClickable = project.isPublic()
    return <a
        href={project.url || "#"}
        target={project.url ? "_blank" : "_self"}
        rel={project.url ? "noopener noreferrer" : ""}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.3em] transition ${isClickable ? 'border-emerald-300/50 text-emerald-100 hover:border-emerald-300/80 hover:bg-emerald-500/10' : 'border-white/15 text-slate-300/70 cursor-default'}`}
    >
        <GithubIcon className="ml-1 h-4 w-4"></GithubIcon>
        <span>{translator(project.getVisibility())}</span>
        <LinkIcon className="h-4 w-4" enable={isClickable}></LinkIcon>
    </a>

}

function CardFigure({project}) {
    const isClickable = !!project.url;

    return <figure className="relative overflow-hidden rounded-[26px] border border-white/10">
        <a
            href={isClickable ? project.url : '#'}
            target={isClickable ? '_blank' : '_self'}
            rel={isClickable ? 'noopener noreferrer' : ''}
            className={`block ${!isClickable ? 'pointer-events-none cursor-default' : ''}`}
        >
            <Image
                src={project.imageUrl}
                alt={project.title || 'Project image'}
                width={800}
                height={600}
                className={`${isClickable ? 'clickable-card' : ''} h-64 w-full rounded-[26px] object-cover object-center transition duration-700 group-hover:scale-105`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent"></div>
        </a>
    </figure>

}

export default ProjectCard


