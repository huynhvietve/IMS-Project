import React, {useState, useEffect } from "react";
// import {batchAPI} from "../../../api/service"; 
import api from "../../../api/instance";

export default function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const [idcourse, setIdcourse] = useState([]);
 
   useEffect( () => {
    api.get(`http://192.168.43.74:5000/internshipcourse/Batch${urlParams.get("id")}`, null )
    .then( (res) => {
      setIdcourse(res.data)
      });
}, []);
  return (
    <>
    {idcourse?.map((idcourse) => (
  <div>Chào mừng bạn đến với {idcourse.nameCoure}</div>
    ))}
    </>
  )
}
