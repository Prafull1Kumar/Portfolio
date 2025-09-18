'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GithubContributions() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">
            <div className="flex flex-col items-center justify-center space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                    GitHub Contributions
                </h2>
                <div className="w-full overflow-x-auto bg-white/5 rounded-xl p-4 md:p-8">
                    <GitHubCalendar 
                        username="Prafull1Kumar"
                        colorScheme='dark'
                        fontSize={12}
                        blockSize={12}
                        blockMargin={4}
                        style={{
                            margin: '0 auto',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
