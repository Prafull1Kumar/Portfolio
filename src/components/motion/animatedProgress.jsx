"use client"

import {useEffect, useRef, useState, cloneElement} from "react";

function AnimatedProgress({children, value}) {
    const progressRef = useRef(null)

    useEffect(() => {
        const progressElement = progressRef.current;
        if (!progressElement) return;

        progressElement.value = 0

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                requestAnimationFrame(() => {
                    entry.target.value = value
                })
                observer.disconnect()
            }
        }, {threshold: 0.1});

        observer.observe(progressElement);

        return () => observer.disconnect();
    }, [])


    return cloneElement(children, {ref: progressRef})
}

export default AnimatedProgress