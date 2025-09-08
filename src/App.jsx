import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import TextGenerator from "./Pages/TextGenerator";
import ImageGenerator from "./Pages/ImageGenerator";
import MemeGenerator from "./Pages/MemeGenerator";
import VideoGenerator from "./Pages/VideoGenerator";
import Sidebar from "./components/Sidebar";
import PopupDialog from "./components/PopupDialog";
import Homepage from "./Pages/HomePage";
import TopMenu from "./components/TopMenu";
import Layout from "./components/Layout";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/text" element={<TextGenerator />} />
            <Route path="/images" element={<ImageGenerator />} />
            <Route path="/memes" element={<MemeGenerator />} />
            <Route path="/videos" element={<VideoGenerator />} />
          </Route>
        </Routes>
      </Router>
      {/* <Main/> */}
    </>
  );
};

export default App;
