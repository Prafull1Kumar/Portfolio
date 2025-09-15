"use client"

import {useEffect} from "react";

function HomeDetector() {
    useEffect(() => {
        const handleClick = (e) => {
            const anchor = e.target.closest?.('a');
            if (anchor && anchor.getAttribute('href') === '#home') {
                e.preventDefault();
                history.replaceState(null, '', '/');
                window.scrollTo({ top: 0, behavior: 'smooth' }); // o 'auto'
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return null
}

export default HomeDetector