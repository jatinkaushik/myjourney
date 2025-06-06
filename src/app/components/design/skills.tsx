import {skills_data} from "@/app/data/skills";
import Image from "next/image";

// Define a proper interface for the props
interface SkillItemProps {
    name: string;
    icon: string;
}

export const SkillItem = ({name, icon}: SkillItemProps) => {
    return (
        <div className="p-4 m-2">
            <div className="relative w-16 h-16 mb-2">
                <Image src={icon} alt={`${name} icon`} fill className="object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-primary-foreground">{name}</h3>
        </div>
    );
}

export default function Skills() {
    return (
    <div className="flex flex-col items-center justify-center mb-10">
        <div className="text-xl md:text-3xl font-bold text-primary-foreground">
            Skills
        </div>
        <div className="mb-4 text-sm md:text-lg font-semibold text-muted-foreground">
            Here are some of the technologies I work with       
        </div>
        <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
        {skills_data.map((skill) => (
            <SkillItem
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
            />
        ))}
        </div>
    </div>
  );
}