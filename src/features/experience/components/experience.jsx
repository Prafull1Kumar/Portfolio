import ExperienceEntry from "@/features/experience/model/experienceEntry";
import RevealOnScroll from "@/components/motion/revealOnScroll";
import TimelineIcon from "@/features/experience/components/timelineIcon";
import TimelineElement from "@/features/experience/components/timelineElement";
import {useTranslations} from "next-intl";
import {
    UTD_MASTERS,
    AWS_INTERN,
    LIVSYT_LEAD,
    ARTH_DEV,
    IIT_KGP,
    RESEARCH,
    ACHIEVEMENTS,
    EXPERIENCE_T_NODE
} from "@/features/experience/experience.constants";

const keys = [
    {id: UTD_MASTERS, isWork: false},
    {id: AWS_INTERN, isWork: true},
    {id: LIVSYT_LEAD, isWork: true},
    {id: ARTH_DEV, isWork: true},
    {id: IIT_KGP, isWork: false},
    {id: RESEARCH, isWork: false},
    {id: ACHIEVEMENTS, isWork: false}
]
const experiences = [new ExperienceEntry("Bachelor's Degree in Computer Science @Unimi", "During my time at the University of Milan (Unimi), I pursued a Bachelor's degree in Computer\n" + "                    Science,\n" + "                    developing a solid foundation in key areas of the field such as algorithms, data structures,\n" + "                    programming,\n" + "                    operating systems, and databases. Alongside my studies, I worked full-time,\n" + "                    which limited the time I could fully dedicate to university. As a result,\n" + "                    I decided to pause my studies to focus on my professional growth and career development.\n" + "                    This decision allowed me to gain valuable hands-on experience in software development,\n" + "                    which has been instrumental in shaping my technical skills.", "2016-2018", false), new ExperienceEntry("Android developer @DSGroup", "During this time, I worked on a B2B project for Poste Italiane, collaborating with designers,\n" + "                    backend developers,\n" + "                    and analysts to find the best solutions. This experience allowed me to work with both legacy and\n" + "                    modern approaches to Android development.\n" + "                    On the legacy side, I worked with Java, MVC, MVP, SQLite, and Room on devices running older versions\n" + "                    of the operating system.\n" + "                    On the other hand, I also gained experience with newer technologies such as Android Jetpack, Kotlin,\n" + "                    MVVM, LiveData, Room, and Retrofit,\n" + "                    working on more innovative solutions. Additionally, I was responsible for implementing both UI and\n" + "                    non-UI tests\n" + "                    (including unit tests and integration tests), ensuring the quality and reliability of the\n" + "                    applications we developed.", "2018-2020"), new ExperienceEntry("Android/Flutter Developer & Scrum Member \n@DSGroup", "During this period, I worked on projects for Enel, developing applications both for Android and\n" + "                    using Flutter.\n" + "                    This experience gave me a comprehensive understanding of the Android operating system, as I had to\n" + "                    work at a lower level,\n" + "                    utilizing content providers and other system components. As a member of a Scrum team,\n" + "                    I was the only developer coordinating directly with the analyst for the implementation of two major\n" + "                    projects.\n" + "                    This role taught me how to handle large-scale projects independently, requiring strong\n" + "                    problem-solving and project management skills.\n" + "                    I was involved in the entire development lifecycle, from design and architecture to implementation\n" + "                    and testing,\n" + "                    gaining valuable experience in working autonomously on complex projects.", "2018-2020"), new ExperienceEntry("ATC Flutter Certified Application Developer", "I obtained the ATC Flutter Certified Application Developer certification, which further validated my\n" + "                    expertise\n" + "                    in Flutter and Dart for mobile application development.", "2023", false), new ExperienceEntry("Google Developers Android Certification", "I obtained the Google Developers Android Certification, validating my skills in Android application development and reinforcing my expertise in building high-quality, scalable Android apps.", "2023", false), new ExperienceEntry("PSM1 (Professional Scrum Master I)", "The Professional Scrum Master I (PSM I) certification demonstrates my understanding of Scrum\n" + "                    principles and practices,\n" + "                    focusing on the Scrum Master role. I gained skills in facilitating teams, resolving conflicts, and\n" + "                    optimizing workflows\n" + "                    to ensure continuous improvement and efficient Agile processes.", "2023", false), new ExperienceEntry("Flutter Developer & Product designer \n@Kurt", "I briefly collaborated with a startup focused on connecting people who enjoy playing soccer. During\n" + "                    this time,\n" + "                    I contributed to the development of new features and made a significant impact on improving the user\n" + "                    experience based on feedback from users.\n" + "                    To this day, the voting system I designed is still in use.", "2024",), new ExperienceEntry("Resuming university", "I decided to leave my full-time job and pursue a freelance career as a developer to better manage my\n" + "                    time and complete my university studies.\n" + "                    This decision was driven by my desire to continuously learn new skills. Since returning to\n" + "                    university,\n" + "                    I've enhanced my knowledge in functional programming and developed a strong passion for\n" + "                    cybersecurity.", "2024", false),]

function Experience() {
    const exp = translateExperiences(useTranslations(EXPERIENCE_T_NODE))
    return <ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
    >
        {exp.map((item, index) => (<RevealOnScroll key={index}>
            <li className="transition-all duration-1000 delay-100 ease-out opacity-0 scale-0 pointer-events-none">
                <hr/>
                <TimelineIcon work={item.work}></TimelineIcon>
                <TimelineElement left={index % 2 === 0} time={item.time} title={item.title}>
                    {item.description}
                </TimelineElement>
                <hr/>
            </li>
        </RevealOnScroll>))}
    </ul>

}

function translateExperiences(t) {
    return keys.map(entry =>
        new ExperienceEntry(
            t(`${entry.id}.title`),
            t(`${entry.id}.description`),
            t(`${entry.id}.time`),
            entry.isWork
        ))
}


export default Experience