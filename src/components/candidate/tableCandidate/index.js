import React, { useEffect, useState } from "react";
import * as constTable from "../../../constant/constTable";
import Pagination from "../pagination/index";
import { withRouter } from "react-router-dom";
import { candidateAPI } from "../../../api/service";
import AddCandidate from "../addCandidate/index";

function IndexCandidate(props) {

  const [candi, setCandi] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [candiPerPage, setCandiPerPage] = useState(20);

  // Get current candidate
  const indexOfLastCandi = currPage * candiPerPage;
  const indexOfFirstCandi = indexOfLastCandi - candiPerPage;
  const currCandi = candi.slice(indexOfFirstCandi, indexOfLastCandi);
  const paginate = (pageNumber) => setCurrPage(pageNumber);

  useEffect(() => {
    candidateAPI("GetListCandidate/batch9", "Get", null).then((res) => {
      setCandi(res.data);
    });
  }, []);
  
  return (
    <div>
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
          <span className="col l-2-8 ">{constTable.STT}</span>
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
          {currCandi?.map((candidate) => (
            <ul className="row sm-gutter sm-gutter--list" key={candidate.id}>
              <li className="col l-2-8"></li>
              <li className="col l-2-8">{candidate.fullName}</li>
              <li className="col l-2-8">{candidate.email}</li>
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
                <button
                  id="delete"
                  className="btn-icon"
                  data-toggle="modal"
                  data-target="#exampleModal3"
                >
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
                <button
                  id="edit"
                  className="btn-icon"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button
                  id="detail"
                  className="btn-icon"
                  data-toggle="modal"
                  data-target="#exampleModal4"
                >
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button id="calendar-plus" className="btn-icon">
                  <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          ))}
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
      {/* Delete Modal */}
      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <p class="text-muted">{constTable.DELBODY}</p>
            </div>

            <div class="modal-footer">
              {" "}
              <button type="button" class="btn btn-light" data-dismiss="modal">
                Hủy
              </button>{" "}
              <button id="del-candi" type="button" class="btn btn-danger-del">
                Xóa
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      {AddCandidate()}
    </div>
  );
}
export default withRouter(IndexCandidate);
