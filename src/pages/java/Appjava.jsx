import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Accessmodifier from "./javatopics/Accessmodifier";
import Array from "./javatopics/Array";
import CodingStandard from "./javatopics/CodingStandard";
import Collection from './javatopics/Collection';
import Commandlinearg from './javatopics/Commandlinearg';
import Datatype from './javatopics/Datatype';
import Declaration from './javatopics/Declaration';
import FlowControl from './javatopics/FlowControl';
import Interface from './javatopics/Interface';
import Languagefundamental from './javatopics/Languagefundamental';
import Mainmethod from './javatopics/Mainmethod';
import Multithreading from './javatopics/Multithreading';
import OperatorAssignment from './javatopics/OperatorAssignment';
import Opps from './javatopics/Opps';
import Vararg from './javatopics/Varargs';
import Variable from './javatopics/Variable';
import JavaHome from "./JavaHome";
import Jnavbar from "./Jnavbar";
import JDBC from "./javatopics/JDBC";
import Quize from "./Quize";
import Advjava from "../advjava/Advjava";
export default function AppJava() {
  return (
    <>
    <Routes>
        <Route className="routes" path="/" element={ <Jnavbar /> }>
          <Route index element={<JavaHome />} />
        <Route path="accessmodifier" element={<Accessmodifier />} />
        <Route path="array" element={<Array />} />
        <Route path="codingstandard" element={<CodingStandard />} />
        <Route path="collection" element={<Collection />} />
        <Route path="commandlinearg" element={<Commandlinearg />} />
        <Route path="datatype" element={<Datatype />} />
        <Route path="declaration" element={<Declaration />} />
        <Route path="flowcontrol" element={<FlowControl />} />
        <Route path="interface" element={<Interface />} />
        <Route path="languagefundamental" element={<Languagefundamental />} />
        <Route path="mainmethod" element={<Mainmethod />} />
        <Route path="multithreading" element={<Multithreading />} />
        <Route path="operatorassignment" element={<OperatorAssignment />} />
        <Route path="opps" element={<Opps />} />
        <Route path="java/vararg" element={<Vararg />} />
        <Route path="variable" element={<Variable />} />
        <Route path="jdbc" element={<JDBC />} />
        <Route path="jdbc/quiz" element={<Quize />} />
        <Route path="advjava" element={<Advjava/>} />
        </Route>
      </Routes>
    </>
  );
}
