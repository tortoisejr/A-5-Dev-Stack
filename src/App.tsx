import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <ToastContainer />
      <div>
        <Nav></Nav>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
