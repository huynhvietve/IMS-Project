import React, { useState, useEffect } from "react";
import * as apiaxios from "../../../api/service";
import dayjs from "dayjs";
import "./styleStudent.css";
import Swal from "sweetalert2";
import AddStudent from "./addstudent";
export default function Student(props) {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [titleBatch, settitleBatch] = useState([]);
  const idBatch = localStorage.getItem("idBatch");
  useEffect(() => {
    apiaxios.student(`internship/batch/${idBatch}`).then((res) => {
      setPosts(res.data.data);
    });
  }, [posts]);
  useEffect(() => {
    apiaxios
      .batchAPI(`internshipcourse/${idBatch}`, "Get", null)
      .then((res) => {
        settitleBatch(res.data.data);
      });
  }, {});
  const [values, setValues] = useState({
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
    nameCoure: "",
    fullNameMentor: "",
    nameDG: "",
  });
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...values };
    newFormData[fieldName] = fieldValue;
    setValues(newFormData);
  };
  const handleEditClick = (students) => {
    setValuesId(students.idInternship);
    const formValues = {
      idInternship: students.idInternship,
      fullNameInternship: students.fullNameInternship,
      address: students.address,
      dayOfBirth: students.dayOfBirth,
      university: students.university,
      email: students.email,
      idMentor: students.idMentor,
      internshipProject: students.internshipProject,
      telInternship: students.telInternship,
      securityTest: students.securityTest,
      idDG: students.idDG,
      internshipAgreementPolicy: students.internshipAgreementPolicy,
      toeicScore: students.toeicScore,
      testDate: students.testDate,
      securityAwareness: students.securityAwareness,
      pmtoolsAgileMethodology: students.pmtoolsAgileMethodology,
      workEtiquetteProfessionalCommunication:
        students.workEtiquetteProfessionalCommunication,
      presentationSkills: students.presentationSkills,
      trainingAttendance: students.trainingAttendance,
      status: students.status,
      remark: students.remark,
      pcType: students.pcType,
      internshipSchedule: students.internshipSchedule,
      covidVaccinationiInformation: students.covidVaccinationiInformation,
      certificationDate: students.certificationDate,
      internshipDomain: students.internshipDomain,
      nameCoure: students.nameCoure,
      fullNameMentor: students.fullNameMentor,
      nameDG: students.nameDG,
    };
    setValues(formValues);
  };

  const [valuesId, setValuesId] = useState(null);
  const editSubmit = (event) => {
    event.preventDefault();
    const editBatch = {
      idInternship: values.idInternship,
      fullNameInternship: values.fullNameInternship,
      address: values.address,
      dayOfBirth: values.dayOfBirth,
      university: values.university,
      email: values.email,
      idMentor: values.idMentor,
      telInternship: values.telInternship,
      internshipProject: values.internshipProject,
      internshipAgreementPolicy: values.internshipAgreementPolicy,
      securityTest: values.securityTest,
      idDG: values.idDG,
      toeicScore: values.toeicScore,
      testDate: values.testDate,
      securityAwareness: values.securityAwareness,
      pmtoolsAgileMethodology: values.pmtoolsAgileMethodology,
      workEtiquetteProfessionalCommunication:
        values.workEtiquetteProfessionalCommunication,
      presentationSkills: values.presentationSkills,
      trainingAttendance: values.trainingAttendance,
      status: values.status,
      remark: values.remark,
      pcType: values.pcType,
      internshipSchedule: values.internshipSchedule,
      covidVaccinationiInformation: values.covidVaccinationiInformation,
      certificationDate: values.certificationDate,
      internshipDomain: values.internshipDomain,
      nameDG: values.nameDG,
      fullNameMentor: values.fullNameMentor,
      dateStart: values.dateStart,
      dateEnd: values.dateEnd,
      nameCoure: values.nameCoure,
    };
    apiaxios
      .editStudent(`internship/${valuesId}`, editBatch)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonText: "Xác nhận",
        });
        const newBatch = [...posts];
        const index = posts.findIndex(
          (students) => students.idInternship === valuesId
        );
        newBatch[index] = editBatch;
        setPosts(newBatch);
        settitleBatch(newBatch);
        handleCloseModal();
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

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleDeleteClick = (postsId) => {
    Swal.fire({
      title: "Bạn có muốn xóa khóa thực tập này ?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Hủy",
      confirmButtonText: "Đồng ý",
    }).then((result) => {
      if (result.isConfirmed) {
        const newContacts = [...posts];
        const index = posts.findIndex(
          (products) => products.idInternship === postsId
        );
        apiaxios
          .deleteStudent(`internship/${postsId}`, "DELETE", newContacts)
          .then((res) => {});
        newContacts.splice(index, 1);
        setPosts(newContacts);
      }
    });
  };
  return (
    <div>
      <form>
        <div>
          <h3>DANH SÁCH THỰC TẬP SINH {titleBatch.nameCoure}</h3>
          <div className="grid wide home-candidate">
            <div className="row home-candidate--list">
              <span className="col l-2-8 ">Họ tên</span>
              <span className="col l-2-8 ">Email</span>
              <span className="col l-2-8 ">Trường đại học</span>
              <span className="col l-2-8 ">Loại máy tính</span>
              <span className="col l-2-8 ">Số điện thoại</span>
              <span className="col l-2-8 ">Tên DG</span>
              <span className="col l-2-8 ">Tên mentor</span>
              <span className="col l-2-8 ">Tác vụ</span>
            </div>
            <div className="table-body-internships">
              {posts.map((students) => (
                <ul className="row sm-gutter sm-gutter--lisst">
                  <li className="col l-2-8">{students.fullNameInternship}</li>
                  <li className="col l-2-8">{students.email}</li>
                  <li className="col l-2-8" style={{ textAlign: "center" }}>
                    {students.university}
                  </li>
                  {/* <li className="col l-2-8">{dayjs(students.dayOfBirth).format("DD/MM/YYYY")}</li>             */}
                  <li className="col l-2-8" style={{ textAlign: "center" }}>
                    {students.pcType}
                  </li>
                  <li className="col l-2-8" style={{ textAlign: "center" }}>
                    {students.telInternship}
                  </li>
                  <li
                    className="col l-2-8"
                    style={{ textAlign: "center", marginLeft: "25px" }}
                  >
                    {students.nameDG}
                  </li>
                  <li className="col l-2-8" style={{ textAlign: "center" }}>
                    {students.fullNameMentor}
                  </li>
                  <li className="col l-2-8" style={{ textAlign: "center" }}>
                    <i
                      className="fa fa-trash-o fa-trash-o1"
                      aria-hidden="true"
                      onClick={() => handleDeleteClick(students.idInternship)}
                    ></i>
                    <i
                      className="fa fa-pencil-square-o fa-pencil-square-o1"
                      aria-hidden="true"
                      data-toggle="modal"
                      data-target="#editStudent"
                      onClick={() => {
                        handleEditClick(students);
                        handleOpenModal();
                      }}
                    ></i>
                    <i
                      className="fa fa-eye fa-eye1"
                      aria-hidden="true"
                      data-toggle="modal"
                      data-target="#exampleModal4"
                    ></i>
                  </li>
                  <form>
                    <div className="container">
                      {open && (
                        <div
                          className="modal fade"
                          id="editStudent"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalCenterTitle"
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
                                <h4 id="exampleModalLongTitle">
                                  SỬA THỰC TẬP SINH
                                </h4>
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
                                        value={values.fullNameInternship}
                                        onChange={handleEditFormChange}
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
                                        value={values.address}
                                        onChange={handleEditFormChange}
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
                                        value={dayjs(values.dayOfBirth).format(
                                          "YYYY-MM-DD"
                                        )}
                                        onChange={handleEditFormChange}
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
                                        value={values.university}
                                        onChange={handleEditFormChange}
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
                                        value={values.email}
                                        onChange={handleEditFormChange}
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
                                        value={values.telInternship}
                                        onChange={handleEditFormChange}
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
                                        value={values.internshipProject}
                                        onChange={handleEditFormChange}
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
                                        value={values.internshipAgreementPolicy}
                                        onChange={handleEditFormChange}
                                      ></input>
                                      <br></br>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>Kiểm tra bảo mật:</label>
                                    </td>
                                    <td>
                                      <input
                                        className="inputText"
                                        type="text"
                                        name="securityTest"
                                        value={values.securityTest}
                                        onChange={handleEditFormChange}
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
                                        value={values.toeicScore}
                                        onChange={handleEditFormChange}
                                      ></input>
                                      <br></br>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>Ngày test toeic:</label>
                                    </td>
                                    <td>
                                      <input
                                        className="inputText"
                                        type="date"
                                        name="testDate"
                                        value={dayjs(values.testDate).format(
                                          "YYYY-MM-DD"
                                        )}
                                        onChange={handleEditFormChange}
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
                                        value={values.securityAwareness}
                                        onChange={handleEditFormChange}
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
                                        value={values.pmtoolsAgileMethodology}
                                        onChange={handleEditFormChange}
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
                                        value={
                                          values.workEtiquetteProfessionalCommunication
                                        }
                                        onChange={handleEditFormChange}
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
                                        value={values.presentationSkills}
                                        onChange={handleEditFormChange}
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
                                        value={values.trainingAttendance}
                                        onChange={handleEditFormChange}
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
                                        value={values.remark}
                                        onChange={handleEditFormChange}
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
                                        value={values.pcType}
                                        onChange={handleEditFormChange}
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
                                        value={values.internshipSchedule}
                                        onChange={handleEditFormChange}
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
                                        value={
                                          values.covidVaccinationiInformation
                                        }
                                        onChange={handleEditFormChange}
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
                                        onChange={handleEditFormChange}
                                        value={dayjs(
                                          values.certificationDate
                                        ).format("YYYY-MM-DD")}
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
                                        value={values.internshipDomain}
                                        onChange={handleEditFormChange}
                                      ></input>
                                      <br></br>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>Tên DG:</label>
                                    </td>
                                    <td>
                                      <input
                                        disabled
                                        className="inputText"
                                        type="text"
                                        name="nameDG"
                                        value={values.nameDG}
                                        onChange={handleEditFormChange}
                                      ></input>

                                      <br></br>
                                    </td>
                                    <td style={{ paddingLeft: "20px" }}>
                                      <label>Tên Mentor:</label>
                                    </td>
                                    <td>
                                      <input
                                        disabled
                                        className="inputText"
                                        type="text"
                                        name="fullNameMentor"
                                        value={values.fullNameMentor}
                                        onChange={handleEditFormChange}
                                      ></input>
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
                          onChange={handleEditFormChange}
                          value={values.status}

                        >
                          <option disabled selected hidden>Chọn...</option>
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
                                      <input
                                        disabled
                                        className="inputText"
                                        type="text"
                                        name="nameCoure"
                                        onChange={handleEditFormChange}
                                        value={values.nameCoure}
                                      ></input>
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
                                      className="btn btn-primary btn-Batch"
                                      type="submit"
                                      onClick={editSubmit}
                                    >
                                      Cập nhật
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                </ul>
              ))}
            </div>
          </div>
          {AddStudent()}
          <button
            id="md-them"
            type="button"
            className="btnStudent"
            data-toggle="modal"
            data-target="#exampleModalStudent"
            style={{ marginLeft: "20px" }}
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}
