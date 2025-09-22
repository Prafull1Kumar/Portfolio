const IconWrapper = ({ children, className = "" }) => (
    <div className={`w-10 h-10 flex items-center justify-center bg-white rounded-md overflow-hidden ${className}`}>
        {children}
    </div>
);

export function UTDIcon() {
    return (
        <IconWrapper>
            <img
                src="/company-logos/utd_logo.jpeg"
                alt="UTD Logo"
                className="w-[90%] h-[90%] object-contain"
            />
        </IconWrapper>
    );
}

export function AWSIcon() {
    return (
        <IconWrapper>
            <img
                src="/company-logos/aws_logo.jpeg"
                alt="AWS Logo"
                className="w-[90%] h-[90%] object-contain"
            />
        </IconWrapper>
    );
}

export function LivSYTIcon() {
    return (
        <IconWrapper>
            <img
                src="/company-logos/livsyt_logo.jpeg"
                alt="LivSYT Logo"
                className="w-[90%] h-[90%] object-contain"
            />
        </IconWrapper>
    );
}

export function ArthIcon() {
    return (
        <IconWrapper>
            <img
                src="/company-logos/arth_logo.jpeg"
                alt="Arth Logo"
                className="w-[90%] h-[90%] object-contain"
            />
        </IconWrapper>
    );
}

export function IITKGPIcon() {
    return (
        <IconWrapper>
            <img
                src="/company-logos/iitkgp_logo.jpeg"
                alt="IIT KGP Logo"
                className="w-[90%] h-[90%] object-contain"
            />
        </IconWrapper>
    );
}

export function CodeHerokuIcon() {
    return (
        <IconWrapper>
            <img
                src="/company-logos/codeheroku_logo.jpeg"
                alt="CodeHeroku Logo"
                className="w-[90%] h-[90%] object-contain"
            />
        </IconWrapper>
    );
}
