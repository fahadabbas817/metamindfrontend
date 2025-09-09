

import TopMenu from "../components/TopMenu";

import { Result } from "../components/Result";
import BottomSearch from "../components/BottomSearch";


const ImageGenerator = () => {


  return (
   <div className="bg-gradient-to-r h-full mx-auto from-slate-900 to-slate-700 relative w-[100vw] border">
      <div className="mx-auto container max-w-4xl">
      <Result/>
      <BottomSearch />
      </div>
    </div>
  );
};

export default ImageGenerator;
