import { ArrowUpRight, Sparkles } from 'lucide-react'

const skills = ['Python', 'Generative AI', 'AI evaluation', 'React', 'FastAPI', 'Docker', 'Git', 'GitHub']

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071b3a] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <section aria-labelledby="intro-title" className="max-w-3xl">
            <div className="mb-10 flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-blue-200/80 uppercase">
              <span className="flex size-9 items-center justify-center rounded-full border border-blue-200/25 bg-blue-100/10">
                <Sparkles aria-hidden="true" className="size-4" />
              </span>
              Personal calling card
            </div>

            <p className="mb-5 text-sm font-semibold tracking-[0.24em] text-blue-200 uppercase">Hello, I&apos;m</p>
            <h1 id="intro-title" className="max-w-2xl text-5xl leading-[0.96] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Simran
              <span className="block text-blue-200">Sharma.</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-blue-50/85 sm:text-2xl">
              AI and IT professional focused on Generative AI, AI evaluation, and software development.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6 text-sm text-blue-100/70">
              <span>Practical technology projects</span>
              <span aria-hidden="true" className="hidden text-blue-300/50 sm:inline">/</span>
              <span>Thoughtful AI systems</span>
            </div>
          </section>

          <aside className="relative">
            <div aria-hidden="true" className="absolute -inset-8 rounded-[2rem] bg-blue-400/10 blur-3xl" />
            <div className="relative rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-7 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold tracking-[0.18em] text-blue-200 uppercase">What I work with</p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-blue-50/65">Tools and areas I use to turn ideas into useful, working software.</p>
                </div>
                <span aria-hidden="true" className="font-mono text-sm text-blue-200/60">01</span>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Skills and technologies">
                {skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-blue-100/20 bg-blue-100/10 px-3.5 py-2 text-sm text-blue-50/90">
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-white/15" />

              <a
                className="group flex items-center justify-between rounded-2xl bg-blue-100 px-4 py-4 text-[#071b3a] transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071b3a]"
                href="https://github.com/simran21102"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-3">
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.16em] uppercase opacity-60">Find me on</span>
                    <span className="block text-sm font-semibold">GitHub</span>
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}


