import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Arithmetic from "./jstopics/Arithmetic";
import Array from "./jstopics/Array";
import Arrowfunction from "./jstopics/Arrowfunction";
import Assignment from "./jstopics/Assignment";
import Basic from "./jstopics/Basic";
import Bitwise from "./jstopics/Bitwise";
import Break from "./jstopics/Break";
import ClassModule from "./jstopics/ClassModule";
import Comment from "./jstopics/Comment";
import Datatype from "./jstopics/Datatype";
import Date from "./jstopics/Date";
import Error from "./jstopics/Error";
import Event from "./jstopics/Event";
import Function from "./jstopics/Function";
import Hoisting from "./jstopics/Hoisting";
import Ifelse from "./jstopics/Ifelse";
import Iterable from "./jstopics/Iterable";
import Json from "./jstopics/Json";
import LetConst from "./jstopics/LetConst";
import Loop from "./jstopics/Loop";
import Map from "./jstopics/Map";
import Math from "./jstopics/Math";
import Number from "./jstopics/Number";
import Object from "./jstopics/Object";
import Operator from "./jstopics/Operator";
import Output from "./jstopics/Output";
import Precedence from "./jstopics/Precedence";
import Regexp from "./jstopics/Regexp";
import Scope from "./jstopics/Scope";
import Statement from "./jstopics/Statement";
import Strictmode from "./jstopics/Strictmode";
import Switch from "./jstopics/Switch";
import This from "./jstopics/This";
import Syntax from "./jstopics/Syntax";
import Type from "./jstopics/Type";
import Variable from "./jstopics/Variable";
import JsHome from "./JsHome";
import Jsnavbar from "./Jsnavbar";

export default function Appjs() {
  return (
    <>
 <Routes>
      <Route className="routes" path="/" element={ <Jsnavbar /> }>
        <Route index element={<JsHome />} />      
          <Route path="basic" element={<Basic />} />
        <Route path="arithmetic" element={<Arithmetic />} />
        <Route path="array" element={<Array />} />
        <Route path="arrow" element={<Arrowfunction />} />
        <Route path="strictmode" element={<Strictmode />} />
        <Route path="bitwise" element={<Bitwise />} />
        <Route path="break" element={<Break />} />
        <Route path="classmodule" element={<ClassModule />} />
        <Route path="comment" element={<Comment />} />
        <Route path="datatype" element={<Datatype />} />
        <Route path="date" element={<Date />} />
        <Route path="error" element={<Error />} />
        <Route path="event" element={<Event />} />
        <Route path="function" element={<Function />} />
        <Route path="hoisting" element={<Hoisting />} />
        <Route path="ifelse" element={<Ifelse />} />
        <Route path="iterable" element={<Iterable />} />
        <Route path="json" element={<Json />} />
        <Route path="letconst" element={<LetConst />} />
        <Route path="loop" element={<Loop />} />
        <Route path="map" element={<Map />} />
        <Route path="math" element={<Math />} />
        <Route path="number" element={<Number />} />
        <Route path="object" element={< Object/>} />
        <Route path="operator" element={<Operator />} />
        <Route path="output" element={<Output />} />
        <Route path="precedence" element={<Precedence />} />
        <Route path="regexp" element={<Regexp />} />
        <Route path="scope" element={<Scope />} />
        <Route path="statement" element={<Statement />} />
        <Route path="string" element={<String />} />
        <Route path="switch" element={<Switch />} />
        <Route path="syntax" element={<Syntax />} />
        <Route path="this" element={<This />} />
        <Route path="type" element={<Type />} />
        <Route path="variable" element={<Variable />} />
        <Route path="assignment" element={<Assignment />} />
        </Route>
      </Routes>
    </>
  );
}
