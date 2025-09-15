import GithubIcon from "@/components/icons/githubIcon";
import LinkIcon from "@/components/icons/linkIcon";
import {useTranslations} from "next-intl";
import {PROJECTS_T_NODE} from "@/features/projects/projects.constants";
import Image from 'next/image';

function ProjectCard({project}) {
    const t = useTranslations(PROJECTS_T_NODE)
    return <div className="card card-compact text-start bg-base-100 shadow-xl mx-0 md:mx-4">
        <CardFigure project={project}/>
        <div className="card-body">
            <h2 className="card-title">{project.title}
                <CardBadge project={project} translator={t}/>
            </h2>
            <div className="card-description whitespace-pre-line">
                {project.description}
            </div>
            <div className="card-actions mt-3 flex flex-wrap gap-1">
                {
                    project.techList.map((tl, i) =>
                        <div key={i} className="badge badge-outline">{`#${tl}`}</div>
                    )
                }
            </div>
        </div>
    </div>
}


function CardBadge({project, translator}) {
    return <a
        href={project.url || "#"}
        target={project.url ? "_blank" : "_self"}
        rel={project.url ? "noopener noreferrer" : ""}
        className={`block ${!project.url ? "pointer-events-none cursor-default" : ""}`}// Previene il comportamento di navigazione
    >
        <div className={`badge ${project.isPublic() ? 'badge-success' : 'badge-error'}`}>
            <GithubIcon className="ml-1"></GithubIcon>
            <span className="mx-1">{translator(project.getVisibility())}</span>
            <LinkIcon className="mr-1" enable={project.isPublic()}></LinkIcon>
        </div>
    </a>

}

function CardFigure({project}) {
    const isClickable = !!project.url;

    return <figure>
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
                className={`${isClickable ? 'clickable-card' : ''}`}
                style={{width: '100%', height: 'auto'}}
            />
        </a>
    </figure>

}

export default ProjectCard



