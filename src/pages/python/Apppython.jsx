import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Numpy from "./pythontopics/Numpy";
import Panda from "./pythontopics/Panda";
import Seaborn from "./pythontopics/Seaborn";
export default function Apppython() {
  return (
    <>
      <Routes className="routes" path="/" >
        <Route path="numpy" element={<Numpy />} />
        <Route path="panda" element={<Panda />} />
        <Route path="seaborn" element={<Seaborn />} />
      </Routes>
    </>
  );
}
