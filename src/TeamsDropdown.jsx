import { PropTypes } from "prop-types";

function TeamsDropdown({ selectedTeam, handleTeamSelectionChange }) {
  return (
    <select
      style={{ maxWidth: `fit-content`, margin: "auto" }}
      className="form-select form-select-lg"
      value={selectedTeam}
      onChange={handleTeamSelectionChange}
    >
      <optgroup>
        <option value="TeamA">Team A</option>
        <option value="TeamB">Team B</option>
        <option value="TeamC">Team C</option>
        <option value="TeamD">Team D</option>
      </optgroup>
    </select>
  );
}

TeamsDropdown.propTypes = {
  selectedTeam: PropTypes.string.isRequired,
  handleTeamSelectionChange: PropTypes.func.isRequired,
};

export default TeamsDropdown;
