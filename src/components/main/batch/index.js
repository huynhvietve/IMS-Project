import React, { useState, useEffect } from "react";
import {batchAPI} from "../../../api/service";
import { useHistory } from "react-router-dom";
import "./style.css";
export default function Batch(props) {
  let history = useHistory();
  const [idTemp, setIdTemp] = useState();
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    batchAPI('internshipcourse','Get',null)
     .then( (res) => {
      setPosts(res.data)
     });
   },[]);
    // {getIT()};
   const [addFormData, setAddFormData] = useState({
    nameCoure: "",
    dateStart: "",
    dataEnd: "",
    status: "",
    kindOfInternship: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      nameCoure: addFormData.nameCoure,
      dateStart: addFormData.dateStart,
      dateEnd: addFormData.dateEnd,
      status: addFormData.status,
      kindOfInternship: addFormData.kindOfInternship,
    };
    batchAPI('internshipcourse/create','POST',newContact)
    .then( (res) => {
    console.log(res);
    });
    const newContacts = [...posts, newContact];
    setPosts(newContacts);
  };
//chon khoa thuc tap theo id
  const handleSubmit = () => {
    history.push(`/Home/Batch?id=${idTemp}`)
  }
  return (
    <div>
      <div
        id="load"
        style={{ display: "block" }}
        className="modal"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ marginTop: "150px" }}>
            <div className="modal-header">
              <h5 className="modal-title">Bắt đầu</h5>
            </div>
            <div className="modal-body">
              <label>Chọn khóa thực tập : </label>
              <select
                onChange={(e) => setIdTemp(e.currentTarget.value)}
                defaultValue
              >
                {posts?.map((item) => (
                  <option
                    key={item.idInternshipCourse}
                    value={item.idInternshipCourse}
                  >
                    {item.nameCoure}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                id="md-them1"
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                style={{ width: "156px", float: "right", marginRight: "50px" }}
              >
                Thêm
              </button>
              <button
                onClick={handleSubmit}
                id="md-sumit"
                type="submit"
                className="btn btn-primary"
                style={{ width: "156px", float: "right", marginRight: "50px" }}
              >
                xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center", color: "#1aa3ff" }}>KHÓA THỰC TẬP</h1>
        <div className="container">
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg"
                role="document"
                style={{ width: "700px", marginTop: "100px" }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalLongTitle"
                      style={{ color: "#1aa3ff" }}
                    >
                      Thêm khóa thực tập
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleAddFormSubmit}>
                      <tr>
                        <td>
                          <label >Khóa thực tập :</label>
                        </td>
                        <td>
                          <input
                            className="inputText"
                            type="text"
                            name="nameCoure"
                            required="required"
                            placeholder="Nhập tên khóa..."
                            onChange={handleAddFormChange}
                          />
                        </td>
                        <td style={{ paddingLeft: "20px" }}>
                          <label>Loại thực tập : </label>
                        </td>
                        <td>
                          <select
                            className="inputText"
                            name="status"
                            id="cars"
                            onChange={handleAddFormChange}
                            required="required"
                          >
                            <option value="">Chọn...</option>
                            <option value="Done">Done</option>
                            <option value="In progress">In progress</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Ngày bắt đầu  </label>
                        </td>
                        <td>
                          <input
                            className="inputText"
                            required="required"
                            type="date"
                            name="dateStart"
                            onChange={handleAddFormChange}
                          ></input>
                        </td>
                        <td style={{ paddingLeft: "20px" }}>
                          <label>Trạng thái : </label>
                        </td>
                        <td>
                          <select
                            className="inputText"
                            name="kindOfInternship"
                            id="cars"
                            onChange={handleAddFormChange}
                            required="required"
                          >
                            <option value="">Chọn...</option>
                            <option value="Full time">Full time</option>
                            <option value="Part time">Part time</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Ngày kết thúc:</label>
                        </td>
                        <td>
                          <input
                            className="inputText"
                            required="required"
                            type="date"
                            name="dateEnd"
                            onChange={handleAddFormChange}
                          ></input>
                          <br></br>
                        </td>
                      </tr>
                      <div className="modal-footer">
                        <button
                          id="md-huy"
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Hủy
                        </button>
                        <button
                          id="md-them2"
                          type="submit"
                          className="btn btn-primary"
                        >
                          Thêm
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
