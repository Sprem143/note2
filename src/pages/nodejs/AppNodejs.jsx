import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NodejsHome from "./NodejsHome";
import NodejsNavbar from "./NodejsNavbar";
import Module from "./topics/Module";
export default function AppNodejs() {
  return (
    <>
      <Routes>
      <Route className="routes" path="/" element={ <NodejsNavbar /> }>
      <Route index element={<NodejsHome />} />
      <Route path="module" element={<Module/>}/>
       
      </Route>
      </Routes>
    </>
  );
}
