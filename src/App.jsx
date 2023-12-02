import { AppProvider } from "./AppContext";

import { Routes, Route } from "react-router-dom";

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

import { Points } from "./components/Points";

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
      <AddStudentModal></AddStudentModal>
    </AppProvider>
  );
}

export default App;
