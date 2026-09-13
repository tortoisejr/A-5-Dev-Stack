import { Suspense, use, useState } from "react";
import type { Itech } from "../../type/TechType";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import TechnologyCard from "./TechnologyCard";
interface Iprops {
  technologiesPromise: Promise<Itech[]>;
}

function Technologies({ technologiesPromise }: Iprops) {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Itech[]>([]);
  const allTechnologies = use(technologiesPromise);
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
        <div className=" col-span-3">
          <SelectedTechnologyCard></SelectedTechnologyCard>
          <SelectedTechnologyCard></SelectedTechnologyCard>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
