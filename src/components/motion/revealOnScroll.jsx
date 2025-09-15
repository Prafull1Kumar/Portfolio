"use client"
import {useEffect, useRef, cloneElement} from "react";

function RevealOnScroll({children}) {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'scale-0', 'pointer-events-none')
                }
            }, {threshold: 0.1}
        )
        if (ref.current) observer.observe(ref.current)
        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])
    return cloneElement(children, { ref });
}

export default RevealOnScroll