import React from 'react';
import Form from '../layout/Form/Form';

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
      />
    </div>
  )
}

export default SignUp;