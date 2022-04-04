import React, {useState, useEffect } from "react";
import {batchAPI} from "../../../api/service";
export default function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const [idcourse, setIdcourse] = useState([]);
  useEffect( () => {
    batchAPI(`internshipcourse/Batch${urlParams.get("id")}`,'Get',null)
     .then( (res) => {
      setIdcourse(res.data)
     });
   },[]);
   console.log(idcourse)
  return (
    <>
    {idcourse?.map((idcourse) => (
  <div>Chào mừng bạn đến với {idcourse.nameCoure}</div>
    ))}
    </>
  )
}
