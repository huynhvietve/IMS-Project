import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { mentorAPI } from "../../../api/service";
import { deleteMentor, getMentor } from "../../../redux/action/mentor.action";
import AddMentor from "../../../components/mentor/addMentor/index";

function Index(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMentor());
  }, []);
  const [mentors, setMentor] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    mentorAPI("mentor/batch/9", "Get", null).then((res) => {
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
          <span className="col l-2-8 ">Email</span>
          <span className="col l-2-8 ">Địa chỉ</span>
          <span className="col l-2-8 ">Chức vụ</span>
          <span className="col l-2-8 ">Tác vụ</span>
        </div>
        <div className="table-body">
          {mentors.map((mentor) => (
            <ul className="row sm-gutter sm-gutter--list" key={mentor.id}>
              <li className="col l-2-9">{mentor.fullNameMentor}</li>
              <li className="col l-2-7">{mentor.nameDG}</li>
              <li className="col l-2-8">{mentor.nameCoure}</li>
              <li className="col l-2-8">{mentor.workplace}</li>
              <li className="col l-2-8">{mentor.email}</li>
              <li className="col l-2-8">{mentor.address}</li>
              <li className="col l-2-8">{mentor.postion}</li>
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
                  data-target="#exampleModaEdit"
                  className="fa fa-pencil-square-o"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  data-toggle="modal"
                  data-target="#exampleModal4"
                ></i>
                <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>
              </li>
            </ul>
          ))}
        </div>
      </div>
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
export default withRouter(Index);
