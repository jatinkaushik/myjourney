import Image from "next/image";

function SharkTankHeading() {
    return (
        <div className="flex flex-col items-center md:items-start mb-10">
            <h2 className="text-xl md:text-3xl font-bold text-muted-foreground">
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
    <div className="my-15">
      {/* Section Heading */}
      <div className="md:hidden">
        <SharkTankHeading />
      </div>
      
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row">
        {/* Image Container with styled border and shadow */}
        <div className="w-full md:w-1/3 relative mb-5 md:mb-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-dp-from-background to-dp-to-background rounded-2xl transform rotate-1 scale-[1.02] opacity-70"></div>
          <div className="relative w-full h-[300px] md:h-full">
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
        <div className="w-full md:w-2/3 pl-10 mb:pl-10 md:flex flex-col mb:justify-start">
            <div className="hidden md:block">
                <SharkTankHeading />
            </div>
            <ul className="list-disc text-muted-foreground list-outside mb-4">
                <li className="mb-4">
                    Led the creation of Vision Therapy Software and EMR from scratch, treated over 9000 patients and enabling billion seconds of therapy.
                </li>
                <li className="mb-4">
                    Designed and developed full-stack solutions using ReactJS with Redux for frontend, Flask for backend, and MySQL for database management.
                </li>
                <li className="mb-4">
                    Architected scalable infrastructure with Docker, streamlining deployment across multiple environments.
                </li>
                <li className="mb-4">
                    Implemented CI/CD pipelines using Jenkins, automating testing and deployment processes.
                </li>
                <li className="mb-4">
                    Implemented Agentic AI for autonomous decision-making in financial products, improving efficiency by 80% (Agentic AI: autonomous systems for complex workflows).
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}