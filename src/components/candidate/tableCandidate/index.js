import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as constTable from "../../../constant/constTable";
import Pagination from "../pagination/index";
import { withRouter } from "react-router-dom";
import { candidateAPI, batchAPI } from "../../../api/service";
import AddCandidate from "../addCandidate/index";
import CalendarInterview from "../../calendarinterview/create/index";
import { popUpActions } from "../../../redux/store/popup";
import Preview from "../../calendarinterview/review";

import { deleteCandi } from "../../../redux/action/candi.action";

import "../../../asset/css/interviewShedule.css";
function TableCandidate() {
  const dispatch = useDispatch();
  const [candi, setCandi] = useState([]);
  const [batch, setBatch] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const showModal = (data) => {
    dispatch(popUpActions.show());
    dispatch(popUpActions.setData(data));
  };
  const [candiPerPage, setCandiPerPage] = useState(10);

  // Get current candidate
  const indexOfLastCandi = currPage * candiPerPage;
  const indexOfFirstCandi = indexOfLastCandi - candiPerPage;
  const currCandi = candi.slice(indexOfFirstCandi, indexOfLastCandi);
  const paginate = (pageNumber) => setCurrPage(pageNumber);
  const idBatch = localStorage.getItem("idBatch");

  useEffect(() => {
    candidateAPI(`candidate/batch/${idBatch}`, "Get", null).then((res) => {
      setCandi(res.data.data);
    });
  }, [candi]);
  useEffect(() => {
    batchAPI(`internshipcourse/${idBatch}`, "Get", null).then((res) => {
      setBatch(res.data.data);
    });
  }, {});

  const status = (status) => {
    const value = "N/A";
    if (status == null) {
      return value;
    }
    return status;
  };
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      (select) => (select.value = "Chọn...")
    );
  };

  return (
    <div>
      <CalendarInterview />
      <Preview />

      <h3 className="text-header">
        {constTable.H3} {batch.nameCoure}
      </h3>
      <div className="input-toolbar">
        <div className="uploader">
          <input className="inputUpload" type="file" id="fileupload" />
          <button className="btn-upload" type="submit" id="import">
            Nhập
          </button>
        </div>
        <div class="search">
          <input type="text" placeholder="Tìm kiếm..." class="search__input" />
          <i class="search__icon fa fa-search"></i>
        </div>
      </div>
      <div className="grid wide home-candidate">
        <div className="row home-candidate--list">
          <span className="col l-2-8 ">{constTable.NAME}</span>
          <span className="col l-2-8 ">{constTable.EMAIL}</span>
          <span className="col l-2-8 ">{constTable.STID}</span>
          <span className="col l-2-8 ">{constTable.UNI}</span>
          <span className="col l-2-8 ">{constTable.ITDOMAIN}</span>
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
                <li className="col l-2-8">{candidate.studentID}</li>
                <li className="col l-2-8">{candidate.university}</li>
                <li className="col l-2-8">{candidate.internshipDomain}</li>
                <li className="col l-2-8">{status(candidate.status)}</li>
                <li className="col l-2-8">
                  <i
                    className="fa fa-trash-o fa-trash-o1"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteCandi(candidate.idCandidate));
                    }}
                  ></i>
                  <i
                    className="fa fa-pencil-square-o fa-pencil-square-o1"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#exampleModalEdit"
                  ></i>
                  <i
                    className="fa fa-eye fa-eye1"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#exampleModal4"
                  ></i>
                  <i
                    className="fa fa-calendar-plus-o fa-calendar-plus-o1"
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
              <p className="mess-table-candidate">{constTable.NODATA}</p>
            </div>
          )}
        </div>
      </div>
      <Pagination
        className="pagination"
        candiPerPage={candiPerPage}
        totalCandis={candi.length}
        paginate={paginate}
      />
      {AddCandidate()}
      <button
        id="open-addcandi"
        className="btn-add-candi"
        type="submit"
        data-toggle="modal"
        data-target="#exampleModalAdd"
        onClick={handleReset}
      >
        Thêm
      </button>
    </div>
  );
}
export default withRouter(TableCandidate);
