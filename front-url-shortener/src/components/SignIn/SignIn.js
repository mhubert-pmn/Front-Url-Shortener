import React, { useState } from 'react';
import Form from '../layout/Form/Form';
import Button from '../layout/Button/Button';
import InputField from '../layout/Input/Input';
import axios from 'axios';

const SignIn = () => {
  const[pseudo, setPseudo] = useState();
  const[password, setPassword] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const user = {
      pseudo: pseudo,
      password: password
    }
    //console.log(user);
    axios.post(`https://localhost:8201/user/signin`, {user})
      .then(res => {
        console.log(res);
        console.log(res.data)
      })
      .catch(error => {
        console.error('There was an error', error);
      })
  }
  return(
    <div>
      <Form onSubmit={handleSubmit}
        title="Se connecter"
        subtitle="Nous sommes ravis de vous revoir !"
        text="Pas encore de compte ?"
        link="/inscription"
        link_text="Inscris toi !"
      >
        
          <InputField label="Pseudo" id="label" type="text" placeholder="Votre pseudo" value={pseudo} onChange={e => setPseudo(e.target.value)}/>
          <InputField label="Mot de passe" id="label" type="password" placeholder="Votre mot de passe" value={password} onChange={e => setPassword(e.target.value)}/>
          <Button type="submit" onClick={handleSubmit}>Se connecter</Button>
        </Form>
      
    </div>
  )
}

export default SignIn;