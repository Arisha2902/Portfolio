function Hero() {
  return (
    <section className="min-h-screen flex items-center px-12 lg:px-28 pt-10">
      <div className="w-full flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          <h1
            className="
            text-6xl
            md:text-7xl
            font-extrabold
            text-[#f2e9e4]
            leading-none
            drop-shadow-[0_0_20px_rgba(242,233,228,0.15)]
          "
          >
            Arisha Firoz
          </h1>

          <p
            className="
            mt-6
            uppercase
            tracking-[6px]
            text-[#c9ada7]
            text-sm
            md:text-lg
            font-medium
            whitespace-nowrap
          "
          >
            MACHINE LEARNING | AI | FULL STACK
          </p>

          <p
            className="
            mt-10
            text-[#c9ada7]
            text-lg
            leading-9
          "
          >
            Passionate about Artificial Intelligence, Machine Learning,
            Full Stack Development and building real-world applications.
            I enjoy solving complex problems and creating impactful software.
          </p>

          <div className="flex gap-5 mt-12">
            <a
            href="/resume.pdf"
            download
            className="
              px-8 py-4
              rounded-xl
              bg-[#2a2d4d]
              border border-[#9a8c98]
              text-[#f2e9e4]
              hover:bg-[#34385c]
              transition-all
              inline-block
            "
            >
  Download Resume
</a>

            <button
              className="
              px-8 py-4
              rounded-xl
              border border-[#9a8c98]
              text-[#f2e9e4]
              hover:bg-[#2a2d4d]
              transition-all
            "
            >
              View Projects
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center justify-center">
          <div
            className="
            w-96
            h-96
            rounded-full
            overflow-hidden
            border-4
            border-[#9a8c98]
            shadow-[0_0_40px_rgba(154,140,152,0.3)]
            p-3
          "
          >
            
            <img
            src="/profile.jpeg"
            alt="Arisha Firoz"
            className="w-[420px] h-[420px] object-cover object-center rounded-full"
          />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;