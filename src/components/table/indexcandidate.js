// import React, { useEffect, useState } from "react";
// import Pagination from "../paging/paging";
// import { withRouter } from "react-router-dom";
// import ApiCaller from "../../api/ApiCaller";
// import InterviewsShedule from "../modal/interviewsShedule";

// function Index(props) {

//   const [candi, setCandi] = useState([]);
//   const [currPage, setCurrPage] = useState(1);
//   const [candiPerPage, setCandiPerPage] = useState(5);

//   // Get current candidate
//   const indexOfLastCandi = currPage * candiPerPage;
//   const indexOfFirstCandi = indexOfLastCandi - candiPerPage;
//   const currCandi = candi.slice(indexOfFirstCandi, indexOfLastCandi);
//   const paginate = (pageNumber) => setCurrPage(pageNumber);

//   useEffect(() => {
//     ApiCaller("candidate", "Get", null).then((res) => {
//       setCandi(res.data);
//     });
//   });

//   return (
//     <div>
//       <h3>DANH SÁCH ỨNG VIÊN</h3>
//       <div className="input-toolbar">
//         <div className="uploader">
//           <input className="inputUpload" type="file" id="fileupload" />
//           <button className="btn-upload" type="submit">
//             Import
//           </button>
//         </div>
//         <div className="search-box">
//           <input className="inputSearch" id="search" placeholder="Tìm..." />
//           <button className="btn-search" type="submit">
//             Tìm kiếm
//           </button>
//         </div>
//       </div>
//       <div className="grid wide home-candidate">
//         <div className="row  home-candidate--list">
//           <span className="col l-2-8">STT</span>
//           <span className="col l-2-8 ">Họ tên</span>
//           <span className="col l-2-8 ">Email</span>
//           <span className="col l-2-8 ">Tên Mentor</span>
//           <span className="col l-2-8 ">Tên DG</span>
//           <span className="col l-2-8 ">Vị trí thực tập</span>
//           <span className="col l-2-8 ">Khóa thực tập</span>
//           <span className="col l-2-8 ">Kết quả</span>
//           <span className="col l-2-8 ">Tác vụ</span>
//         </div>
//         {currCandi?.map((candidate) => (
//           <ul className="row sm-gutter sm-gutter--list" key={candidate.id}>
//             <li className="col l-2-8">{candidate.id}</li>
//             <li className="col l-2-8">{candidate.hoTen}</li>
//             <li className="col l-2-8">{candidate.email}</li>
//             <li className="col l-2-8">{candidate.TenMt}</li>
//             <li className="col l-2-8">{candidate.TenDg}</li>
//             <li className="col l-2-8">{candidate.viTriThucTap}</li>
//             <li className="col l-2-8">{candidate.khoaThuctap}</li>
//             <li className="col l-2-8">
//               <label class="checkbox-inline">
//                 <input
//                   type="checkbox"
//                   value={candidate.pass}
//                   checked={candidate.pass === 1}
//                 />
//                 Pass
//               </label>
//               <label clasNames="checkbox-inline">
//                 <input
//                   type="checkbox"
//                   value={candidate.pass}
//                   checked={candidate.pass === 0}
//                 />
//                 Fail
//               </label>
//             </li>
//             <li className="col l-2-8">
//               <button
//                 className="btn-icon"
//                 data-toggle="modal"
//                 data-target="#exampleModal3"
//               >
//                 <i className="fa fa-trash-o" aria-hidden="true"></i>
//               </button>
//               <button
//                 className="btn-icon"
//                 data-toggle="modal"
//                 data-target="#exampleModal"
//               >
//                 <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
//               </button>
//               <button className="btn-icon">
//                 <i
//                   className="fa fa-eye"
//                   aria-hidden="true"
//                   data-toggle="modal"
//                   data-target="#exampleModal4"
//                 ></i>
//               </button>
//               <button className="btn-icon"
//               data-toggle="modal"
//               data-target="#exampleModal5"
//               >
//                 <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>
//               </button>
//             </li>
//           </ul>
//         ))}
//       </div>
//       <Pagination
//         candiPerPage={candiPerPage}
//         totalCandis={candi.length}
//         paginate={paginate}
//       />

//       <div
//         class="modal fade"
//         id="exampleModal5"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <div className="container d-flex pl-0">
//                 <h5
//                   className="modal-title ml-2"
//                   id="exampleModalLabel"
//                   style={{ color: "#007bff" }}
//                 >
//                   TẠO LỊCH PHỎNG VẤN
//                 </h5>
//               </div>{" "}
//             </div>
//             <div className="modal-body">{InterviewsShedule()}</div>
//             <div className="modal-footer">
//               {" "}
//               <button
//                 type="button"
//                 className="btn btn-light"
//                 data-dismiss="modal"
//               >
//                 Hủy
//               </button>{" "}
//               <button 
//                 type="button" className="btn btn-danger-del"
//                 >
//                 Thêm
//               </button>{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default withRouter(Index);

import React from 'react'

export default function indexcandidate() {
  return (
    <h1>Candidate</h1>
    )
}
