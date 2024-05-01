import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";

function QRGenerator() {
  return (
    <div>
      <QRCodeSVG value="www.google.com" />
    </div>
  );
}

export default QRGenerator;
