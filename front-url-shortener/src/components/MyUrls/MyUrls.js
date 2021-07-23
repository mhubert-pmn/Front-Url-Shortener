import React, { setState, useEffect }  from 'react';
import axios from "axios";
import './MyUrls.scss';

const MyUrls = (props) => {
  const [links, setLinks] = setState(["0"]);
  

  useEffect(async()=>{
    const idUser = localStorage.getItem("user_idUser")
    await axios.get("http://localhost:8201/links", { params: {
    user_idUser: idUser}}).then((response)=>{
    console.log('DATA IS',response.data);
    setLinks(["123"]);
    console.log(links);
    }).catch(
      err => {
        console.log(err);
      }
    )      
  },[])

  // useEffect(() => {

  //   const idUser = localStorage.getItem("user_idUser")
  //   const fetchData = async() => {
  //     const publicRoomsData = await axios.get("http://localhost:8201/links", { params: {
  //       user_idUser: idUser}});
  //       console.log(publicRoomsData)
  //       setLinks(publicRoomsData.data);
  //       console.log(links);
  //   }
  //   fetchData();
  //   console.log(links);
  // }, []);


  // useEffect(() => {
  //   const idUser = localStorage.getItem("user_idUser")
  //   axios.get("http://localhost:8201/links", { params: {
  //     user_idUser: idUser}}).then((response) => {
  //     setLinks(response.data)
  //     console.log("1 " + links)
      
  //   }).catch(err => {
  //     console.log(err);
  //   })
  //   console.log("2 " +links)
  // }, [])

  // useEffect(() => {
  //   const idUser = localStorage.getItem("user_idUser")
  //   const fetchData = async() => {
  //     const result = await axios.get("http://localhost:8201/links", { params: {
  //       user_idUser: idUser}}).then((response) => {
  //       setLinks(response.data)
  //     }).catch(err => {
  //       console.log(err);
  //     })
  //   }
  //   fetchData();
  //   console.log(links)
  // }, [])
  
  // useEffect(() => {
  //   const idUser = localStorage.getItem("user_idUser")
  //   console.log(idUser)
  //   axios({
  //     method: "get",
  //     url: "http://localhost:8201/links",
  //     params: {user_idUser: idUser}
  //     }
  //   )
  // })
  // useEffect(() => {
  //   const idUser = localStorage.getItem("user_idUser")
  //   const fetchData = async() => {
  //     const result = await axios.get("http://localhost:8201/links", { params: {
  //       user_idUser: idUser}});
  //         setLinks(result.data)
  //   }
  //   fetchData();
  //   console.log(links)
  // }, []);

  return(
    <div className="MyUrls">
      <h1>Mes URLs</h1>
        <h2>Voici toutes les URLs que tu as raccourcie !</h2>
          {/* {links.map(link => {
            <table>
              <thead>
                <tr>
                  <th>URL d'origine</th>
                  <th>URL raccourcie</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{link.originLink}</td>
                  <td>{link.customLInk}</td>
                </tr>
              </tbody>
            </table>
          })} */}
        <p>D'autres URLs à raccourcir ? <span className="redirectUrl"> <a href="/ShortenUrl">C'est par ici !</a></span></p>
    </div>
  )
}

export default MyUrls;