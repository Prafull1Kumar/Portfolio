import WorkIcon from "@/components/icons/workIcon.jsx";
import StudyIcon from "@/components/icons/studyIcon.jsx";
import { UTDIcon, AWSIcon, LivSYTIcon, ArthIcon, IITKGPIcon, CodeHerokuIcon } from "@/components/icons/companyLogos.jsx";

// eslint-disable-next-line react/prop-types
function TimelineIcon({work = true, company = ''}) {
    const getIcon = () => {
        switch(company) {
            case 'UTD':
                return <UTDIcon />;
            case 'AWS':
                return <AWSIcon />;
            case 'LIVSYT':
                return <LivSYTIcon />;
            case 'ARTH':
                return <ArthIcon />;
            case 'IITKGP':
                return <IITKGPIcon />;
            case 'CODEHEROKU':
                return <CodeHerokuIcon />;
            default:
                return work ? <WorkIcon /> : <StudyIcon />;
        }
    };

    return (
        <div className="timeline-middle flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-white shadow-[0_0_25px_rgba(34,197,94,0.35)]">
            {getIcon()}
        </div>
    )
}

export default TimelineIcon
