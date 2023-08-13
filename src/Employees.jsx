import PropTypes from "prop-types";
import TeamsDropdown from "./TeamsDropdown";
import MembersGrid from "./MembersGrid";

function Employee({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) {
  return (
    <main>
      <TeamsDropdown
        selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <MembersGrid
        employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
      />
    </main>
  );
}

Employee.propTypes = {
  employees: PropTypes.array.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  handleEmployeeCardClick: PropTypes.func.isRequired,
  handleTeamSelectionChange: PropTypes.func.isRequired,
};

export default Employee;
