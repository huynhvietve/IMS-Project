import React, { useEffect, useState } from "react";
import * as constTable from "../../../constant/constTable";
import * as constCandi from "../../../constant/constCandidate";
import Pagination from "../pagination/index";
import { withRouter } from "react-router-dom";
import { candidateAPI, batchAPI } from "../../../api/service";
import AddCandidate from "../addCandidate/index";
import { useDispatch } from "react-redux";
import { deleteCandi } from "../../../redux/action/candi.action";
import * as apiaxios from "../../../api/service";
import Swal from "sweetalert2";
import dayjs from "dayjs";

function TableCandidate() {
  const [candi, setCandi] = useState([]);
  const [batchTitle, setBatchTitle] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [candiPerPage, setCandiPerPage] = useState(10);

  // Get current candidate
  const indexOfLastCandi = currPage * candiPerPage;
  const indexOfFirstCandi = indexOfLastCandi - candiPerPage;
  const currCandi = candi.slice(indexOfFirstCandi, indexOfLastCandi);
  const paginate = (pageNumber) => setCurrPage(pageNumber);
  const idBatch = localStorage.getItem("idBatch");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    candidateAPI(`candidate/batch/${idBatch}?fullName=${search}`, "Get", null).then((res) => {
      setCandi(res.data.data);
    });
  }, [candi]);
  useEffect(() => {
    batchAPI(`internshipcourse/${idBatch}`, "Get", null).then((res) => {
      setBatchTitle(res.data.data);
    });
  }, {});
  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    apiaxios.mentorAPI("mentor", "Get", null).then((res) => {
      setMentor(res.data.data);
    });
  }, []);
  const [dg, setDg] = useState([]);
  useEffect(() => {
    apiaxios.mentorDG("dg", "Get", null).then((res) => {
      setDg(res.data.data);
    });
  }, []);

  const dispatch = useDispatch();

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
    // idDG: "",
    // idMentor: "",
    internshipDomain: "",
    preferredSkills: "",
    university: "",
    faculty: "",
    currentYearofStudy: "",
    studentID: "",
    GPA: "",
    graduationYear: "",
    preferredInternshipStartDate: "",
    preferredInternshipDuration: "",
    internshipSchedule: "",
    pcType: "",
    status: "",
    remark: "",
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
      // idDG: candidate.idDG,
      // idMentor: candidate.idMentor,
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
      remark: candidate.remark,
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
      // idDG: values.idDG,
      // idMentor: values.idMentor,
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
      status: values.status,
      remark: values.remark,
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
    .candidatePut(`candidate/${valuesId}`, editCandi).then((res) => {
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

  return (
    <div>
      <h3 className="text-header">
        {constTable.H3} {batchTitle.nameCoure}
      </h3>
      <div className="input-toolbar">
        <div className="uploader">
          <input className="inputUpload" type="file" id="fileupload" />
          <button className="btn-upload" type="submit" id="import">
            Nhập
          </button>
        </div>
        <div class="search">
          <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              class="search__input" 
              onChange={(e) => setSearch(e.target.value.toLowerCase())} 
          /> 
          <i class="search__icon fa fa-search"></i>
        </div>
      </div>
      <div className="grid wide home-candidate">
        <div className="row home-candidate--list">
          <span className="col l-2-8 ">{constTable.NAME}</span>
          <span className="col l-2-8 ">{constTable.EMAIL}</span>
          <span className="col l-2-8 ">{constTable.STID}</span>
          <span className="col l-2-8 ">{constTable.UNI}</span>
          <span className="col l-2-8 ">{constTable.ITDOMAIN}</span>
          <span className="col l-2-8 ">{constTable.ITRESULT}</span>
          <span className="col l-2-8 ">{constTable.ACTION}</span>
        </div>
        <div className="table-body">
          {currCandi.length > 0 ? (
            currCandi?.map((candidate) => (
              <ul
                className="row sm-gutter sm-gutter--list"
                key={candidate.idCandidate}
              >
                <li className="col l-2-8">{candidate.fullName}</li>
                <li className="col l-2-8">{candidate.emailCandidate}</li>
                <li className="col l-2-8">{candidate.studentID}</li>
                <li className="col l-2-8">{candidate.university}</li>
                <li className="col l-2-8">{candidate.internshipDomain}</li>
                <li className="col l-2-8">{status(candidate.status)}</li>
                <li className="col l-2-8">
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
                                      type="email"
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
                                {/* <tr>
                                  <td className="left-modal">
                                    <label>{constCandi.MTNAME}</label>
                                  </td>
                                  <td>
                                    <select
                                      className="inputTextCandi"
                                      name="idMentor"
                                      id="cars"
                                      value={values.idMentor}
                                      onChange={handleEditChange}
                                    >
                                      {mentor?.map((itemMentor) => (
                                        <option value={itemMentor.idMentor}>
                                          {itemMentor.fullNameMentor}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.DGNAME}</label>
                                  </td>
                                  <td>
                                    <select
                                      className="inputTextCandi"
                                      name="idDG"
                                      id="cars"
                                      value={values.idDG}
                                      onChange={handleEditChange}
                                    >
                                      {dg?.map((itemDG) => (
                                        <option value={itemDG.idDG}>
                                          {itemDG.nameDG}
                                        </option>
                                      ))}
                                    </select>
                                  </td>
                                </tr> */}
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
                                    <label>{constCandi.RESULT}</label>
                                  </td>
                                  <td>
                                    <select
                                      name="status"
                                      id="status"
                                      value={values.status}
                                      onChange={handleEditChange}
                                    > <option disabled selected hidden>Chọn....</option>
                                      <option value="Pass">Pass</option>
                                      <option value="Fail">Fail</option>
                                    </select>
                                  </td>
                                  <td className="right-modal">
                                    <label>{constCandi.REMARK}</label>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      name="remark"
                                      value={values.remark}
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
                                </tr>
                                <tr>
                                  <td className="left-modal">
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
        onClick={handleReset}
      >
        Thêm
      </button>
    </div>
  );
}
export default withRouter(TableCandidate);
