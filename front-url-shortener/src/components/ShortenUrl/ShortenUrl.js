import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../layout/Input/Input';
import Button from '../layout/Button/Button';
import './shortenUrl.scss';

const ShortenUrl = () => {
  const [originLink, setOriginLink] = useState(null);
  const [isLinkSent, setIsLinkSent] = useState(false);

  /* user_idUser should be retrieved thanks to the token */
  const user_idUser = 1;

  const handleSubmit = () => {
    axios.post('http://localhost:8201/links', { originLink, user_idUser }).then(
      response => {
        const data = response.data;
        console.log(data);
        setIsLinkSent(true);
      },
      error => {
        console.log(error);
      }
    )
  };

  return(
    <div className="shorten-url">
      <div className="shorten-url__titles">
        <h1>Marre des URLs trop longues ?</h1>
        <h2>Raccourcissez-les en un clic !</h2>
      </div>

      <div className="shorten-url__form">
        <InputField id="originLink" type="text" placeholder="URL à raccourcir" onChange={e => setOriginLink(e.target.value)}/>
        <Button type="common" onClick={handleSubmit}>Raccourcir</Button>
      </div>

      {isLinkSent && (
        <div className="shorten-url__success">
          <h2>URL raccourcie avec succès !</h2>
          <p><span>URL d'origine</span> : <a href={originLink} target="_blank" rel="noreferrer">{originLink}</a> </p>
          <p><span>URL raccourcie</span> : </p>
        </div>
      )}
    </div>
  )
}

export default ShortenUrl;