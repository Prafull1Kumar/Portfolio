import WorkIcon from "@/components/icons/workIcon.jsx";
import StudyIcon from "@/components/icons/studyIcon.jsx";
import FadeComponent from "../../../components/motion/fadeComponent.jsx";

// eslint-disable-next-line react/prop-types
function TimelineIcon({work = true}) {
    return <div className="timeline-middle">
        {work ? <WorkIcon></WorkIcon> : <StudyIcon></StudyIcon>}
    </div>
}

export default TimelineIcon