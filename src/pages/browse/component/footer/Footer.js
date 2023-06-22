import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a href="#">
          <h3 className="text-danger">Movie App</h3>
        </a>
      </div>
      <div className="footer-icon">
        <a href="#">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};
export default Footer;
