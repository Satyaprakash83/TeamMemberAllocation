import { PropTypes } from "prop-types";
import Member from "./Member";

function MembersGrid({ employees, selectedTeam, handleEmployeeCardClick }) {
  return (
    <div className="employee-grid">
      {employees.map((employee) => {
        return (
          <Member
            key={employee.id}
            employee={employee}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
          />
        );
      })}
    </div>
  );
}

MembersGrid.propTypes = {
  employees: PropTypes.array.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  handleEmployeeCardClick: PropTypes.func.isRequired,
};

export default MembersGrid;
