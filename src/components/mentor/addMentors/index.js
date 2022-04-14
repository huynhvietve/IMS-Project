import React, { useEffect, useState } from "react";
import * as apiaxios from "../../../api/service";
import Swal from "sweetalert2";

export default function AddMentor() {
  const [mentors, setMentor] = useState([]);
  const [Batch, setBatch] = useState([]);
  const [dg, setdg] = useState([]);

  useEffect(() => {
    apiaxios.mentorAPI("internshipCourse", "Get", null).then((res) => {
      setBatch(res.data);
    });
  }, []);

  useEffect(() => {
    apiaxios.mentorAPI("dg", "Get", null).then((res) => {
      setdg(res.data);
    });
  }, []);

  useEffect(() => {
    const idBatch = localStorage.getItem("idBatch");
    apiaxios.mentorAPI(`mentor/batch/${idBatch}`, null).then((res) => {
      setMentor(res.data.data);
    });
  }, [mentors]);

  const [addFormData, setAddFormData] = useState({
    fullNameMentor: "",
    dayOfBirth: "",
    address: "",
    email: "",
    position: "",
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
      address: addFormData.address,
      email: addFormData.email,
      position: addFormData.position,
      idDG: addFormData.idDG,
      idMentor: addFormData.idMentor,
      workplace: addFormData.workplace,
      idInternshipCourse: addFormData.idInternshipCourse,
    };
    apiaxios
      .mentorCreate("mentor", newContact)
      .then((res) => {
        if (res.data.erro) {
          Swal.fire({
            icon: "error",
            text: res.data.error,
            confirmButtonText: "Xác nhận",
          });
        }
        setMentor(res.data);
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            icon: "error",
            text: error.response.data.error,
            confirmButtonText: "Xác nhận",
          });
        } else if (error.request) {
          Swal.fire({
            icon: "error",
            text: error.request,
            confirmButtonText: "Xác nhận",
          });
        } else {
          console.log("Error", error.message);
          Swal.fire({
            icon: "error",
            text: error.message,
            confirmButtonText: "Xác nhận",
          });
        }
        const newContacts = [...mentors, newContact];
        setMentor(newContacts);
      });
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
                      placeholder="Nhập trên 5 kí tự..."
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
                      name="position"
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
                      placeholder="VD: abc@gmail.com"
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
                      style={{ width: "200px" }}
                    >
                      {Batch?.map((itemBatch) => (
                        <option value={itemBatch.idInternshipCourse}>
                          {itemBatch.nameCoure}
                        </option>
                      ))}
                    </select>
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
                      placeholder="Nhập địa chỉ..."
                      onChange={handleAddFormChange}
                    />
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
