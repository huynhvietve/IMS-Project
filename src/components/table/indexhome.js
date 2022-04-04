// import React, {useState, useEffect } from "react";
// import {CallAPI} from "../../api/service";
// export default function indexHome() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const [idcourse, setIdcourse] = useState([]);
//   useEffect( () => {
//     CallAPI(`internshipcourse/Batch${urlParams.get("id")}`,'Get',null)
//      .then( (res) => {
//       setIdcourse(res.data)
//      });
//    },[]);
//    console.log(idcourse)
//   return (
//     <>
//     {idcourse?.map((idcourse) => (
//   <div>Chào mừng bạn đến với {idcourse.nameCoure}</div>
//     ))}
//     </>
//   )
// }

import React from 'react'

export default function indexHome() {
  return (
    <h1>Chào mừng bạn đến với Batch 9</h1>
  )
}
