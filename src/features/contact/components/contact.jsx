import MarkerIcon from "@/components/icons/markerIcon";
import MailIcon from "@/components/icons/mailIcon";
import PhoneIcon from "@/components/icons/phoneIcon";
import ContactForm from "@/features/contact/components/contactForm";
import {useTranslations} from "next-intl";
import {CONTACT_T_NODE, CONTACT_TITLE, LOCATION, RIGHTS} from "@/features/contact/contact.constants";

function Contact() {
    const t = useTranslations(CONTACT_T_NODE)
    return <footer className="footer w-full bg-base-200">
        <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center min-h-[75vh] px-8 lg:px-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 w-full items-start pt-0.5 lg:pt-0">
                <div className="w-full lg:w-1/2 pt-6 lg:pt-0">
                    <ContactForm />
                </div>
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="footer-title text-xl lg:text-2xl">{t(CONTACT_TITLE)}</h2>
                    <div className="flex items-center gap-8 mt-5">
                        <MailIcon className="size-6" />
                        <a className="link link-hover text-lg" href="mailto:prafull.prajapati@utdallas.edu">prafull.prajapati@utdallas.edu</a>
                    </div>
                    <div className="flex items-center gap-8 mt-5">
                        <PhoneIcon />
                        <a className="link link-hover text-lg" href="tel:+19452685954">+1 (945) 268-5954</a>
                    </div>
                    <div className="flex items-center gap-8 mt-5">
                        <MarkerIcon />
                        <p className="text-lg">{t(LOCATION)}</p>
                    </div>
                </div>
            </div>
            <p className="footer-title mt-8 text-center">{t(RIGHTS)}</p>
        </div>
    </footer>

}

export default Contact