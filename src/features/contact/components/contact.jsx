import MarkerIcon from "@/components/icons/markerIcon";
import MailIcon from "@/components/icons/mailIcon";
import PhoneIcon from "@/components/icons/phoneIcon";
import ContactForm from "@/features/contact/components/contactForm";
import {useTranslations} from "next-intl";
import {CONTACT_T_NODE, LOCATION, RIGHTS} from "@/features/contact/contact.constants";

function Contact() {
    const t = useTranslations(CONTACT_T_NODE)
    const navT = useTranslations('navbar')
    const contactBlocks = [
        {
            icon: <MailIcon className="h-6 w-6 text-emerald-300"/>,
            label: 'Email',
            value: 'prajapatiprafull12@gmail.com',
            href: 'mailto:prajapatiprafull12@gmail.com'
        },
        {
            icon: <PhoneIcon className="h-6 w-6 text-emerald-300"/>,
            label: 'Phone',
            value: '+1 9452685954',
            href: 'tel:+19452685954'
        },
        {
            icon: <MarkerIcon className="h-6 w-6 text-emerald-300"/>,
            label: 'Location',
            value: t(LOCATION)
        }
    ]
    return <div className="space-y-10">
        <div className="section-heading">
            <span className="eyebrow">connect</span>
            <h2><span>{navT('contact')}</span></h2>
            <p className="max-w-2xl text-base text-slate-300/80">
                Ready for the next challenge? I’d love to hear about your product, research, or platform vision.
            </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glow-card rounded-[28px] border border-white/10 bg-white/5 p-6 lg:p-8">
                <ContactForm />
            </div>
            <div className="space-y-8">
                {contactBlocks.map((block, idx) => (
                    <div key={idx}
                         className="glow-card flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                        {block.icon}
                        <div>
                            <p className="text-xs uppercase tracking-[0.4em] text-slate-300/80">{block.label}</p>
                            {block.href ? (
                                <a href={block.href} className="text-lg font-semibold text-white hover:text-emerald-200">
                                    {block.value}
                                </a>
                            ) : (
                                <p className="text-lg font-semibold text-white">{block.value}</p>
                            )}
                        </div>
                    </div>
                ))}
                <p className="text-center text-xs uppercase tracking-[0.4em] text-slate-400">{t(RIGHTS)}</p>
            </div>
        </div>
    </div>

}

export default Contact
