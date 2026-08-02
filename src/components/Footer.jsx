import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Full Stack Web Development</p>
          <p>React, Next.js, Node.js</p>
          <p>Clean, Scalable, Modern UI</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>Available for freelance &amp; full-time roles</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Work</a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Worldwide Available</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          tamilarasu
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Tamilarasu | Built with React
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-center">
          <a href="mailto:tamilarasutom123@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">tamilarasutom123@gmail.com</a>
          <a href="tel:+918148525594" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">+91 81485 25594</a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a href="https://github.com/Tamilarasu04" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">GitHub</a>
          <a href="https://www.linkedin.com/in/tamilarasu-p-649bba25a" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">LinkedIn</a>
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
