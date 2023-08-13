const today = new Date();

function Footer() {
  return (
    <footer className="container">
      <div className="row text-center mt-3 mb-3">
        <h5>
          Team Member Allocatiion App - {today.getFullYear()}
          <sup>&copy;</sup>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
