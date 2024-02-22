import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import Numpy from "./pythontopics/Numpy";
import Panda from "./pythontopics/Panda";
import Seaborn from "./pythontopics/Seaborn";
import PythonHome from "./PythonHome";
import Pynavbar from "./Pynavbar";
import LanguageFundamental from "./pythontopics/LanguageFundamental";
import Identifier from "./pythontopics/Identifier";
import StartProject from "./pythontopics/StartProject";
export default function Apppython(){
  return (
    <>
      <Routes>
      <Route className="routes" path="/" element={ <Pynavbar /> }>
          <Route index element={<PythonHome />} />
          <Route path="numpy" element={<><Numpy/></>} />
          <Route path="panda" element={<><Panda /> </>} />
          <Route path="seaborn" element={<><Seaborn/> </>} />
          <Route path="languagefundamental" element={<><LanguageFundamental/> </>} />
          <Route path="identifier" element={<><Identifier/> </>} />
          <Route path="startproject" element={<><StartProject/> </>} />
        </Route>
      </Routes>
    </>
  );
}
