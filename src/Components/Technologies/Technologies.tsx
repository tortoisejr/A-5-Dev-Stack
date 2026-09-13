import { Suspense, use, useState } from "react";
import { toast } from "react-toastify";
import type { Itech } from "../../type/TechType";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import TechnologyCard from "./TechnologyCard";
interface Iprops {
  technologiesPromise: Promise<Itech[]>;
}

function Technologies({ technologiesPromise }: Iprops) {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Itech[]>([]);
  const allTechnologies = use(technologiesPromise);
  const handleAllUnselect = () => {
    toast.warning("Remove all the selected Tech");
    setSelectedTechnologies([]);
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-start gap-3 mb-15">
        <h2 className="font-inter font-bold text-3xl">
          Explore the <span className="text-[#ec4897]">Technologies</span>
        </h2>
        <p className=" text-[#87919e]">
          Pick one technology per category to build your ideal stack
        </p>
      </div>
      <div className=" grid grid-cols-12 gap-6">
        <Suspense
          fallback={<p className="text-2xl text-center">Loding ....</p>}
        >
          <div className=" col-span-9 grid grid-cols-3 gap-4">
            {allTechnologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                technology={tech}
                selectedTechnologies={selectedTechnologies}
                setSelectedTechnologies={setSelectedTechnologies}
              ></TechnologyCard>
            ))}
          </div>
        </Suspense>
        <div className=" border border-gray-300 rounded-lg p-4 col-span-3 h-fit">
          <h3 className="text-2xl font-semibold">Your Stack</h3>
          {selectedTechnologies.length > 0 ? (
            <h5 className="text-[#87919e] text-start">
              {selectedTechnologies.length} Technology selected
            </h5>
          ) : (
            <h5 className="text-[#87919e] text-start">
              No technologies selected yet
            </h5>
          )}
          {selectedTechnologies.length <= 0 && (
            <div className="mt-7 border border-dotted border-gray-700 rounded-lg h-35 flex justify-center items-center">
              <p className="text-[#87919e]">Your Stack is empty</p>
            </div>
          )}
          {selectedTechnologies.map((tech) => (
            <SelectedTechnologyCard
              technology={tech}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            ></SelectedTechnologyCard>
          ))}
          {selectedTechnologies.length > 0 && (
            <button
              onClick={handleAllUnselect}
              className="w-full py-1 border border-red-500 text-red-500 text-lg font-bold mt-10 rounded-2xl"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
