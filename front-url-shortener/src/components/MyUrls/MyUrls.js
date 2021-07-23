import React, { useState, useEffect }  from 'react';
import axios from "axios";
import './MyUrls.scss';

const MyUrls = (props) => {
  const [links, setLinks] = useState(["0"]);
  
  useEffect(async()=>{
    const idUser = localStorage.getItem("user_idUser")
    await axios.get("http://localhost:8201/links", { params: {
    user_idUser: idUser}}).then((response)=>{
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
                  <td>{link.originLink}</td>
                  <td>{link.customLink}</td>
                </tr>
              </tbody>
            
          ))}</table>
        <p>D'autres URLs à raccourcir ? <span className="redirectUrl"> <a href="/ShortenUrl">C'est par ici !</a></span></p>
    </div>
  )
}

export default MyUrls;