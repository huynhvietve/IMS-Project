import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as constTable from "../../../constant/constTable";
import Pagination from "../pagination/index";
import { withRouter } from "react-router-dom";
import { candidateAPI } from "../../../api/service";
import AddCandidate from "../addCandidate/index";
import CalendarInterview from "../../calendarinterview/create/index";
import { popUpActions } from "../../../redux/store/popup";
import Preview from "../../calendarinterview/review";

import "../../../asset/css/interviewShedule.css";
function TableCandidate() {
  const dispatch = useDispatch();
  const [candi, setCandi] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [candiPerPage, setCandiPerPage] = useState(7);
  const showModal = (data) => {
    dispatch(popUpActions.show());
    dispatch(popUpActions.setData(data));
  };

  // Get current candidate
  const indexOfLastCandi = currPage * candiPerPage;
  const indexOfFirstCandi = indexOfLastCandi - candiPerPage;
  const currCandi = candi.slice(indexOfFirstCandi, indexOfLastCandi);
  const paginate = (pageNumber) => setCurrPage(pageNumber);

  useEffect(() => {
    const idBatch = localStorage.getItem("idBatch");

    candidateAPI(`candidate/batch/${idBatch}`, "Get", null).then((res) => {
      setCandi(res.data.data);
    });
  }, [candi]);

  return (
    <div>
      <CalendarInterview />
      <Preview />
      <h3>{constTable.H3}</h3>
      <div className="input-toolbar">
        <div className="uploader">
          <input className="inputUpload" type="file" id="fileupload" />
          <button className="btn-upload" type="submit" id="import">
            Import
          </button>
        </div>
        <div className="search-box">
          <input className="inputSearch" id="search" placeholder="Tìm..." />
          <button className="btn-search" type="submit" id="search">
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="grid wide home-candidate">
        <div className="row home-candidate--list">
          <span className="col l-2-8 ">{constTable.NAME}</span>
          <span className="col l-2-8 ">{constTable.EMAIL}</span>
          <span className="col l-2-8 ">{constTable.MTNAME}</span>
          <span className="col l-2-8 ">{constTable.DGNAME}</span>
          <span className="col l-2-8 ">{constTable.ITDOMAIN}</span>
          <span className="col l-2-8 ">{constTable.ITBATCH}</span>
          <span className="col l-2-8 ">{constTable.ITRESULT}</span>
          <span className="col l-2-8 ">{constTable.ACTION}</span>
        </div>
        <div className="table-body">
          {currCandi.length > 0 ? (
            currCandi?.map((candidate) => (
              <ul
                className="row sm-gutter sm-gutter--list"
                key={candidate.idCandidate}
              >
                <li className="col l-2-8">{candidate.fullName}</li>
                <li className="col l-2-8">{candidate.emailCandidate}</li>
                <li className="col l-2-8">{candidate.fullNameMentor}</li>
                <li className="col l-2-8">{candidate.nameDG}</li>
                <li className="col l-2-8">{candidate.internshipDomain}</li>
                <li className="col l-2-8">{candidate.nameCoure}</li>
                <li className="col l-2-8">
                  <label class="checkbox-inline">
                    <input
                      id="checkpass"
                      type="checkbox"
                      value={candidate.status}
                      checked={candidate.status == "pass"}
                    />
                    Pass
                  </label>
                  <label clasNames="checkbox-inline">
                    <input
                      id="checkfail"
                      type="checkbox"
                      value={candidate.status}
                      checked={candidate.status == "fail"}
                    />
                    Fail
                  </label>
                </li>
                <li className="col l-2-8">
                  <i
                    className="fa fa-trash-o"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#exampleModal3"
                  ></i>
                  <i
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  ></i>
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#exampleModal4"
                  ></i>
                  <i
                    className="fa fa-calendar-plus-o"
                    aria-hidden="true"
                    onClick={() =>
                      showModal({
                        id: candidate.idCandidate,
                        fullName: candidate.fullName,
                        email: candidate.emailCandidate,
                      })
                    }
                  ></i>
                </li>
              </ul>
            ))
          ) : (
            <div>
              <p className="mess-table-candidate">Chưa có dữ liệu</p>
            </div>
          )}
        </div>
      </div>
      <Pagination
        candiPerPage={candiPerPage}
        totalCandis={candi.length}
        paginate={paginate}
      />
      <button
        id="open-addcandi"
        className="btn-add"
        type="submit"
        data-toggle="modal"
        data-target="#exampleModal2"
      >
        Thêm
      </button>
      {AddCandidate()}
    </div>
  );
}
export default withRouter(TableCandidate);
