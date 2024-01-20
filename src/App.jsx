
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./mainpage/Home";
import Navbar from "./mainpage/Navbar";
import Htmlpage from "./pages/html/Htmlpage";
import Csspage from "./pages/css/Csspage";
import Javapage from "./pages/java/Javapage";
import Reactpage from "./pages/react/Basicreact";
export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="css" element={<Csspage />} />
          <Route path="html" element={<Htmlpage />} />
          <Route path="java" element={<Javapage />} />
          <Route path="react" element={<Reactpage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}