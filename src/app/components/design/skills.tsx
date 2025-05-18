import skills_data from "@/app/data/skills";

export const SkillItem = ({name, icon}:any) => {
    return (
        <div className="p-4 m-2">
            <img src={icon} alt={`${name} icon`} className="w-16 h-16 mb-2" />
            <h3 className="text-sm font-semibold text-primary-foreground">{name}</h3>
        </div>
    );
}

export default function Skills() {
    return (
    <div className="flex flex-col items-center justify-center">
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