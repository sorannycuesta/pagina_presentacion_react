// src/components/SkillsGrid.tsx
import GlassCard from "./GlassCard";
import skills from "../data/skills";

const SkillsGrid = () => {
  return (
    <>
      {skills.map((skill, index) => (
        <GlassCard key={index} className="p-6 hover:scale-105 transition">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{skill.icon}</span>
              <div>
                <div className="font-semibold">{skill.name}</div>
                <div className="text-sm text-gray-400">{skill.category}</div>
              </div>
            </div>

            <div className="text-2xl font-bold text-purple-400">
              {skill.level}%
            </div>
          </div>

          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </GlassCard>
      ))}
    </>
  );
};

export default SkillsGrid;
