import DownloadIcon from "@/components/icons/downloadIcon";
import ParticlesBackground from "@/features/landingPage/components/landingBackground";
import {useTranslations} from "next-intl";
import {BIO, GET_CV_BTN, LANDING_PAGE_T_NODE, OR, TITLE, VISIT_BTN} from "@/features/landingPage/landingPage.constants";
import CvBtn from "@/features/landingPage/components/cvBtn";

function Landing() {
    const t = useTranslations(LANDING_PAGE_T_NODE)
    return <div className="relative w-screen h-full flex items-center justify-center">
        <div className="absolute w-full h-full"><ParticlesBackground></ParticlesBackground></div>
        <div className="px-2 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 lg:px-8 z-10">
            <div className="px-20 basis-1/3 lg:px-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                        <mask id="triangleMask">
                            <rect x="0" y="0" width="100" height="100" fill="white"/>
                            <polygon points="1,98 98,50 100,100" fill="black"/>
                            <polygon points="0 100 100,100, 100,95 0,98" fill="black"/>
                        </mask>
                    </defs>
                    <polygon points="0,0 100,50 0,100" className="fill-accent"/>
                    <polygon points="1,2 98,50 1,98" className="fill-base-100"/>

                    <image
                        href="/landingAvatar.webp"
                        x="-17.3"
                        y="-10"
                        width="110"
                        height="110"
                        mask="url(#triangleMask)"
                    />
                </svg>
            </div>
            <div
                className="lg:h-full basis-2/3 items-center justify-center bg-base-100 py-4 px-0.5 rounded-md">
                <h1 className="text-center lg:text-left text-3xl lg:text-5xl font-bold w-full">{t(TITLE)}</h1>
                <p className="text-center whitespace-pre-line px-4 mt-2 md:mt-4 lg:text-left text-base md:text-lg lg:text-2xl">
                    {t(BIO)}</p>
                <div className="mt-4 flex justify-center content-evenly items-center gap-4 lg:mt-8">
                    <a href="#experience" aria-label="Visit the page">
                        <button className="btn btn-outline btn-primary">{t(VISIT_BTN)}</button>
                    </a>
                    <p className="text-center lg:text-left text-base lg:text-2xl">{t(OR)}</p>
                    <CvBtn/>
                </div>
            </div>
        </div>

    </div>
}

export default Landing