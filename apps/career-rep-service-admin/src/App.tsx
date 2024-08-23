import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResumeList } from "./resume/ResumeList";
import { ResumeCreate } from "./resume/ResumeCreate";
import { ResumeEdit } from "./resume/ResumeEdit";
import { ResumeShow } from "./resume/ResumeShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { InternshipExperienceList } from "./internshipExperience/InternshipExperienceList";
import { InternshipExperienceCreate } from "./internshipExperience/InternshipExperienceCreate";
import { InternshipExperienceEdit } from "./internshipExperience/InternshipExperienceEdit";
import { InternshipExperienceShow } from "./internshipExperience/InternshipExperienceShow";
import { HackathonExperienceList } from "./hackathonExperience/HackathonExperienceList";
import { HackathonExperienceCreate } from "./hackathonExperience/HackathonExperienceCreate";
import { HackathonExperienceEdit } from "./hackathonExperience/HackathonExperienceEdit";
import { HackathonExperienceShow } from "./hackathonExperience/HackathonExperienceShow";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { PlacementScoreList } from "./placementScore/PlacementScoreList";
import { PlacementScoreCreate } from "./placementScore/PlacementScoreCreate";
import { PlacementScoreEdit } from "./placementScore/PlacementScoreEdit";
import { PlacementScoreShow } from "./placementScore/PlacementScoreShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CareerRepService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Resume"
          list={ResumeList}
          edit={ResumeEdit}
          create={ResumeCreate}
          show={ResumeShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="InternshipExperience"
          list={InternshipExperienceList}
          edit={InternshipExperienceEdit}
          create={InternshipExperienceCreate}
          show={InternshipExperienceShow}
        />
        <Resource
          name="HackathonExperience"
          list={HackathonExperienceList}
          edit={HackathonExperienceEdit}
          create={HackathonExperienceCreate}
          show={HackathonExperienceShow}
        />
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="PlacementScore"
          list={PlacementScoreList}
          edit={PlacementScoreEdit}
          create={PlacementScoreCreate}
          show={PlacementScoreShow}
        />
      </Admin>
    </div>
  );
};

export default App;
