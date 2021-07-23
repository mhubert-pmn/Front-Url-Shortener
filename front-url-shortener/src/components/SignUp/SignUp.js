import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Form from "../layout/Form/Form";
import Button from "../layout/Button/Button";
import InputField from "../layout/Input/Input";

const SignUp = () => {
  const history = useHistory();

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = () => {
    if (pseudo !== "" && email !== "" && password !== "") {
      axios
        .post(`http://localhost:8201/user/signup`, { pseudo, email, password })
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
        title="S'inscrire"
        subtitle="Hey bienvenue !"
        text="Déjà inscrit ?"
        link="/"
        link_text="Connecte-toi !"
      >
        <form>
          <InputField
            label="Pseudo"
            id="pseudo"
            type="text"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            placeholder="Votre pseudo"
            required
          />
          <InputField
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            required
          />
          <InputField
            label="Mot de passe"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Votre password"
            required
          />
          <Button type="common" onClick={handleSubmit}>
            S'inscrire
          </Button>
          {showWarning && (
            <p style={{ color: "red" }}>
              Veuillez remplir tous les champs obligatoires.
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
