import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Align from "./csspages/Align";
import Background from "./csspages/Background";
import Border from "./csspages/Border";
import Boxmodel from "./csspages/Boxmodel";
import Color from "./csspages/Color";
import Combitor from "./csspages/Combitor";
import Display from "./csspages/Display";
import Float from "./csspages/Float";
import Font from "./csspages/Font";
import Form from "./csspages/Form";
import Heightwidth from "./csspages/Heightwidth";
import Icon from "./csspages/Icon";
import Inlineblock from "./csspages/Inlineblock";
import List from "./csspages/List";
import Link from "./csspages/Link";
import Margin from "./csspages/Margin";
import Mathfunction from "./csspages/Mathfunction";
import Maxwidth from "./csspages/Maxwidth";
import Navigation from "./csspages/Navigationbar";
import Opacity from "./csspages/Opacity";
import Outline from "./csspages/Outline";
import Overflow from "./csspages/Overflow";
import Padding from "./csspages/Padding";
import Position from "./csspages/Position";
import Pseudoclass from "./csspages/Pseudoclass";
import Pseudoelement from "./csspages/Pseudoelement";
import Selectors from "./csspages/Selectors";
import Syntax from "./csspages/Syntax";
import Table from "./csspages/Table";
import Text from "./csspages/Text";
import Zindex from "./csspages/Zindex";
import Dropdown from "./csspages/Dropdown";
import Cssnavbar from "./Cssnavbar";
export default function Appcss() {
  return (
    <>
      <Routes className="routes" path="/" element={<Cssnavbar />}>
        <Route path="syntax" element={<Syntax />} />
        <Route path="selectors" element={<Selectors />} />
        <Route path="comment" element={<Comment />} />
        <Route path="color" element={<Color />} />
        <Route path="background" element={<Background />} />
        <Route path="border" element={<Border />} />
        <Route path="margin" element={< Margin/>} />
        <Route path="padding" element={<Padding />} />
        <Route path="heightwidth" element={<Heightwidth />} />
        <Route path="boxmodel" element={<Boxmodel />} />
        <Route path="outline" element={<Outline />} />
        <Route path="text" element={<Text />} />
        <Route path="font" element={<Font />} />
        <Route path="icon" element={<Icon />} />
        <Route path="link" element={<Link />} />
        <Route path="list" element={<List />} />
        <Route path="table" element={<Table />} />
        <Route path="display" element={< Display/>} />
        <Route path="maxwidth" element={< Maxwidth/>} />
        <Route path="position" element={<Position />} />
        <Route path="zindex" element={<Zindex />} />
        <Route path="overflow" element={<Overflow />} />
        <Route path="float" element={<Float />} />
        <Route path="inlineblock" element={<Inlineblock />} />
        <Route path="align" element={<Align />} />
        <Route path="combinator" element={<Combitor />} />
        <Route path="pseudoclass" element={<Pseudoclass />} />
        <Route path="pseudoelement" element={<Pseudoelement />} />
        <Route path="opacity" element={<Opacity />} />
        <Route path="navigation" element={<Navigation />} />
        <Route path="dropdown" element={< Dropdown/>} />
        <Route path="form" element={<Form />} />
        <Route path="mathfunction" element={<Mathfunction />} />
      </Routes>
    </>
  );
}
