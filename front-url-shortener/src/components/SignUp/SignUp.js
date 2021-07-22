import React from 'react';
import Form from '../layout/Form/Form';
import Button from '../layout/Button/Button';

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
        <Button type="common">Envoyer</Button>
      </Form>
    </div>
  )
}

export default SignUp;