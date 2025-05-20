import Image from "next/image"
import { experience_data } from "@/app/data/experience"

interface ExperienceCardProps {
    company: string;
    logo: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
}

const ExperienceCard = (exp:ExperienceCardProps) => {
    return (
        <div className="flex flex-col lg:flex-row w-full shadow-lg rounded-3xl gap-2 items-top bg-background px-5 py-2 lg:px-10 lg:py-5">
            <div className="text-xl order-1 lg:order-1 font-semibold text-primary-foreground items-start justify-start">
                <div className="flex relative w-32 h-8 mb-2">
                    <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
            </div>
            <div className="flex flex-1 flex-col order-3 lg:order-2 mb-4 text-sm lg:text-lg text-muted-foreground min-h-30 justify-center px-0 lg:px-20">
                <div className="text-sm lg:text-lg font-semibold text-primary-foreground">
                    {exp.position}
                </div>
                <br />
                <div>
                    <ul className="lg:list-disc list-outside mb-4 text-sm">
                        {
                            exp.description.map((desc, index) => (
                                <li key={index} className="mb-4">
                                    {desc}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="flex flex-col order-2 lg:order-3 item-start lg:items-end justify-start text-primary-foreground">
                <div>
                    {exp.duration}
                </div>
                <div>
                    {exp.location}
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <div className="flex flex-col items-center justify-center bg-accent rounded-3xl py-3">
            <div className="text-xl lg:text-3xl font-bold text-primary-foreground">
                Experience
            </div>
            <div className="flex mb-4 text-sm lg:text-lg text-muted-foreground text-center">
                Here is a quick summary of my most recent experiences
            </div>
            <div className="grid grid-cols-1 gap-10 w-full px-2 lg:px-10">
                {
                    experience_data.map((exp) => (
                        <ExperienceCard
                            key={exp.company}
                            company={exp.company}
                            logo={exp.logo}
                            position={exp.position}
                            duration={exp.duration}
                            location={exp.location}
                            description={exp.description}
                        />
                    ))  
                }
            </div>
        </div>
    )
}