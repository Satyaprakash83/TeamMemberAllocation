//static files
import "./App.css";
import { employeesArr } from "../content/DataContent";

//custom components
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import GroupedTeamMembers from "./GroupedTeamMembers";
import NotFound from "./NotFound";

//library imports
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("EMPLOYEELIST")) ?? employeesArr
  );

  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("SELECTEDTEAM")) ?? "TeamA"
  );

  useEffect(() => {
    localStorage.setItem("EMPLOYEELIST", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("SELECTEDTEAM", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployee = employees.map(
      (employee) => {
        if (employee.id !== parseInt(event.currentTarget.id)) return employee;

        if (employee.teamName === selectedTeam)
          return { ...employee, teamName: "" };

        return { ...employee, teamName: selectedTeam };
      }
      //   employee.id === parseInt(event.currentTarget.id)
      //     ? employee.teamName === selectedTeam
      //       ? { ...employee, teamName: "" }
      //       : { ...employee, teamName: selectedTeam }
      //     : employee
    );
    setEmployees(transformedEmployee);
  }

  return (
    <Router>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        ></Route>
        <Route
          path="/grouped-team-members"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
