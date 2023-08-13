import PropTypes from "prop-types";
import Nav from "./Nav";

function Header({ selectedTeam, teamMemberCount }) {
  return (
    <header className="container">
      <Nav />
      <div className="row text-center mt-3 mb-3">
        <h1>Team Member Allocation</h1>
        <h3>
          {`${selectedTeam.slice(0, -1)}-${selectedTeam.slice(-1)}`} has{" "}
          {teamMemberCount} Member{teamMemberCount === 1 ? "" : "s"}
        </h3>
      </div>
    </header>
  );
}
Header.propTypes = {
  selectedTeam: PropTypes.string.isRequired,
  teamMemberCount: PropTypes.number.isRequired,
};

export default Header;
