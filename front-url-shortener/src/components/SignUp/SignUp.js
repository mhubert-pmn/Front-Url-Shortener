import React from 'react';
import Form from '../layout/form/Form';
import FormHeader from '../layout/formHeader/FormHeader';
import FormLayout from '../layout/formLayout/FormLayout';
import Button from '../layout/Button/Button';

const SignUp = () => {
  return(
    <div>
      <h1>S'inscrire</h1>
      <FormLayout>
        <Form text="test text avant link" link_text="test link text" link="#">
          <FormHeader title="test title" subtitle="test subtitle"></FormHeader>
          {/*button*/}
        </Form>        
      </FormLayout>
      
      <Button type="rounded"> Click here </Button>
    </div>
  )
}

export default SignUp;