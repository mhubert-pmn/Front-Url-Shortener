import React from 'react';
import Form from '../layout/Form/Form';
import Button from '../layout/Button/Button';
import InputField from '../layout/Input/Input';

const SignUp = () => {
  return(
    <div>
      <h1>S'inscrire</h1>
      <Form
        title="S'inscrire"
        subtitle="Hey bienvenue !"
        text="Déjà inscrit ?"
        link="/"
        link_text="Connecte-toi !"
      >
        <InputField label="Pseudo" id="label" type="text" placeholder="Votre pseudo" />

        <Button type="common">Envoyer</Button>
      </Form>
    </div>
  )
}

export default SignUp;