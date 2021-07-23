import React from 'react';
import InputField from '../layout/Input/Input';
import Button from '../layout/Button/Button';
import './shortenUrl.scss';

const ShortenUrl = () => {
  return(
    <div className="shorten-url">
      <div className="shorten-url__titles">
        <h1>Marre des URLs trop longues ?</h1>
        <h2>Raccourcissez-les en un clic !</h2>
      </div>

      <div className="shorten-url__form">
        <InputField id="originLink" placeholder="URL à raccourcir" />
        <Button type="common">Raccourcir</Button>
      </div>

      <div className="shorten-url__success">
        <h2>URL raccourcie avec succès !</h2>
        <p><span>URL d'origine</span> : </p>
        <p><span>URL raccourcie</span> : </p>
      </div>
    </div>
  )
}

export default ShortenUrl;