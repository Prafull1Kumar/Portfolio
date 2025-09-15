"use client"
import {useEffect, useRef, useState} from "react"
import {HOME_SECTION} from "@/features/landingPage/landingPage.constants";
import SectionMetadata from "@/components/logic/sectionMetadata";

const sectionTitles = {
    home: 'Tvoosai',
    experience: 'Experience — Tvoosai',
    skills: 'Skills — Tvoosai',
    projects: 'Projects — Tvoosai',
    contact: 'Contact — Tvoosai'
}

function ScrollSyncUrl() {
    const [currentSection, setCurrentSection] = useState('home')
    const current = useRef(null)
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        sections.forEach(s => console.log(`sections are ${s.getAttribute('id')}`))

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return
                const id = entry.target.getAttribute('id')
                if (id && id !== current.current) {
                    const newUrl = id !== HOME_SECTION ? `/#${id}` : '/'
                    history.replaceState(null, '', newUrl)
                    setCurrentSection(id)
                    current.current = id
                }
            })
        }, {
            threshold: 0.15, rootMargin: '0px 0px -40% 0px',
        })
        sections.forEach(section => observer.observe(section))
        return () => sections.forEach(section => observer.unobserve(section))
    }, [])
    return <>
        {currentSection && <SectionMetadata sectionId={currentSection}/>}
    </>

}

export default ScrollSyncUrl