import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HtmlHome from "./HtmlHome";
import Htmlnavbar from "./Htmlnavbar";
import Attribute from "./htmltopics/Attrubutes";
import Basic from "./htmltopics/Basic";
import BlockInline from "./htmltopics/BlockInline";
import Charset from "./htmltopics/Charset";
import ClassId from "./htmltopics/ClassId";
import Color from "./htmltopics/Color";
import Comment from "./htmltopics/Comment";
import ComputerCode from "./htmltopics/ComputerCode";
import Css from "./htmltopics/Css";
import Div from "./htmltopics/Div";
import Element from "./htmltopics/Element";
import EntitySymbol from "./htmltopics/EntitySymbolEmoji";
import Favicon from "./htmltopics/Favicon";
import FilePath from "./htmltopics/FilePath";
import Formatting from "./htmltopics/Formatting";
import Head from "./htmltopics/Head";
import Heading from "./htmltopics/Heading";
import HtmlvsXhtml from "./htmltopics/HtmlvsXhtml";
import Iframe from "./htmltopics/Iframe";
import Image from "./htmltopics/Image";
import JavaScript from "./htmltopics/JavaScript";
import Layout from "./htmltopics/Layout";
import Link from "./htmltopics/Link";
import List from "./htmltopics/List";
import PageTitle from "./htmltopics/PageTitle";
import Paragraph from "./htmltopics/Paragraph";
import Quotation from "./htmltopics/Quotation";
import Responsive from "./htmltopics/Responsive";
import Semantic from "./htmltopics/Semantic";
import Style from "./htmltopics/Style";
import SymbolEmoji from "./htmltopics/SymbolEmoji";
import Table from "./htmltopics/Table";
export default function Apphtml() {
  return (
    <>
      <Routes className="routes" path="/" element={<><HtmlHome/></>}>
        <Route path="attribute" element={<Attribute />} />
       <Route path="basic" element={<Basic />} />
       <Route path="blockinline" element={<BlockInline />} />
       <Route path="charset" element={<Charset />} />
       <Route path="classid" element={<ClassId />} />
       <Route path="color" element={<Color />} />
       <Route path="comment" element={<Comment />} />
       <Route path="computercode" element={<ComputerCode />} />
       <Route path="css" element={<Css />} />
       <Route path="div" element={<Div />} />
       <Route path="element" element={<Element />} />
       <Route path="entitysymbol" element={<EntitySymbol />} />
       <Route path="favicon" element={<Favicon />} />
       <Route path="filepath" element={<FilePath />} />
       <Route path="formatting" element={<Formatting />} />
       <Route path="head" element={<Head />} />
       <Route path="heading" element={<Heading />} />
       <Route path="htmlvsxhtml" element={<HtmlvsXhtml />} />
       <Route path="iframe" element={<Iframe />} />
       <Route path="image" element={<Image />} />
       <Route path="javascript" element={<JavaScript />} />
       <Route path="layout" element={<Layout />} />
       <Route path="link" element={<Link />} />
       <Route path="list" element={<List />} />
       <Route path="pagetitle" element={<PageTitle/>} />
       <Route path="paragraph" element={<Paragraph />} />
       <Route path="quotation" element={<Quotation />} />
       <Route path="responsive" element={<Responsive />} />
       <Route path="semantic" element={<Semantic/>} />
       <Route path="style" element={<Style />} />
       <Route path="symbolemoji" element={<SymbolEmoji />} />
       <Route path="table" element={<Table />} />
      </Routes>
    </>
  );
}
