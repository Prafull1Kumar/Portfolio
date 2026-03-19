"use client";

import {useEffect, useState} from "react";
import GithubIcon from "@/components/icons/githubIcon";
import LinkIcon from "@/components/icons/linkIcon";
import {useTranslations} from "next-intl";
import {PROJECTS_T_NODE} from "@/features/projects/projects.constants";
import Image from "next/image";

function isProjectPublic(project) {
    return Boolean(project.url && project.url.trim() !== '')
}

function getProjectVisibility(project) {
    return isProjectPublic(project) ? 'public' : 'private'
}

function ProjectCard({project}) {
    const t = useTranslations(PROJECTS_T_NODE)
    const [isOpen, setIsOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const screenshots = project.screenshots?.length ? project.screenshots : [project.imageUrl]
    const activeScreenshot = screenshots[activeIndex]
    const hasMultipleShots = screenshots.length > 1

    useEffect(() => {
        setActiveIndex(0)
    }, [project])

    useEffect(() => {
        if (!isOpen) return

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        window.addEventListener('keydown', onKeyDown)

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen])

    return (
        <div className="group relative mx-0 md:mx-4">
            <div className="glow-card overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-1">
                <CardFigure project={project} onOpen={() => setIsOpen(true)} translator={t}/>
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
                        {project.techList.map((tl, i) => (
                            <span
                                key={i}
                                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-100/80"
                            >
                                #{tl}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-100 transition hover:border-white/30 hover:bg-white/10"
                        >
                            {t('previewShots')}
                        </button>
                        {isProjectPublic(project) && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100 transition hover:border-emerald-300/80 hover:bg-emerald-500/20"
                            >
                                {t('openSource')}
                                <LinkIcon className="h-4 w-4" enable />
                            </a>
                        )}
                    </div>

                </div>
            </div>
            <ProjectPreviewModal
                activeIndex={activeIndex}
                hasMultipleShots={hasMultipleShots}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSelect={setActiveIndex}
                project={project}
                screenshots={screenshots}
                activeScreenshot={activeScreenshot}
                translator={t}
            />
        </div>
    )
}

function CardBadge({project, translator}) {
    const isClickable = isProjectPublic(project)

    return (
        <a
            href={project.url || "#"}
            target={project.url ? "_blank" : "_self"}
            rel={project.url ? "noopener noreferrer" : ""}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.3em] transition ${isClickable ? 'border-emerald-300/50 text-emerald-100 hover:border-emerald-300/80 hover:bg-emerald-500/10' : 'border-white/15 text-slate-300/70 cursor-default'}`}
        >
            <GithubIcon className="ml-1 h-4 w-4"></GithubIcon>
            <span>{translator(getProjectVisibility(project))}</span>
            <LinkIcon className="h-4 w-4" enable={isClickable}></LinkIcon>
        </a>
    )
}

function CardFigure({project, onOpen, translator}) {
    return (
        <figure className="relative overflow-hidden rounded-[26px] border border-white/10">
            <button
                type="button"
                onClick={onOpen}
                className="block w-full text-left"
                aria-label={`Open ${project.title} preview`}
            >
                <Image
                    src={project.imageUrl}
                    alt={project.title || 'Project image'}
                    width={800}
                    height={600}
                    className="clickable-card h-64 w-full rounded-[26px] object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent"></div>
                <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#020617]/65 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-100 backdrop-blur-xl">
                    {translator('previewShots')}
                </div>
            </button>
        </figure>
    )
}

function ProjectPreviewModal({
    activeIndex,
    activeScreenshot,
    hasMultipleShots,
    isOpen,
    onClose,
    onSelect,
    project,
    screenshots,
    translator
}) {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[80] overflow-y-auto bg-[rgba(2,6,23,0.82)] backdrop-blur-md"
            onClick={onClose}
        >
            <div className="mx-auto min-h-full max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
                <div
                    className="glass-panel w-full rounded-[32px] border border-white/10"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5">
                        <div className="min-w-0 space-y-2">
                            <p className="text-[11px] uppercase tracking-[0.34em] text-slate-400">{translator('previewShots')}</p>
                            <h3 className="truncate text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                        >
                            {translator('close')}
                        </button>
                    </div>

                    <div className="space-y-5 px-5 py-5 sm:px-7 sm:py-6">
                        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-3 sm:p-4">
                            <div className="relative h-[260px] overflow-hidden rounded-[22px] border border-white/10 bg-[#030712] sm:h-[420px] lg:h-[560px]">
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_32%)]"></div>
                                <Image
                                    src={activeScreenshot}
                                    alt={`${project.title} screenshot ${activeIndex + 1}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 900px"
                                    className="object-contain p-4 sm:p-6"
                                />
                            </div>
                        </div>

                        {hasMultipleShots && (
                            <div className="flex gap-3 overflow-x-auto pb-1">
                                {screenshots.map((screenshot, index) => (
                                    <button
                                        key={`${project.title}-${index}`}
                                        type="button"
                                        onClick={() => onSelect(index)}
                                        className={`relative overflow-hidden rounded-2xl border ${activeIndex === index ? 'border-emerald-300/80 bg-white/10' : 'border-white/10 bg-white/5'} min-w-[112px] transition`}
                                        aria-label={`Show screenshot ${index + 1}`}
                                    >
                                        <div className="relative h-20 w-28 bg-[#030712]">
                                            <Image
                                                src={screenshot}
                                                alt={`${project.title} thumbnail ${index + 1}`}
                                                fill
                                                sizes="112px"
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="space-y-4">
                            <p className="whitespace-pre-line text-sm leading-7 text-slate-200/85">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.techList.map((tl, index) => (
                                    <span
                                        key={`${tl}-${index}`}
                                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-100/80"
                                    >
                                        #{tl}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm leading-7 text-slate-300/85">
                                {translator('showcaseSummary')}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4 sm:px-7">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                            {hasMultipleShots ? `${activeIndex + 1} / ${screenshots.length}` : translator('showcaseView')}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            {isProjectPublic(project) && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100 transition hover:border-emerald-300/80 hover:bg-emerald-500/20"
                                >
                                    {translator('openSource')}
                                    <LinkIcon className="h-4 w-4" enable />
                                </a>
                            )}
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                            >
                                {translator('close')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
