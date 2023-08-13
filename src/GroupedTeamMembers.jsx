import PropTypes from "prop-types";
import { useState } from "react";

function GroupedTeamMembers({ employees, selectedTeam, setTeam }) {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    const teams = [];

    //filtering team-A
    const teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    const teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    //filtering team-B
    const teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    const teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    //filtering team-C
    const teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    const teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    //filtering team-d
    const teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    const teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    const transformedGroupData = groupedEmployees.map((groupData) =>
      groupData.team === event.currentTarget.id
        ? { ...groupData, collapsed: !groupData.collapsed }
        : groupData
    );

    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((group) => {
        return (
          <div
            key={group.team}
            className="card mt-2 ps-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              className="card-header text-secondary bg-white"
              id={group.team}
              onClick={handleTeamClick}
            >
              Team Name: {group.team}
            </h4>
            <div
              id={`collapse_${group.team}`}
              className={group.collapsed ? "collapse" : ""}
            >
              {group.members.map((member) => {
                return (
                  <div key={member.id} className="mt-2 ps-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>
                      <strong>Designation:</strong> {member.designation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}

GroupedTeamMembers.propTypes = {
  employees: PropTypes.array.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  setTeam: PropTypes.func.isRequired,
};

export default GroupedTeamMembers;
