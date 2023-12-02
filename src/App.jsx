import { AppProvider } from "./AppContext";

import { English } from "./components/Subjects/English";
import { Georgian } from "./components/Subjects/Georgian";
import { Math } from "./components/Subjects/Math";
import "./components/Weeks/Week.scss";

import { FirstWeek } from "./components/Weeks/FirstWeek";
import { SecondWeek } from "./components/Weeks/SecondWeek";
import { ThirdWeek } from "./components/Weeks/ThirdWeek";
import "./components/Subjects/Objects.scss";

import "./Spacing.scss";

import { StudentsList } from "./components/StudentsList";

import { AddStudentModal } from "./features/AddStudentModal";

function App() {
  return (
    <AppProvider>
      <section className="spacing">
        <div className="objects">
          <Georgian />
          <Math />
          <English />
        </div>
        <div className="week">
          <FirstWeek />
          <SecondWeek />
          <ThirdWeek />
        </div>
      </section>
      <section>
        <div className="list-spacing">
          <StudentsList />
        </div>
      </section>
      <AddStudentModal />
    </AppProvider>
  );
}

export default App;
