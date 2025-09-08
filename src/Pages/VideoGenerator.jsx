import TopMenu from "../components/TopMenu";

import BottomSearch from "../components/BottomSearch";
import { Result } from "../components/Result";

const VideoGenerator = () => {
  return (
    <div className="main">
      <TopMenu />
      <div className="main-container">
        <Result/>
        <BottomSearch />
      </div>
    </div>
  );
};

export default VideoGenerator;
