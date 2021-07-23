import React, { useState, useEffect }  from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './MyUrls.scss';

const MyUrls = (props) => {
  const [links, setLinks] = useState(["0"]);
  
  useEffect(async()=>{
    // Decode token to retrieve the id of the current user
    const token = localStorage.getItem("token");
    let token_payload = token !== null ? JSON.parse(atob(token.split(".")[1])) : null;
    let user_idUser = token_payload !== null ? token_payload.id : null;

    await axios.get("http://localhost:8201/links", { params: {
    user_idUser: user_idUser}}).then((response)=>{
    let state = response.data
    setLinks(state);
    }).catch(
      err => {
        console.log(err);
      }
    )      
  },[setLinks])

  useEffect(() => {
    console.log(links)
  }, [links])

  return(
    <div className="MyUrls">
      <h1>Mes URLs</h1>
        <h2>Voici toutes les URLs que tu as raccourcie !</h2>
            <table className="tableLinks">
              <thead>
                <tr>
                  <th>URL d'origine</th>
                  <th>URL raccourcie</th>
                </tr>
              </thead>
            {links.map(link => (
              <tbody>
                <tr>
                  <td><a href={link.originLink} target="_blank">{link.originLink}</a></td>
                  <td><a href={link.customLink} target="_blank">{link.customLink}</a></td>
                </tr>
              </tbody>
            
          ))}</table>
        <p>D'autres URLs à raccourcir ? <span className="redirectUrl"><Link to="/raccourcir-une-url">C'est par ici !</Link></span></p>
    </div>
  )
}

export default MyUrls;