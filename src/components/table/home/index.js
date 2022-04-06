import React, {useState, useEffect } from "react";
import * as apiaxios from "../../../api/service";
export default function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const [idcourse, setIdcourse] = useState([]);
 
   useEffect( () => {
    apiaxios.batchHome(`internshipcourse/batch${urlParams.get("id")}`, null )
    .then( (res) => {
      setIdcourse(res.data)
      });
}, []);
  return (
    <>
    {idcourse?.map((idcourse) => (
  <div>
    <h1 className="h1-batch">Chào mừng bạn đến với {idcourse.nameCoure}</h1>
  </div>
    ))}
    </>
  )
}
