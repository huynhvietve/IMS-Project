import React, { useEffect, useState } from "react";
import { mentorAPI } from "../../../api/service";

export default function AddMentor() {
  const [posts, setPosts] = useState([]);
  const [mentors, setMentor] = useState([]);
  const [valueGendle, setValue] = useState("");
  const [Batch, setBatch] = useState([]);
  const [dg, setdg] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    mentorAPI("GetListInternshipCourse", "Get", null).then((res) => {
      setBatch(res.data);
    });
  }, []);
  useEffect(() => {
    mentorAPI("GetListDG", "Get", null).then((res) => {
      setdg(res.data);
    });
  }, []);
  useEffect(() => {
    mentorAPI("mentor/batch/9", "Get", null).then((res) => {
      setMentor(res.data.data);
    });
  }, [mentors]);

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
    mentorAPI("mentor", "POST", newContact).then((res) => {
      setMentor(res.data);
    });
    const newContacts = [...mentors, newContact];
    setMentor(newContacts);
  };

  return (
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ width: "90%" }}>
          <div className="modal-header">
            <div className="container d-flex pl-0">
              <h5
                className="modal-title ml-2"
                id="exampleModalLabel"
                style={{ color: "#007bff" }}
              >
                THÊM NGƯỜI HƯỚNG DẪN
              </h5>
            </div>{" "}
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">X</span>{" "}
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleAddFormSubmit}>
              <table>
                <tr>
                  <td className="left-modal">
                    <label>Họ tên:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      type="text"
                      name="fullNameMentor"
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
                      name="dayOfBirth"
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
                        onChange={() => setValue("0")}
                        value="0"
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
                        onChange={() => setValue("1")}
                        value="1"
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
                        id="inlineRadio2"
                        onChange={() => setValue("2")}
                        value="2"
                      ></input>
                      <label class="form-check-label" for="inlineRadio2">
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
                      {dg?.map((itemDG) => (
                        <option value={itemDG.idDG}>{itemDG.nameDG}</option>
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
                      name="address"
                      type="text"
                      required="required"
                      placeholder="Nhập địa chỉ..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Batch:</label>
                  </td>
                  <td>
                    <select
                      className="inputText"
                      name="idInternshipCourse"
                      id="cars"
                      onChange={handleAddFormChange}
                      required="required"
                      style={{ width: "200px" }}
                    >
                      {Batch?.map((itemBatch) => (
                        <option value={itemBatch.idInternshipCourse}>
                          {itemBatch.nameCoure}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              </table>
              <div className="modal-footer">
                {" "}
                <button
                  type="button"
                  className="btn btn-light"
                  data-dismiss="modal"
                >
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
  );
}
