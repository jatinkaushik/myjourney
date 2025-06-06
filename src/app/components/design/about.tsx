import Image from "next/image";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

function SharkTankHeading() {
    return (
        <div className="flex flex-col items-center lg:items-start mb-10">
            <h2 className="text-xl lg:text-3xl font-bold text-muted-foreground">
                Featured on <span className="text-foreground">Shark Tank</span>
            </h2>
            <h5 className="text-muted-foreground font-semibold leading-relaxed">
                Curious about me? Here you have it
            </h5>
        </div>
    )
}

export default function About() {
  return (
    <div className="my-15 rounded-3xl bg-accent p-5 lg:p-10">
      {/* Section Heading */}
      <div className="lg:hidden">
        <SharkTankHeading />
      </div>
      
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row">
        {/* Image Container with styled border and shadow */}
        <div className="w-full lg:w-1/3 relative mb-5 lg:mb-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-dp-from-background to-dp-to-background rounded-2xl transform rotate-1 scale-[1.02] opacity-70"></div>
          <div className="relative w-full h-[300px] lg:min-h-[360px]">
            <Image
              src="/assets/images/CureSeeShrakTank.jpg"
              alt="CureSee on Shark Tank India"
              className="rounded-2xl shadow-xl object-cover relative z-10"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
        
        {/* Content Container */}
        <div className="w-full lg:w-2/3 lg:pl-10 lg:flex flex-col lg:justify-start">
            <div className="hidden lg:block">
                <SharkTankHeading />
            </div>
            <p className="text-muted-foreground">
              I&apos;m passionate about using technology to solve real-world problems. As the technical founder of CureSee, I built a vision therapy solution that has helped over 9,000 patients improve their eyesight. Being featured on Shark Tank India was a key moment in my career, teaching me storytelling, negotiation, and resilience—skills essential for remote work. This experience showed me the power of innovation and collaboration. When I&apos;m not coding, I enjoy exploring tech trends, reading about startups, and savoring a good cup of coffee.
            </p>
            {/* Social Media Links */}
            <div className="flex justify-start mt-10">
              <a href="https://www.linkedin.com/in/kaushikjatin/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground mx-2">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.youtube.com/watch?v=D2tnI5_t7W4&t=20s" target="_blank" rel="noopener noreferrer" className="text-muted-foreground mx-2">
                <FaYoutube size={30} />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}