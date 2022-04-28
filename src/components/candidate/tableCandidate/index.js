import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as constTable from "../../../constant/constTable";
import * as constCandi from "../../../constant/constCandidate";
import Pagination from "../pagination/index";
import { withRouter } from "react-router-dom";
import { candidateAPI, batchAPI, UploadAPI } from "../../../api/service";
import AddCandidate from "../addCandidate/index";
import CalendarInterview from "../../calendarinterview/create/index";
import { popUpActions } from "../../../redux/store/popup";
import Preview from "../../calendarinterview/review";

import { deleteCandi } from "../../../redux/action/candi.action";
import * as apiaxios from "../../../api/service";
import Swal from "sweetalert2";
import dayjs from "dayjs";

import "../../../asset/css/interviewShedule.css";
function TableCandidate() {
  const dispatch = useDispatch();
  const [candi, setCandi] = useState([]);
  const [batchTitle, setBatchTitle] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const showModal = (data) => {
    dispatch(popUpActions.show());
    dispatch(popUpActions.setData(data));
  };
  const [candiPerPage, setCandiPerPage] = useState(10);

  // Get current candidate
  const indexOfLastCandi = currPage * candiPerPage;
  const indexOfFirstCandi = indexOfLastCandi - candiPerPage;
  const currCandi = candi.slice(indexOfFirstCandi, indexOfLastCandi);
  const paginate = (pageNumber) => setCurrPage(pageNumber);
  const idBatch = localStorage.getItem("idBatch");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    apiaxios
      .candidateAPI(`candidate/batch/${idBatch}?fullName=${search}`)
      .then((res) => {
        setCandi(res.data.data);
      });
  }, [candi]);

  useEffect(() => {
    batchAPI(`internshipcourse/${idBatch}`, "Get", null).then((res) => {
      setBatchTitle(res.data.data);
    });
  }, {});

  const status = (status) => {
    const value = "N/A";
    if (status == null) {
      return value;
    }
    return status;
  };
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      (select) => (select.value = "Chọn...")
    );
  };

  const [open, setOpen] = useState(true);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const [values, setValues] = useState({
    idCandidate: "",
    fullName: "",
    tel: "",
    emailCandidate: "",
    internshipDomain: "",
    preferredSkills: "",
    university: "",
    faculty: "",
    currentYearofStudy: "",
    studentID: "",
    GPA: "",
    graduationYear: "",
    idDG: "",
    idMentor: "",
    preferredInternshipStartDate: "",
    preferredInternshipDuration: "",
    internshipSchedule: "",
    pcType: "",
    status: "",
    technicalComments: "",
    technicalScore: "",
    attitude: "",
    englishCommunication: "",
    comments: "",
    remarks: "",
    projectExperience: "",
    expectedGraduationSchedule: "",
    remainingSubjects: "",
    covidVaccinationiInformation: "",
    covidVaccinationCertificate: "",
    certificationDate: "",
    interviewLink: "",
    interviewDate: "",
    interviewTime: "",
    interviewer: "",
    emailInterviewer: "",
  });
  const [valuesId, setValuesId] = useState(null);
  const handleEditChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...values };
    newFormData[fieldName] = fieldValue;
    setValues(newFormData);
  };
  const handleClick = (candidate) => {
    setValuesId(candidate.idCandidate);
    const formValues = {
      idCandidate: candidate.idCandidate,
      fullName: candidate.fullName,
      tel: candidate.tel,
      emailCandidate: candidate.emailCandidate,
      internshipDomain: candidate.internshipDomain,
      preferredSkills: candidate.preferredSkills,
      university: candidate.university,
      faculty: candidate.faculty,
      currentYearofStudy: candidate.currentYearofStudy,
      studentID: candidate.studentID,
      GPA: candidate.GPA,
      graduationYear: candidate.graduationYear,
      preferredInternshipStartDate: candidate.preferredInternshipStartDate,
      preferredInternshipDuration: candidate.preferredInternshipDuration,
      internshipSchedule: candidate.internshipSchedule,
      pcType: candidate.pcType,
      status: candidate.status,
      technicalComments: candidate.technicalComments,
      technicalScore: candidate.technicalScore,
      attitude: candidate.attitude,
      englishCommunication: candidate.englishCommunication,
      comments: candidate.comments,
      remarks: candidate.remarks,
      projectExperience: candidate.projectExperience,
      expectedGraduationSchedule: candidate.expectedGraduationSchedule,
      remainingSubjects: candidate.remainingSubjects,
      covidVaccinationiInformation: candidate.covidVaccinationiInformation,
      covidVaccinationCertificate: candidate.covidVaccinationCertificate,
      certificationDate: candidate.certificationDate,
      interviewLink: candidate.interviewLink,
      interviewDate: candidate.interviewDate,
      interviewTime: candidate.interviewTime,
      interviewer: candidate.interviewer,
      emailInterviewer: candidate.emailInterviewer,
    };
    setValues(formValues);
  };
  const editSubmit = (event) => {
    event.preventDefault();
    const editCandi = {
      idCandidate: values.idCandidate,
      fullName: values.fullName,
      tel: values.tel,
      emailCandidate: values.emailCandidate,
      internshipDomain: values.internshipDomain,
      preferredSkills: values.preferredSkills,
      university: values.university,
      faculty: values.faculty,
      currentYearofStudy: values.currentYearofStudy,
      studentID: values.studentID,
      GPA: values.GPA,
      graduationYear: values.graduationYear,
      preferredInternshipStartDate: values.preferredInternshipStartDate,
      preferredInternshipDuration: values.preferredInternshipDuration,
      internshipSchedule: values.internshipSchedule,
      pcType: values.pcType,
      technicalComments: values.technicalComments,
      technicalScore: values.technicalScore,
      attitude: values.attitude,
      englishCommunication: values.englishCommunication,
      comments: values.comments,
      remarks: values.remarks,
      projectExperience: values.projectExperience,
      expectedGraduationSchedule: values.expectedGraduationSchedule,
      remainingSubjects: values.remainingSubjects,
      covidVaccinationiInformation: values.covidVaccinationiInformation,
      covidVaccinationCertificate: values.covidVaccinationCertificate,
      certificationDate: values.certificationDate,
    };
    apiaxios
      .candidatePut(`candidate/${valuesId}`, editCandi)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: "Cập nhật thành công !!!",
          showConfirmButton: false,
          timer: 1000,
        });
        const newCandi = [...candi];
        const index = candi.findIndex(
          (candidate) => candidate.idCandidate === valuesId
        );
        newCandi[index] = editCandi;
        setCandi(newCandi);
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
          Swal.fire({
            icon: "error",
            text: error.message,
            confirmButtonText: "Xác nhận",
          });
        }
      });
  };

  const [file, setFile] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    UploadAPI("upload", formData, config)
      .then((response) => {
        console.log(response.data);
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
          Swal.fire({
            icon: "error",
            text: error.message,
            confirmButtonText: "Xác nhận",
          });
        }
      });
  };

  return (
    <div>
      <CalendarInterview />
      <Preview />

      <h3 className="text-header">
        {constTable.H3} {batchTitle.nameCoure}
      </h3>
      <div className="input-toolbar">
        <div className="uploader-candi">
          <form style={{ marginLeft: "7px" }} onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange} />
            <button className="btn-upload" type="submit">
              Upload
            </button>
          </form>
        </div>
        <div class="search">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            class="search__input-candi"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <i class="search__icon fa fa-search"></i>
        </div>
      </div>
      <div className="grid wide home-candidate">
        <div className="row home-candidate--list">
          <span className="col l-2-8-candi ">{constTable.NAME}</span>
          <span className="col l-2-8-candi ">{constTable.EMAIL}</span>
          <span className="col l-2-8-candi ">{constTable.STID}</span>
          <span className="col l-2-8-candi ">{constTable.UNI}</span>
          <span className="col l-2-8-candi ">{constTable.ITDOMAIN}</span>
          <span className="col l-2-8-candi ">{constTable.ITRESULT}</span>
          <span className="col l-2-8-candi ">{constTable.ACTION}</span>
        </div>
        <div className="table-body">
          {currCandi.length > 0 ? (
            currCandi?.map((candidate) => (
              <ul
                className="row sm-gutter sm-gutter--list"
                key={candidate.idCandidate}
              >
                <li className="col l-2-8-candi">{candidate.fullName}</li>
                <li className="col l-2-8-candi">{candidate.emailCandidate}</li>
                <li className="col l-2-8-candi">{candidate.studentID}</li>
                <li className="col l-2-8-candi">{candidate.university}</li>
                <li className="col l-2-8-candi">
                  {candidate.internshipDomain}
                </li>
                <li className="col l-2-8-candi">{status(candidate.status)}</li>
                <li className="col l-2-8-candi">
                  <i
                    className="fa fa-trash-o fa-trash-o1"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteCandi(candidate.idCandidate));
                    }}
                  ></i>
                  <i
                    className="fa fa-pencil-square-o fa-pencil-square-o1"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#exampleModalEdit"
                    onClick={() => {
                      handleClick(candidate);
                      handleOpenModal();
                      handleReset();
                    }}
                  ></i>
                  <i
                    className="fa fa-eye fa-eye1"
                    aria-hidden="true"
                    data-toggle="modal"
                    data-target="#exampleModalDetail"
                    onClick={() => {
                      handleClick(candidate);
                      handleOpenModal();
                      handleReset();
                    }}
                  ></i>
                  <i
                    className="fa fa-calendar-plus-o fa-calendar-plus-o1"
                    aria-hidden="true"
                    onClick={() =>
                      showModal({
                        id: candidate.idCandidate,
                        fullName: candidate.fullName,
                        email: candidate.emailCandidate,
                      })
                    }
                  ></i>
                </li>
                <form>
                  <div>
                    {open && (
                      <div
                        className="modal fade"
                        id="exampleModalEdit"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content modal-content-top">
                            <div className="modal-header">
                              <div className="container d-flex pl-0">
                                <h4
                                  className="modal-title ml-2"
                                  id="exampleModalLabel"
                                  style={{ color: "#007bff" }}
                                >
                                  {constTable.H5EIDT}
                                </h4>
                              </div>{" "}
                            </div>
                            <div className="modal-body">
                              <table>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.NAME}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="fullName"
                                      value={values.fullName}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.PHONE}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="tel"
                                      value={values.tel}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.EMAIL}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="emailCandidate"
                                      onChange={handleEditChange}
                                      value={values.emailCandidate}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.IDSTUDENT}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="studentID"
                                      value={values.studentID}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.FACULTY}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="faculty"
                                      value={values.faculty}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.CRRYEAR}</label>
                                  </td>
                                  <td>
                                    <select
                                      style={{
                                        width: "189.04px",
                                        height: "29.98px",
                                      }}
                                      name="currentYearofStudy"
                                      id="year-study"
                                      value={values.currentYearofStudy}
                                      onChange={handleEditChange}
                                    >
                                      <option value="Năm 1">Năm 1</option>
                                      <option value="Năm 2">Năm 2</option>
                                      <option value="Năm 3">Năm 3</option>
                                      <option value="Năm 4">Năm 4</option>
                                      <option value="Khác">Khác</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.SCHOOL}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="university"
                                      value={values.university}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.AVGSCORE}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="GPA"
                                      value={values.GPA}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.GRAYEAR}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="graduationYear"
                                      value={values.graduationYear}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.GRADUATION}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="expectedGraduationSchedule"
                                      value={values.expectedGraduationSchedule}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.REMSUB}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="remainingSubjects"
                                      value={values.remainingSubjects}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.PRJEXP}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="projectExperience"
                                      value={values.projectExperience}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ITDOMAIN}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="internshipDomain"
                                      value={values.internshipDomain}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.INTERTIME}</label>
                                  </td>
                                  <td>
                                    <select
                                      style={{
                                        width: "189.04px",
                                        height: "29.98px",
                                      }}
                                      name="preferredInternshipDuration"
                                      id="inter-duration"
                                      value={values.preferredInternshipDuration}
                                      onChange={handleEditChange}
                                    >
                                      <option value="8 Tuần">8 tuần</option>
                                      <option value="12 Tuần">12 tuần</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.INTERNDATE}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="date"
                                      name="preferredInternshipStartDate"
                                      value={dayjs(
                                        values.preferredInternshipStartDate
                                      ).format("YYYY-MM-DD")}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.INTERNTYPE}</label>
                                  </td>
                                  <td>
                                    <select
                                      style={{
                                        width: "189.04px",
                                        height: "29.98px",
                                      }}
                                      name="internshipSchedule"
                                      id="intern-schehdule"
                                      value={values.internshipSchedule}
                                      onChange={handleEditChange}
                                    >
                                      <option value="Full time">
                                        Full time
                                      </option>
                                      <option value="Part time">
                                        Part time
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.SKILL}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="preferredSkills"
                                      value={values.preferredSkills}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.TYPEPC}</label>
                                  </td>
                                  <td>
                                    <select
                                      style={{
                                        width: "189.04px",
                                        height: "29.98px",
                                      }}
                                      name="pcType"
                                      value={values.pcType}
                                      onChange={handleEditChange}
                                    >
                                      <option value="PC">PC</option>
                                      <option value="Laptop">Laptop</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr></tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ATTITUDE}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="attitude"
                                      value={values.attitude}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.COMMENTS}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="comments"
                                      value={values.comments}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.TNCOMMENT}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="technicalComments"
                                      value={values.technicalComments}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.TNSCORE}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="technicalScore"
                                      value={values.technicalScore}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ENGLISH}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="englishCommunication"
                                      value={values.englishCommunication}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.REMARKS}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="remarks"
                                      value={values.remarks}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.CVIDINFO}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="covidVaccinationiInformation"
                                      value={
                                        values.covidVaccinationiInformation
                                      }
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.CVIDCERT}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="covidVaccinationCertificate"
                                      value={values.covidVaccinationCertificate}
                                      onChange={handleEditChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.CERTDATE}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="date"
                                      name="certificationDate"
                                      value={dayjs(
                                        values.certificationDate
                                      ).format("YYYY-MM-DD")}
                                      onChange={handleEditChange}
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
                              <button
                                id="edit-candi"
                                type="button"
                                className="btn btn-danger-del"
                                onClick={editSubmit}
                              >
                                Sửa
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
                <form>
                  <div>
                    {open && (
                      <div
                        className="modal fade"
                        id="exampleModalDetail"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content modal-content-top">
                            <div className="modal-header">
                              <div className="container d-flex pl-0">
                                <h4
                                  className="modal-title ml-2"
                                  id="exampleModalLabel"
                                  style={{ color: "#007bff" }}
                                >
                                  {constTable.H4DETAIL}
                                </h4>
                              </div>{" "}
                            </div>
                            <div className="modal-body">
                              <table>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.NAME}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.fullName}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.PHONE}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.tel}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.EMAIL}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.emailCandidate}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.IDSTUDENT}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.studentID}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.FACULTY}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.faculty}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.CRRYEAR}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.currentYearofStudy}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.SCHOOL}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.university}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.AVGSCORE}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.GPA}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.GRAYEAR}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.graduationYear}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.GRADUATION}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.expectedGraduationSchedule}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.REMSUB}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.remainingSubjects}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.PRJEXP}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.projectExperience}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ITDOMAIN}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.internshipDomain}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.INTERTIME}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.preferredInternshipDuration}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.INTERNDATE}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      type="date"
                                      value={dayjs(
                                        values.preferredInternshipStartDate
                                      ).format("YYYY-MM-DD")}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.INTERNTYPE}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.internshipSchedule}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.SKILL}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.preferredSkills}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.TYPEPC}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.pcType}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ITVDATE}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      type="date"
                                      value={dayjs(values.interviewDate).format(
                                        "YYYY-MM-DD"
                                      )}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.ITVTIME}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.interviewTime}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ITVER}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.interviewer}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.EMAILITVER}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.emailInterviewer}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ITVLINK}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.interviewLink}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.RESULT}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.status}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ATTITUDE}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.attitude}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.COMMENTS}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.comments}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.TNCOMMENT}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.technicalComments}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.TNSCORE}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.technicalScore}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.ENGLISH}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.englishCommunication}
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.REMARKS}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.remarks}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.CVIDINFO}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={
                                        values.covidVaccinationiInformation
                                      }
                                    />
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.CVIDCERT}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      value={values.covidVaccinationCertificate}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.CERTDATE}</label>
                                  </td>
                                  <td>
                                    <input
                                      tabindex="-1"
                                      className="inputDetail"
                                      type="date"
                                      value={dayjs(
                                        values.certificationDate
                                      ).format("YYYY-MM-DD")}
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
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </ul>
            ))
          ) : (
            <div>
              <p className="mess-table-candidate">{constTable.NODATA}</p>
            </div>
          )}
        </div>
      </div>
      <Pagination
        className="pagination"
        candiPerPage={candiPerPage}
        totalCandis={candi.length}
        paginate={paginate}
      />
      {AddCandidate()}
      <button
        id="open-addcandi"
        className="btn-add-candi"
        type="submit"
        data-toggle="modal"
        data-target="#exampleModalAdd"
      >
        Thêm
      </button>
    </div>
  );
}
export default withRouter(TableCandidate);
