import ParticlesBackground from "@/features/landingPage/components/landingBackground";

export default function GlobalNotFound() {
    return (
        <>
            <div className="relative w-screen h-screen flex items-center justify-center">
                <ParticlesBackground is404={true}></ParticlesBackground>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 bg-base-100 p-16 rounded-md">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="text-2xl mt-2">Not Found</p>
                    <a href="/" className="btn btn-primary btn-outline mt-3 w-full">HOME</a>
                </div>
            </div>
        </>
    )
}