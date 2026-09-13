import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { Itech } from "../../type/TechType";

interface Iprops {
  technology: Itech;
  selectedTechnologies: Itech[];
  setSelectedTechnologies: Dispatch<SetStateAction<Itech[]>>;
}
function SelectedTechnologyCard({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: Iprops) {
  const handleUnselectedTech = (tech: Itech) => {
    toast.warning(`${tech.name} is removed`);
    const newTechnologies = selectedTechnologies.filter(
      (technology) => technology.id != tech.id,
    );
    setSelectedTechnologies(newTechnologies);
  };

  return (
    <div className="p-3 border border-gray-300 flex mt-7 flex-row justify-between items-center max-w-ful rounded-lg">
      <div className="flex flex-row gap-4 h-10 items-center">
        <img className="h-full object-contain" src={technology.icon} alt="" />
        <div>
          <p className="text-sm font-bold">{technology.name}</p>
          <p className="text-[12px] text-[#49566a] ">{technology.category}</p>
        </div>
      </div>
      <button
        onClick={() => handleUnselectedTech(technology)}
        className="cursor-pointer"
      >
        <i className=" text-[#49566a] text-2xl fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default SelectedTechnologyCard;
