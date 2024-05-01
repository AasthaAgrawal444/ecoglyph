import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Ecoglyph DashBoard</h1>
      <Link to="/qrgenerator">Qr generator</Link>
    </div>
  );
}
