import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import * as apiaxios from "../../../api/service";
import { deleteMentor, getMentor } from "../../../redux/action/mentor.action";
import { popUpActions } from "../../../redux/store/popup";
import AddMentor from "../../mentor/addMentors/index";
import Pagination from "../../../components/mentor/pagination/index";

function TableMentor(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMentor());
  }, []);
  const [mentors, setMentor] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [mentorPerPage, setMentorPerPage] = useState(20);
  const indexOfLastMentor = currPage * mentorPerPage;
  const indexOfFirstMentor = indexOfLastMentor - mentorPerPage;
  const currMentor = mentors.slice(indexOfFirstMentor, indexOfLastMentor);
  const paginate = (pageNumber) => setCurrPage(pageNumber);
  const showModal = (data) => {
    console.log(data);
    dispatch(popUpActions.show());
    dispatch(popUpActions.getData(data));
  };

  useEffect(() => {
    const idBatch = localStorage.getItem("idBatch");
    apiaxios.mentorAPI(`mentor/batch/${idBatch}`, null).then((res) => {
      setMentor(res.data.data);
    });
  }, [mentors]);
  return (
    <div>
      <h3>DANH SÁCH NGƯỜI HƯỚNG DẪN</h3>
      <div className="grid wide home-candidate">
        <div className="row home-candidate--list">
          <span className="col l-2-9 ">Họ tên</span>
          <span className="col l-2-7 ">DG</span>
          <span className="col l-2-8 ">Khóa thực tập</span>
          <span className="col l-2-8 ">Nơi công tác</span>
          <span className="col l-2-7 ">Email</span>
          <span className="col l-2-6 ">Địa chỉ</span>
          <span className="col l-2-7 ">Chức vụ</span>
          <span className="col l-2-7 ">Tác vụ</span>
        </div>
        <div className="table-body">
          {currMentor.map((mentor) => (
            <ul className="row sm-gutter sm-gutter--list" key={mentor.id}>
              <li className="col l-2-9">{mentor.fullNameMentor}</li>
              <li className="col l-2-7">{mentor.nameDG}</li>
              <li className="col l-2-8">{mentor.nameCoure}</li>
              <li className="col l-2-8">{mentor.workplace}</li>
              <li className="col l-2-8">{mentor.email}</li>
              <li className="col l-2-8">{mentor.address}</li>
              <li className="col l-2-7">{mentor.position}</li>
              <li className="col l-2-8">
                <i
                  onClick={() => {
                    dispatch(deleteMentor(mentor.idMentor));
                  }}
                  className="fa fa-trash-o"
                  aria-hidden="true"
                ></i>
                <i
                  data-toggle="modal"
                  data-target="#deltaiMentor"
                  className="fa fa-pencil-square-o"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  Xem
                </i>
                <i
                  className="fa fa-calendar-plus-o"
                  aria-hidden="true"
                  onClick={() =>
                    showModal({
                      id: mentor.id,
                      fullNameMentor: mentor.fullNameMentor,
                      email: mentor.email,
                      nameDG: mentor.nameDG,
                      nameCoure: mentor.nameCoure,
                      workplace: mentor.workplace,
                      address: mentor.address,
                      position: mentor.position,
                    })
                  }
                ></i>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <Pagination
        candiPerPage={mentorPerPage}
        totalCandis={mentors.length}
        paginate={paginate}
      />
      <button
        className="btn-add"
        type="submit"
        data-toggle="modal"
        data-target="#exampleModal2"
      >
        Thêm
      </button>
      {AddMentor()}
    </div>
  );
}
export default withRouter(TableMentor);
