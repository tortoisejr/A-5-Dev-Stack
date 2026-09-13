import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Technologies from "./Components/Technologies/Technologies";
import type { Itech } from "./type/TechType";

const fetchData = async (): Promise<Itech[]> => {
  const promise = await fetch("/data.json");
  const result = await promise.json();
  return result;
};

function App() {
  const [technologiesPromise] = useState(() => fetchData());
  return (
    <>
      <ToastContainer />
      <div>
        <Nav></Nav>
        <Banner></Banner>

        <Suspense
          fallback={<p className="text-2xl text-center">Loding ....</p>}
        >
          <Technologies
            technologiesPromise={technologiesPromise}
          ></Technologies>
        </Suspense>
      </div>
    </>
  );
}

export default App;
