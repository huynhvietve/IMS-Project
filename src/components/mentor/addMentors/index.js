import React, { useEffect, useState } from "react";
import * as apiaxios from "../../../api/service";
import Swal from "sweetalert2";
import { batch } from "react-redux";

export default function AddMentor() {
  const [mentors, setMentor] = useState([]);
  const [Batch, setBatch] = useState([]);
  const [batchTitle, setBatchTitle] = useState([]);
  const [dg, setdg] = useState([]);
  const idBatch = localStorage.getItem("idBatch");
    const closeModal = () => {
    const modals = document.getElementById("exampleModal2");
    modals.style.display = "none";
  };
  useEffect(() => {
    apiaxios
      .batchAPI("internshipcourse", "Get", null)
      .then((res) => {
        setBatch(res.data.data);
      });
  }, []);
  useEffect(() => {
    apiaxios
      .batchAPI(`internshipcourse/${idBatch}`, "Get", null)
      .then((res) => {
        setBatchTitle(res.data.data);
      });
  }, []);
  useEffect(() => {
    apiaxios.mentorAPI("internshipcourse", "Get", null).then((res) => {
      setBatch(res.data.data);
    });
  }, []);

  useEffect(() => {
    apiaxios.mentorDG(`dg?idInternshipCourse=${idBatch}`, "Get", null).then((res) => {
      setdg(res.data.data);
    });
  }, []);
  const tai_lai_trang = (event) => {
    window.location.reload();
  };
  useEffect(() => {
    apiaxios.mentorAPI(`mentor/batch/${idBatch}`, null).then((res) => {
      setMentor(res.data.data);
    });
  }, []);

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
  const handleReset = () => {
    setAddFormData({});
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      (select) => (select.value = "Ch???n...")
    );
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
      .mentorCreate(`mentor?idInternshipCourse=${idBatch}`, newContact)
      .then((res) => {
        setMentor(res.data);
        handleReset();
        closeModal();
        tai_lai_trang();
        
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            icon: "error",
            text: error.response.data.error,
            confirmButtonText: "X??c nh???n",
          });
        } else if (error.request) {
          Swal.fire({
            icon: "error",
            text: error.request,
            confirmButtonText: "X??c nh???n",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: error.message,
            confirmButtonText: "X??c nh???n",
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
            <div className="contai  ner d-flex pl-0">
              <h4 id="exampleModalLabel">TH??M NG?????I H?????NG D???N</h4>
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleAddFormSubmit}>
              <table>
                <tr>
                  <td className="left-mentor">
                    <label>H??? t??n:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      type="text"
                      name="fullNameMentor"
                      placeholder="Nh???p t??n..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                  <td className="right-mentor">
                    <label>Ch???c v???:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      type="text"
                      name="position"
                      placeholder="Nh???p ch???c v???..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="left-mentor">
                    <label>Ng??y sinh:</label>
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
                  <td className="right-mentor">
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
                  <td className="left-mentor">
                    <label>T??n DG:</label>
                  </td>
                  <td>
                    <select
                      className="inputText"
                      name="idDG"
                      id="cars"
                      onChange={handleAddFormChange}
                      style={{ width: "200px" }}
                    >
                      <option disabled selected hidden>
                        Ch???n...
                      </option>
                      {dg?.map((itemDG) => (
                        <option value={itemDG.idDG}>{itemDG.nameDG}</option>
                      ))}
                    </select>
                  </td>
                  <td className="right-mentor">
                    <label>?????a ch???:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      name="address"
                      type="text"
                      placeholder="Nh???p ?????a ch???..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="left-mentor">
                    <label>N??i c??ng t??c:</label>
                  </td>
                  <td>
                    <input
                      className="inputText"
                      name="workplace"
                      type="text"
                      placeholder="Nh???p n??i c??ng t??c..."
                      onChange={handleAddFormChange}
                    />
                  </td>
                </tr>
              </table>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  data-dismiss="modal"
                >
                  H???y
                </button>
                <button type="submit" className="btn btn-danger-del ">
                  Th??m
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
