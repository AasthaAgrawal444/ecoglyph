import { Link } from "react-router-dom";
import "./dashboard.css";
import "../font.css";

export default function Dashboard() {
  return (
    <div className="dashboard_main corben-regular">
      <h1>Ecoglyph DashBoard</h1>
      <div className="dashboard_card">
        <Link to="/qrgenerator">
          <div className="dashboard_card_text">Qr generator</div>
        </Link>
      </div>
      <div className="dashboard_card">
        <Link to="/qrgenerator">
          <div className="dashboard_card_text">Qr generator</div>
        </Link>
      </div>
    </div>
  );
}
