import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Transform Your Digital Experience
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl">
              Powerful solutions to help your business grow. Start your journey with us today and see the difference.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href="#get-started"
              className="inline-block rounded-md bg-white px-6 py-3 text-lg font-medium text-slate-900 hover:bg-slate-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}