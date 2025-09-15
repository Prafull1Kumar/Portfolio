import {useEffect} from "react";
import {useTranslations} from "next-intl";

export default function SectionMetadata({ sectionId }) {
    const t = useTranslations('meta')
    useEffect(() => {
        const title = t(`${sectionId}.title`)
        const description = t(`${sectionId}.description`)

        document.title = title

        const setMeta = (nameOrProperty, content, isProperty = false) => {
            const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`
            let tag = document.querySelector(selector)
            if (!tag) {
                tag = document.createElement('meta')
                if (isProperty) tag.setAttribute('property', nameOrProperty)
                else tag.setAttribute('name', nameOrProperty)
                document.head.appendChild(tag)
            }
            tag.setAttribute('content', content)
        }

        setMeta('description', description)
        setMeta('og:title', title, true)
        setMeta('og:description', description, true)
    }, [sectionId, t])

    return null
}