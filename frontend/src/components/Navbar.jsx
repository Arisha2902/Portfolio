function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#22223b]/80 backdrop-blur-md border-b border-[#9a8c98]/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-[#f2e9e4]">
          Arisha
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-[#c9ada7] font-medium text-lg">
          <a href="#about" className="hover:text-[#8B7CF7] transition">
            About
          </a>

          <a href="#skills"  className="hover:text-[#f2e9e4] transition duration-300">
            Skills
          </a>

          <a href="#projects"  className="hover:text-[#f2e9e4] transition duration-300">
            Projects
          </a>

          <a href="#experience" className="hover:text-[#f2e9e4] transition duration-300">
            Experience
          </a>

          <a href="#certificates"  className="hover:text-[#f2e9e4] transition duration-300">
            Certificates
          </a>
        </div>

        {/* Button */}
        <a
        href="#contact"
        className="
        px-6
        py-3
        rounded-xl
        border
        border-[#9a8c98]
        text-[#f2e9e4]
        bg-[#2a2d4d]/70
        hover:bg-[#34385c]
        hover:border-[#c9ada7]
        transition-all
        duration-300
        shadow-[0_0_20px_rgba(154,140,152,0.15)]
        " >
  Contact Me
</a>
       
      </div>
    </nav>
  );
}

export default Navbar;