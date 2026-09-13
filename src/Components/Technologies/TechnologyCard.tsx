import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { Itech } from "../../type/TechType";

const colorClasses: Record<string, string> = {
  cyan: "bg-cyan-100 text-cyan-600 border-cyan-200",
  blue: "bg-blue-100 text-blue-600 border-blue-200",
  green: "bg-green-100 text-green-600 border-green-200",
  gray: "bg-gray-100 text-gray-600 border-gray-200",
  emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
  yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
  sky: "bg-sky-100 text-sky-600 border-sky-200",
  black: "bg-black/10 text-black border-black/20",
  orange: "bg-orange-100 text-orange-600 border-orange-200",
  red: "bg-red-100 text-red-600 border-red-200",
};

interface Iprops {
  technology: Itech;
  selectedTechnologies: Itech[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itech[]>>;
}

function TechnologyCard({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: Iprops) {
  const handleSelectedTech = (tech: Itech) => {
    const isSelected = selectedTechnologies.some(
      (selectedTech) => selectedTech.id === tech.id,
    );
    if (isSelected) {
      toast.error(`${tech.name} is already selected `);
    } else {
      toast.success(`${tech.name} successfully added`);
      setSelectedTechnologies([...selectedTechnologies, tech]);
    }
  };

  return (
    <div className="p-4 border border-gray-300 flex flex-col gap-3 rounded-lg">
      <div className="flex flex-row justify-between items-start h-8">
        <img
          className="h-full object-contain"
          src={technology.icon}
          alt="icon"
        />
        <button
          className={`${colorClasses[technology.iconColor]} rounded-2xl px-2.5 text-sm font-bold`}
        >
          {technology.badge}
        </button>
      </div>
      <div className="flex flex-col items-start gap-3">
        <h3 className="text-lg font-bold ">{technology.name}</h3>
        <p className="text-[#87919e] text-sm">{technology.description}</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className=" text-[#49566a] text-sm bg-[#f4f7fa] px-2 py-1.5 rounded-lg">
          {technology.category}
        </button>
        <p className="text-sm text-[#87919e]">{technology.difficulty}</p>
        <div className=" text-sm text-[#fbbf24] flex flex-row gap-1 items-center">
          <i className="fa-solid fa-star"></i>
          <h4 className="text-[#334155]">{technology.rating}</h4>
        </div>
      </div>
      <button
        onClick={() => handleSelectedTech(technology)}
        className={`bg-[#0a0f1d] rounded-lg w-full py-2 text-white`}
      >
        Add to Stack
      </button>
    </div>
  );
}

export default TechnologyCard;
