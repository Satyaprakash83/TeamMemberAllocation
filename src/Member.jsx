import maleImage from "./images/male.png";
import femaleImage from "./images/female.png";

import { PropTypes } from "prop-types";

function Member({ employee, selectedTeam, handleEmployeeCardClick }) {
  return (
    <div
      className={selectedTeam === employee.teamName ? "card selected" : "card"}
      id={employee.id}
      key={employee.id}
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      <img
        className="card-img-top"
        src={employee.gender === "male" ? maleImage : femaleImage}
        alt="Employee Image"
      />
      <div className="card-body">
        <h5 className="card-title">Name: {employee.fullName}</h5>
        <p className="card-text">
          <strong>Designation:</strong> {employee.designation}
        </p>
      </div>
    </div>
  );
}

Member.propTypes = {
  employee: PropTypes.object.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  handleEmployeeCardClick: PropTypes.func.isRequired,
};

export default Member;
