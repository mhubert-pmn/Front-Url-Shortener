import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../layout/Form/Form";
import Button from "../layout/Button/Button";
import InputField from "../layout/Input/Input";
import axios from "axios";

const SignIn = () => {
  const history = useHistory();

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = () => {
    if (pseudo !== "" && password !== "") {
      axios
        .post(`http://localhost:8201/user/signin`, { pseudo, password })
        .then((response) => {
          localStorage.setItem("token", response.data.accessToken);
          history.push("/mes-urls");
        })
        .catch((error) => {
          console.error("There was an error", error);
        });
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        title="Se connecter"
        subtitle="Nous sommes ravis de vous revoir !"
        text="Pas encore de compte ?"
        link="/inscription"
        link_text="Inscris-toi !"
      >
        <InputField
          label="Pseudo"
          id="label"
          type="text"
          placeholder="Votre pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          required
        />
        <InputField
          label="Mot de passe"
          id="label"
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="common" onClick={handleSubmit}>
          Se connecter
        </Button>

        {showWarning && (
          <p style={{ color: "red" }}>
            Veuillez remplir tous les champs obligatoires.
          </p>
        )}
      </Form>
    </div>
  );
};

export default SignIn;
