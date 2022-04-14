import React, {useState, useEffect } from "react";
import * as apiaxios from "../../../api/service";
import {useLocation} from "react-router-dom";

export default function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const [idcourse, setIdcourse] = useState([]);
  const location = useLocation();
   useEffect( () => {
    apiaxios.batchHome(`internshipcourse/${urlParams.get("id")}`, null )
    .then( (res) => {
      localStorage.setItem("idBatch",urlParams.get("id"));
      setIdcourse(res.data.data)
      });
}, {});
  return (
    <>

  <div>
    <h1 className="h1-batch">Chào mừng bạn đến với {idcourse.nameCoure}</h1>
  </div>
    </>
  )
}
