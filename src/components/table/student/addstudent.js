import React, { useState, useEffect } from "react";
import * as apiaxios from "../../../api/service";
import dayjs from "dayjs";
import "./styleStudent.css";
import Swal from "sweetalert2";
export default function AddStudent() {
  const [posts, setPosts] = useState([]);
  const [dg, setDg] = useState([]);
  const [open, setOpen] = useState(false);
  const [titleBatch, settitleBatch] = useState([]);
  const idBatch = localStorage.getItem("idBatch");
  const [student, setStudent] = useState([]);
  useEffect(() => {
    apiaxios.batchAPI("internshipcourse").then((res) => {
      setStudent(res.data.data);
    });
  }, []);
  useEffect(() => {
    apiaxios.student(`internship/batch/${idBatch}`).then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  useEffect(() => {
    apiaxios
      .batchAPI(`internshipcourse/${idBatch}`, "Get", null)
      .then((res) => {
        settitleBatch(res.data.data);
      });
  }, {});
  useEffect(() => {
    apiaxios.dg(`dg`).then((res) => {
      setDg(res.data.data);
    });
  }, []);
  const [mentor, setmentor] = useState([]);
  useEffect(() => {
    apiaxios.mentorAPI(`mentor/batch/${idBatch}`).then((res) => {
      setmentor(res.data.data);
    });
  }, []);
  const closeModal = () => {
    const modals = document.getElementById("exampleModalStudent");
    modals.style.display = "none";
  };
  const [addFormData, setAddFormData] = useState({
    idInternship: "",
    fullNameInternship: "",
    address: "",
    dayOfBirth: "",
    university: "",
    email: "",
    idMentor: "",
    telInternship: "",
    internshipProject: "",
    internshipAgreementPolicy: "",
    securityTest: "",
    idDG: "",
    toeicScore: "",
    testDate: "",
    securityAwareness: "",
    pmtoolsAgileMethodology: "",
    workEtiquetteProfessionalCommunication: "",
    presentationSkills: "",
    trainingAttendance: "",
    status: "",
    remark: "",
    pcType: "",
    internshipSchedule: "",
    covidVaccinationiInformation: "",
    certificationDate: "",
    internshipDomain: "",
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
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      idInternship: addFormData.idInternship,
      fullNameInternship: addFormData.fullNameInternship,
      address: addFormData.address,
      dayOfBirth: addFormData.dayOfBirth,
      university: addFormData.university,
      email: addFormData.email,
      idMentor: addFormData.idMentor,
      telInternship: addFormData.telInternship,
      internshipProject: addFormData.internshipProject,
      internshipAgreementPolicy: addFormData.internshipAgreementPolicy,
      securityTest: addFormData.securityTest,
      idDG: addFormData.idDG,
      toeicScore: addFormData.toeicScore,
      testDate: addFormData.testDate,
      securityAwareness: addFormData.securityAwareness,
      securityAwareness: addFormData.securityAwareness,
      pmtoolsAgileMethodology: addFormData.pmtoolsAgileMethodology,
      workEtiquetteProfessionalCommunication:
        addFormData.workEtiquetteProfessionalCommunication,
      presentationSkills: addFormData.presentationSkills,
      trainingAttendance: addFormData.trainingAttendance,
      status: addFormData.status,
      remark: addFormData.remark,
      pcType: addFormData.pcType,
      internshipSchedule: addFormData.internshipSchedule,
      covidVaccinationiInformation: addFormData.covidVaccinationiInformation,
      certificationDate: addFormData.certificationDate,
      internshipDomain: addFormData.internshipDomain,
      idInternshipCourse: addFormData.idInternshipCourse,
    };
    apiaxios
      .studentCreate("internship", newContact)
      .then((res) => {
        const newBatch = [...posts];
        setPosts(newBatch);
        handleCloseModal();
        closeModal();
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
      });
  };
  return (
    <div
      className="modal fade"
      id="exampleModalStudent"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalStudent"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg"
        role="document"
        style={{ width: "700px", marginTop: "5px" }}
      >
        <div
          className="modal-content"
          style={{ marginTop: "10px", width: "770px" }}
        >
          <div className="modal-header">
            <h4 id="exampleModalStudent">THÊM THỰC TẬP SINH</h4>
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
            <form>
              <tr>
                <td>
                  <label>Họ tên:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="fullNameInternship"
                    onChange={handleAddFormChange}
                  />
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Địa chỉ: </label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="address"
                    onChange={handleAddFormChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Ngày sinh: </label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="date"
                    name="dayOfBirth"
                    onChange={handleAddFormChange}
                  ></input>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Trường đại học: </label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="university"
                    onChange={handleAddFormChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="email"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Số điện thoại:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="telInternship"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Dự án thực tập:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="internshipProject"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Thỏa thuận thực tập:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="internshipAgreementPolicy"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Điểm bảo mật:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="securityTest"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Điểm Toeic:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="toeicScore"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Ngày kiểm tra:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="date"
                    name="testDate"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Nhận thức bảo mật:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="securityAwareness"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phương pháp Agile:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="pmtoolsAgileMethodology"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Nghi thức truyền thông:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="workEtiquetteProfessionalCommunication"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Kỉ năng thuyết trình:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="presentationSkills"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Tham dự khóa đào tạo:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="trainingAttendance"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Bình luận:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="remark"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Loại máy tính:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="pcType"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Lịch thực tập:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="internshipSchedule"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Thông tin covid:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="covidVaccinationiInformation"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Ngày chứng nhận:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="date"
                    name="certificationDate"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Miền thực tập:</label>
                </td>
                <td>
                  <input
                    className="inputText"
                    type="text"
                    name="internshipDomain"
                    onChange={handleAddFormChange}
                  ></input>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Tên DG:</label>
                </td>
                <td>
                  <select
                    style={{ width: "200px", height: "30px" }}
                    className="input-Student"
                    name="idDG"
                    onChange={handleAddFormChange}
                  >
                    <option disabled selected hidden>
                      Chọn...
                    </option>
                    {dg?.map((itemDG) => (
                      <option value={itemDG.idDG}>{itemDG.nameDG}</option>
                    ))}
                  </select>

                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Tên Mentor:</label>
                </td>
                <td>
                  <select
                    style={{ width: "200px", height: "30px" }}
                    className="input-Student"
                    name="idMentor"
                    onChange={handleAddFormChange}
                  >
                    <option disabled selected hidden>
                      Chọn...
                    </option>
                    {mentor?.map((itemMentor) => (
                      <option value={itemMentor.idMentor}>
                        {itemMentor.fullNameMentor}
                      </option>
                    ))}
                  </select>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Trạng thái:</label>
                </td>
                <td>
                  <select
                    className="inputText"
                    name="status"
                    id="cars"
                    onChange={handleAddFormChange}
                  >
                    <option disabled selected hidden>
                      Chọn...
                    </option>
                    <option value="Pass">Pass</option>
                    <option value="False">False</option>
                    <option value="N/A">N/A</option>
                  </select>
                  <br></br>
                </td>
                <td style={{ paddingLeft: "20px" }}>
                  <label>Khóa thực tập:</label>
                </td>
                <td>
                  <select
                    className="inputText"
                    name="idInternshipCourse"
                    id="cars"
                    onChange={handleAddFormChange}
                  >
                    <option disabled selected hidden>
                      Chọn...
                    </option>
                    {student?.map((itemBatch) => (
                      <option value={itemBatch.idInternshipCourse}>
                        {itemBatch.nameCoure}
                      </option>
                    ))}
                  </select>
                  <br></br>
                </td>
              </tr>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-Batch-Cancel"
                  data-dismiss="modal"
                >
                  Hủy
                </button>
                <button
                  onClick={handleAddFormSubmit}
                  type="submit"
                  className="btn btn-danger-del btn-add"
                >
                  Thêm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}