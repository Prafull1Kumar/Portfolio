"use client"
import { useEffect, useState } from "react";

export function useIsOutOfView(selector, threshold = 0.3) {
    const [isOutOfView, setIsOutOfView] = useState(false);

    useEffect(() => {
        const target = document.querySelector(selector);
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsOutOfView(!entry.isIntersecting);
            },
            {
                root: null,
                threshold,
            }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [selector, threshold]);

    return isOutOfView;
}