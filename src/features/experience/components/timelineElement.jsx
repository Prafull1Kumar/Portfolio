// eslint-disable-next-line react/prop-types
function TimelineElement({left = true, time, title, children}) {
    const alignment = left ? 'timeline-start lg:text-right lg:items-end' : 'timeline-end'
    return <div className={`${alignment} mt-4 flex max-w-xl flex-col ${left ? 'text-left lg:text-right' : 'text-left'} ${left ? 'lg:self-end' : ''}`}>
        <div className="glow-card border border-white/10 bg-white/5 p-6">
            <time className="text-xs uppercase tracking-[0.4em] text-emerald-200">{time}</time>
            <div className="mt-2 text-xl font-semibold text-white lg:text-2xl">{title}</div>
            <p className="mt-3 text-sm text-slate-300/90 whitespace-pre-line">{children}</p>
        </div>
    </div>
}

export default TimelineElement
