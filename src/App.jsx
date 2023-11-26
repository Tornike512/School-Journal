import { AppProvider } from "./AppContext";

import { English } from "./Objects/English";
import { Georgian } from "./Objects/Georgian";
import { Math } from "./Objects/Math";
import "./Week/Week.scss";

import { FirstWeek } from "./Week/FirstWeek";
import { SecondWeek } from "./Week/SecondWeek";
import { ThirdWeek } from "./Week/ThirdWeek";
import "./Objects/Objects.scss";

import "./Spacing.scss";

import { StudentsList } from "./StudentsList";

import { AddStudentModal } from "./AddStudentModal";

import { Points } from "./Points";

function App() {
  return (
    <AppProvider>
      <section className="spacing">
        <div className="objects">
          <Georgian></Georgian>
          <Math></Math>
          <English></English>
        </div>
        <div className="week">
          <FirstWeek></FirstWeek>
          <SecondWeek></SecondWeek>
          <ThirdWeek></ThirdWeek>
        </div>
      </section>
      <section>
        <div className="list-spacing">
          <StudentsList></StudentsList>
          <Points></Points>
        </div>
      </section>
      <AddStudentModal visible={false}></AddStudentModal>
    </AppProvider>
  );
}

export default App;
