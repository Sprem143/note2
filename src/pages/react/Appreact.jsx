import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Basic from "./reacttopics/Basic";
import Class from "./reacttopics/Class";
import Component from "./reacttopics/Component";
import Condition from "./reacttopics/Condition";
import Cssstyling from "./reacttopics/Cssstyling";
import Customhook from "./reacttopics/Customehook";
import Es6 from "./reacttopics/Es6";
import Event from "./reacttopics/Event";
import Form from "./reacttopics/Form";
import Hook from "./reacttopics/Hook";
import Jsx from "./reacttopics/Jsx";
import List from "./reacttopics/List";
import Memo from "./reacttopics/Memo";
import Prop from "./reacttopics/Prop";
import Renderhtml from "./reacttopics/Renderhtml";
import Router from "./reacttopics/Router";
import Sassstyling from "./reacttopics/Sassstyling";
import Upgrade from "./reacttopics/Upgrade";
import Usecallback from "./reacttopics/Usecallback";
import UseContext from "./reacttopics/UseContext";
import Useeffect from "./reacttopics/Useeffect";
import Usememo from "./reacttopics/Usememo";
import Usereducer from "./reacttopics/Usereducer";
import Useref from "./reacttopics/Useref";
import Usestate from "./reacttopics/Usestate";
import ReactHome from "./ReactHome";
export default function Appreact() {
  return (
    <>
      <Routes className="routes" path="/" element={<><ReactHome/></>}>
        <Route path="basic" element={<Basic />} />
        <Route path="class" element={<Class />} />
        <Route path="component" element={<Component />} />
        <Route path="condition" element={<Condition />} />
        <Route path="cssstyling" element={<Cssstyling />} />
        <Route path="customhook" element={<Customhook />} />
        <Route path="es6" element={<Es6 />} />
        <Route path="event" element={<Event />} />
        <Route path="form" element={<Form />} />
        <Route path="hook" element={<Hook />} />
        <Route path="jsx" element={<Jsx />} />
        <Route path="list" element={<List/>} />
        <Route path="memo" element={<Memo />} />
        <Route path="prop" element={<Prop />} />
        <Route path="renderhtml" element={<Renderhtml />} />
        <Route path="router" element={<Router />} />
        <Route path="sassstyling" element={<Sassstyling />} />
        <Route path="upgrade" element={<Upgrade />} />
        <Route path="usecallback" element={<Usecallback />} />
        <Route path="usecontext" element={<UseContext />} />
        <Route path="useeffect" element={<Useeffect />} />
        <Route path="usememo" element={<Usememo />} />
        <Route path="usereducer" element={<Usereducer />} />
        <Route path="useref" element={<Useref />} />
        <Route path="usestate" element={<Usestate />} />
       
      
      </Routes>
    </>
  );
}
