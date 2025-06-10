import Skips from "./components/skip/";
import Stepper from "./components/stepper";

function App() {
  return (
    <div className="bg-[#4a4949]">
      <div className="max-w-11/12 ml-auto mr-auto p-4">
        <Stepper />
        <Skips />
      </div>
    </div>
  );
}

export default App;
