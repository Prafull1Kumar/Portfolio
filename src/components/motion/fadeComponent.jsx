"use client"
import {useEffect, useRef} from "react";

function FadeComponent({children}) {
    const elementRef = useRef(null)
    useEffect(() => {
        const element = elementRef.current

        if (!element) return

        const obs = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) entry.target.classList.add('animate-fade-in')
            }, {
                threshold:  0.1
            })
        obs.observe(element)
        return () => obs.disconnect()
    }, []);

    return <div ref={elementRef}
                className="delay-100">
        {children}
    </div>
}

export default FadeComponent