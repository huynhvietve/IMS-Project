import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import callAPI from "../../api/apiCallerMentor";
// import AddMentor from "../modal/addMentor"

function Index(props) {
  const [valueGendle, setValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [mentors, setMentor] = useState([]);
  const [Batch, setBatch] = useState([]);
  const [dg, setdg] = useState([]);
  useEffect(() => {
    callAPI("GetListInternshipCourse", "Get", null).then((res) => {
      setBatch(res.data);
    });
  }, []);
  useEffect(() => {
    callAPI("GetListDG", "Get", null).then((res) => {
      setdg(res.data);
    });
  }, []);
  useEffect(() => {
    callAPI("GetListMentor/batch9", "Get", null).then((res) => {
      setMentor(res.data);
    });
  }, []);
  console.log(mentors);
  const [addFormData, setAddFormData] = useState({
    fullNameMentor: "",
    dayOfBirth: "",
    gender: "",
    address: "",
    email: "",
    postion: "",
    idDG: "",
    idMentor: "",
    workplace: "",
    idInternshipCourse: "",
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
      fullNameMentor: addFormData.fullNameMentor,
      dayOfBirth: addFormData.dayOfBirth,
      gender: valueGendle,
      address: addFormData.address,
      email: addFormData.email,
      postion: addFormData.postion,
      idDG: addFormData.idDG,
      idMentor: addFormData.idMentor,
      workplace: addFormData.workplace,
      idInternshipCourse: addFormData.idInternshipCourse,
    };
    callAPI("CreateMentor", "POST", newContact).then((res) => {
      console.log(res);
    });
    const newContacts = [...mentors, newContact];
    setMentor(newContacts);
  };

  return (
    <div>
      <h3>DANH SÁCH NGƯỜI HƯỚNG DẪN</h3>
      <div className="grid wide home-candidate">
        <table className="table table-bordered">
          <thead style={{ backgroundColor: "#007bff" }}>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Họ tên</th>
              {/* <th scope="col">Ngày sinh</th> */}
              <th scope="col">Nơi công tác</th>
              <th scope="col">Email</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Chức vụ</th>
              <th scope="col">Tác vụ</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor) => (
              <tr>
                <td>{mentor.idMentor}</td>
                <td>{mentor.fullNameMentor}</td>
                {/* <td>{mentor.dayOfBirth}</td> */}
                <td>{mentor.workplace}</td>
                <td>{mentor.email}</td>
                <td>{mentor.address}</td>
                <td>{mentor.postion}</td>
                <td>
                  <button
                    className="btn-icon"
                    data-toggle="modal"
                    data-target="#exampleModal3"
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn-icon"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                  <button className="btn-icon">
                    <i
                      className="fa fa-eye"
                      aria-hidden="true"
                      data-toggle="modal"
                      data-target="#exampleModal4"
                    ></i>
                  </button>
                  <button className="btn-icon">
                    <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
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
              <p class="text-muted">Bạn có muốn xóa người hướng dẫn này?</p>
            </div>
            <div class="modal-footer">
              {" "}
              <button type="button" class="btn btn-light" data-dismiss="modal">
                Hủy
              </button>{" "}
              <button type="button" class="btn btn-danger-del">
                Xóa
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}
      {/* Edit Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="container d-flex pl-0">
                <h5
                  className="modal-title ml-2"
                  id="exampleModalLabel"
                  style={{ color: "#007bff" }}
                >
                  SỬA NGƯỜI HƯỚNG DẪN
                </h5>
              </div>{" "}
            </div>
            <div className="modal-body">
              <table>
                <tr>
                  <td className="left-modal">
                    <label>Họ tên:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      type="text"
                      name="fullName"
                      required="required"
                      placeholder="Nhập tên người hướng dẫn..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                  <td className="right-modal">
                    <label>Chức vụ:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      type="text"
                      name="postion"
                      required="required"
                      placeholder="Nhập chức vụ..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Ngày sinh:</label>
                  </td>
                  <td>
                    <input
                      style={{ width: "200px" }}
                      className="inputText"
                      required="required"
                      type="date"
                      name="dateOfBirth"
                      onChange={handleAddFormChange}
                    />
                  </td>
                  <td className="right-modal">
                    <label>Email:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      name="email"
                      type="text"
                      required="required"
                      placeholder="Nhập email..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Giới tính:</label>
                  </td>
                  <td>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        onChange={() => setValue("Nam")}
                        value="option1"
                      ></input>
                      <label class="form-check-label" for="inlineRadio1">
                        Nam
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        onChange={() => setValue("Nữ")}
                        value="option2"
                      ></input>
                      <label class="form-check-label" for="inlineRadio2">
                        Nữ
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        onChange={() => setValue("Khác")}
                        value="option3"
                      ></input>
                      <label class="form-check-label" for="inlineRadio3">
                        Khác
                      </label>
                    </div>
                  </td>
                  <td className="right-modal">
                    <label>Tên DG:</label>
                  </td>
                  <td>
                    <select
                      className="inputText"
                      name="idDG"
                      id="cars"
                      onChange={handleAddFormChange}
                      required="required"
                      style={{ width: "200px" }}
                    >
                      {posts.map((mentor) => (
                        <option value="dg1">{mentor.idDG}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Nơi công tác:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      name="workplace"
                      type="text"
                      required="required"
                      placeholder="Nhập nơi công tác..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                  <td className="right-modal">
                    <label>Địa chỉ:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      name="addreess"
                      type="text"
                      required="required"
                      placeholder="Nhập địa chỉ..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="modal-footer">
              {" "}
              <button
                type="button"
                className="btn btn-light"
                data-dismiss="modal"
              >
                Hủy
              </button>{" "}
              <button type="button" className="btn btn-danger-del">
                Sửa
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}
      {/* Add Modal */}
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content" style={{width: "90%"}}>
              <div className="modal-header">
                <div className="container d-flex pl-0">
                  <h5 className="modal-title ml-2" id="exampleModalLabel" style={{color: "#007bff"}}>
                    THÊM NGƯỜI HƯỚNG DẪN
                  </h5>
                </div>{" "}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  x
                  {" "}
                  <span aria-hidden="true">&times;</span>{" "}
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAddFormSubmit}>
                  <table>
                    <tr>
                      <td className="left-modal"><label>Họ tên:</label></td>
                      <td>
                        <input
                          className="inputText"
                          type="text"
                          name="fullNameMentor"
                          required="required"
                          placeholder="Nhập tên người hướng dẫn..."
                          onChange={handleAddFormChange}/>
                      </td>
                      <td className="right-modal"><label>Chức vụ:</label></td>
                      <td>
                        <input
                        className="inputText"
                        type="text"
                        name="postion"
                        required="required"
                        placeholder="Nhập chức vụ..."
                        onChange={handleAddFormChange}
                        />
                        </td>
                    </tr>
                    <tr>
                    <td className="left-modal"><label>Ngày sinh:</label></td>
                      <td>
                        <input 
                        style={{width: "200px"}}
                        className="inputText"
                        required="required"
                        type="date"
                        name="dayOfBirth"
                        onChange={handleAddFormChange}/>
                        </td> 
                      <td className="right-modal"><label>Email:</label></td>
                      <td>
                        <input
                        className="inputText"
                        name="email"
                        type="text"
                        required="required"
                        placeholder="Nhập email..."
                        onChange={handleAddFormChange}/>
                        </td>
                    </tr>
                    <tr>
                      <td className="left-modal"><label>Giới tính:</label></td>
                      <td>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={() =>setValue("0")} value="0"></input>
                          <label class="form-check-label" for="inlineRadio1">Nam</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={() =>setValue("1")} value="1"></input>
                          <label class="form-check-label" for="inlineRadio2">Nữ</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" onChange={() =>setValue("Khác")} value="3"></input>
                          <label class="form-check-label" for="inlineRadio3">Khác</label>
                        </div>
                      </td>
                      <td className="right-modal"><label>Tên DG:</label></td>
                      <td>
                        <select 
                        className="inputText"
                        name="idDG"
                        id="cars"
                        onChange={handleAddFormChange}
                        required="required"
                        style={{width: "200px"}}>
                          {dg?.map(itemDG => 
                            <option value={itemDG.idDG} >{itemDG.nameDG}</option>
                            )}
                        </select>
                      </td>
                    </tr>
                    <tr>
                    <td className="left-modal"><label>Nơi công tác:</label></td>
                      <td>
                        <input
                        className="inputText"
                        name="workplace"
                        type="text"
                        required="required"
                        placeholder="Nhập nơi công tác..."
                        onChange={handleAddFormChange}
                        />
                        </td>
                      <td className="right-modal"><label>Địa chỉ:</label></td>
                      <td>
                        <input
                        className="inputText"
                        name="address"
                        type="text"
                        required="required"
                        placeholder="Nhập địa chỉ..."
                        onChange={handleAddFormChange}
                        />
                        </td>
                    </tr>
                    <tr>
                      <td className="left-modal"><label>Batch:</label></td>
                      <td>
                        <select 
                        className="inputText"
                        name="idInternshipCourse"
                        id="cars"
                        onChange={handleAddFormChange}
                        required="required"
                        style={{width: "200px"}}>
                          {Batch?.map(itemBatch => 
                            <option value={itemBatch.idInternshipCourse} >{itemBatch.nameCoure}</option>
                            )}
                        </select>
                        </td>
                    </tr>
                  </table>
                  <div className="modal-footer">
                    {" "}
                    <button type="button" className="btn btn-light" data-dismiss="modal">
                      Hủy
                    </button>{" "}
                    <button type="submit" className="btn btn-danger-del btn-add">
                      Thêm
                    </button>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/*End Modal*/}
      {/*Detail Modal*/}
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ width: "70%" }}>
            <div className="modal-header">
              <div className="container d-flex pl-0">
                <h5
                  className="modal-title ml-2"
                  id="exampleModalLabel"
                  style={{ color: "#007bff" }}
                >
                  CHI TIẾT NGƯỜI HƯỚNG DẪN
                </h5>
              </div>{" "}
            </div>
            <div className="modal-body">
              <table>
                <tr>
                  <td className="left-modal">
                    <label>Họ tên:</label>
                  </td>
                  <td>
                    <label>Van A</label>
                  </td>
                  <td className="right-modal">
                    <label>Chức vụ:</label>
                  </td>
                  <td>
                    <label>PM</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Ngày sinh:</label>
                  </td>
                  <td>
                    <label>1/1/2022</label>
                  </td>
                  <td className="right-modal">
                    <label>Email:</label>
                  </td>
                  <td>
                    <label>sdas@example.com</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Giới tính:</label>
                  </td>
                  <td>
                    <label>nma/nư</label>
                  </td>
                  <td className="right-modal">
                    <label>Tên DG:</label>
                  </td>
                  <td>
                    <label>DG 5</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Nơi công tác:</label>
                  </td>
                  <td>
                    <label>Mentor 123</label>
                  </td>
                  <td className="right-modal">
                    <label>Địa chỉ:</label>
                  </td>
                  <td>
                    <label>PM</label>
                  </td>
                </tr>
              </table>
            </div>
            <div className="modal-footer">
              {" "}
              <button
                type="button"
                className="btn btn-light"
                data-dismiss="modal"
              >
                Hủy
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      {/*End Modal*/}
    </div>
  );
}
export default withRouter(Index);
