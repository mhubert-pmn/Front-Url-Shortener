import React, { useState } from 'react';
import axios from 'axios';
import Form from '../layout/Form/Form';
import Button from '../layout/Button/Button';
import InputField from '../layout/Input/Input';

const SignUp = () => {

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const user = {
      pseudo: pseudo,
      email: email,
      password: password
    };
    
    console.log(user);

    axios.post(`http://localhost:8201/user/signup`, {user})
      .then(res => {        
        console.log(res);
        console.log(res.data);
      })    
  }

  return(
    <div>
      <Form
        title="S'inscrire"
        subtitle="Hey bienvenue !"
        text="Déjà inscrit ?"
        link="/"
        link_text="Connecte-toi !"
      >
        <form>
          <InputField label="pseudo" id="pseudo" type="text" value={pseudo} onChange={e => setPseudo(e.target.value)} placeholder="Votre pseudo" />
          <InputField label="email" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Votre email" />
          <InputField label="password" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Votre password" />
          <Button type="submit" onClick={handleSubmit}>Envoyer</Button>
        </form>        
      </Form>
    </div>
  )
}

export default SignUp;