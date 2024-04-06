import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Advjavanavbar from "./Advjavanavbar";
import Advjava from "./Advjava";
import Driver from "./advjavatopics/Driver";
export default function AppJava() {
  return (
    <>
    <Routes>
        <Route className="routes" path="/" element={ <Advjavanavbar /> }>
          <Route index element={<Advjava />} />
        <Route path="driver" element={<Driver />} />
       
        </Route>
      </Routes>
    </>
  );
}
