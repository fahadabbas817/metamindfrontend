import { Result } from "../components/Result";
import BottomSearch from "../components/BottomSearch";

const TextGenerator = () => {
  return (
    <div className="flex flex-col h-full">
      <Result />
      <BottomSearch />
    </div>
  );
};

export default TextGenerator;
