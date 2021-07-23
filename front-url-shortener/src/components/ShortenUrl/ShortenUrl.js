import React, { useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import InputField from "../layout/Input/Input";
import Button from "../layout/Button/Button";
import "./shortenUrl.scss";

// Decode token to retrieve the id of the current user
const token = localStorage.getItem("token");
let token_payload =
  token !== null ? JSON.parse(atob(token.split(".")[1])) : null;
let user_idUser = token_payload !== null ? token_payload.id : null;

const ShortenUrl = () => {
  const [originLink, setOriginLink] = useState(null);
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [customLink, setCustomLink] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = () => {
    if (originLink !== null) {
      axios
        .post("http://localhost:8201/links", { originLink, user_idUser })
        .then(
          (response) => {
            const data = response.data;
            console.log(data);
            setCustomLink(data.customLink);
            setIsLinkSent(true);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="shorten-url">
      <div className="shorten-url__titles">
        <h1>Marre des URLs trop longues ?</h1>
        <h2>Raccourcissez-les en un clic !</h2>
      </div>

      <div className="shorten-url__form">
        <InputField
          id="originLink"
          type="text"
          placeholder="URL à raccourcir"
          onChange={(e) => setOriginLink(e.target.value)}
          required
        />
        <Button type="common" onClick={handleSubmit}>
          Raccourcir
        </Button>
      </div>
      {showWarning && (
        <p style={{ color: "red", textAlign: "center" }}>
          Veuillez remplir le champ.
        </p>
      )}

      {isLinkSent && (
        <div className="shorten-url__success">
          <h2>URL raccourcie avec succès !</h2>
          <p>
            <span>URL d'origine</span> :{" "}
            <a href={originLink} target="_blank" rel="noreferrer">
              {originLink}
            </a>{" "}
          </p>
          <p>
            <span>URL raccourcie</span> :{" "}
            <a href={customLink} target="_blank" rel="noreferrer">
              {customLink}
            </a>{" "}
          </p>

          <div className="shorten-url__success__qrcode">
            <p><span>QR Code</span></p>
            <QRCode value={customLink} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortenUrl;
