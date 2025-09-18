import WorkIcon from "@/components/icons/workIcon.jsx";
import StudyIcon from "@/components/icons/studyIcon.jsx";
import { UTDIcon, AWSIcon, LivSYTIcon, ArthIcon, IITKGPIcon, CodeHerokuIcon } from "@/components/icons/companyLogos.jsx";
import FadeComponent from "../../../components/motion/fadeComponent.jsx";

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
        <div className="timeline-middle flex items-center justify-center">
            {getIcon()}
        </div>
    )
}

export default TimelineIcon