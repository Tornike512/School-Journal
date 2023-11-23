import { English } from "./Objects/English";
import { Georgian } from "./Objects/Georgian";
import { Math } from "./Objects/Math";
import "./Objects/Objects.scss";

function App() {
  return (
    <>
      <div className="objects">
        <Georgian></Georgian>
        <Math></Math>
        <English></English>
      </div>
    </>
  );
}

export default App;
