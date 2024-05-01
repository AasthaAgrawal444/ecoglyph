import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRGenerator from "./components/qr_generator";
import Dashboard from "./components/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/qrgenerator" exact element={<QRGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}
