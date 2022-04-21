import React, { useEffect, useState } from "react";
import { candidateAPI } from "../../../api/service";
import * as constTable from "../../../constant/constTable";
import * as constCandidate from "../../../constant/constCandidate";
import * as apiaxios from "../../../api/service";
import Swal from "sweetalert2";

export default function AddCandidate() {
  const [candi, setCandi] = useState([]);
  useEffect(() => {
    const idBatch = localStorage.getItem("idBatch");
    candidateAPI(`candidate/batch/${idBatch}`, "Get", null).then((res) => {
      setCandi(res.data.data);
    });
  }, [candi]);

  const [batch, setBatch] = useState([]);
  useEffect(() => {
    apiaxios.batchAPI("internshipcourse").then((res) => {
      setBatch(res.data.data);
    });
  }, []);

  const [addCandi, setAddCandi] = useState({
    fullName: "",
    tel: "",
    emailCandidate: "",
    internshipDomain: "",
    preferredSkills: "",
    university: "",
    faculty: "",
    currentYearofStudy: "",
    studentID: "",
    graduationYear: "",
    GPA: "",
    pcType: "",
    preferredInternshipStartDate: "",
    preferredInternshipDuration: "",
    internshipSchedule: "",
    idInternshipCourse: "",
    projectExperience: "",
    expectedGraduationSchedule: "",
    covidVaccinationiInformation: "",
    remainingSubjects: "",
    covidVaccinationCertificate: "",
    certificationDate: "",
  });

  const handleReset = () => {
    setAddCandi({});
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      (select) => (select.value = "Chọn...")
    );
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name", "value");
    const fieldValue = event.target.value;
    const newFormData = { ...addCandi };
    newFormData[fieldName] = fieldValue;
    setAddCandi(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newCadidate = {
      fullName: addCandi.fullName,
      tel: addCandi.tel,
      emailCandidate: addCandi.emailCandidate,
      internshipDomain: addCandi.internshipDomain,
      preferredSkills: addCandi.preferredSkills,
      university: addCandi.university,
      faculty: addCandi.faculty,
      currentYearofStudy: addCandi.currentYearofStudy,
      studentID: addCandi.studentID,
      graduationYear: addCandi.graduationYear,
      GPA: addCandi.GPA,
      pcType: addCandi.pcType,
      preferredInternshipStartDate: addCandi.preferredInternshipStartDate,
      preferredInternshipDuration: addCandi.preferredInternshipDuration,
      internshipSchedule: addCandi.internshipSchedule,
      idInternshipCourse: addCandi.idInternshipCourse,
      projectExperience: addCandi.projectExperience,
      expectedGraduationSchedule: addCandi.expectedGraduationSchedule,
      covidVaccinationiInformation: addCandi.covidVaccinationiInformation,
      remainingSubjects: addCandi.remainingSubjects,
      covidVaccinationCertificate: addCandi.covidVaccinationCertificate,
      certificationDate: addCandi.certificationDate,
    };
    candidateAPI("candidate/create", "POST", newCadidate)
      .then((res) => {
        setCandi(res.data.data);
        handleReset();
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
    const newCadidates = [...candi, newCadidate];
    setCandi(newCadidates);
  };
  return (
    <>
      <div
        class="modal fade modal-fade"
        id="exampleModalAdd"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" style={{ width: "1500px" }}>
          <div className="modal-content modal-content-top">
            <div className="modal-header">
              <div className="container d-flex pl-0">
                <h5
                  className="modal-title ml-2"
                  id="exampleModalLabel"
                  style={{ color: "#007bff" }}
                >
                  {constTable.H5ADD}
                </h5>
              </div>{" "}
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddFormSubmit}>
                <table>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.NAME}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="fullName"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.PHONE}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="tel"
                        onChange={handleAddFormChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.EMAIL}</label>
                    </td>
                    <td>
                      <input
                        type="email"
                        name="emailCandidate"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.IDSTUDENT}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="studentID"
                        onChange={handleAddFormChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.FACULTY}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="faculty"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.CRRYEAR}</label>
                    </td>
                    <td>
                      <select
                        name="currentYearofStudy"
                        id="year-study"
                        onChange={handleAddFormChange}
                      >
                        <option disabled selected hidden>
                          Chọn...
                        </option>
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
                      <label>{constCandidate.SCHOOL}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="university"
                        onChange={handleAddFormChange}
                      />
                    </td>

                    <td className="right-modal">
                      <label>{constCandidate.AVGSCORE}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="GPA"
                        onChange={handleAddFormChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.GRAYEAR}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="graduationYear"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.GRADUATION}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="expectedGraduationSchedule"
                        onChange={handleAddFormChange}
                        maxLength="1000"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.REMSUB}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="remainingSubjects"
                        onChange={handleAddFormChange}
                        maxLength="1000"
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.PRJEXP}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="projectExperience"
                        onChange={handleAddFormChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.ITDOMAIN}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="internshipDomain"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.INTERTIME}</label>
                    </td>
                    <td>
                      <select
                        name="preferredInternshipDuration"
                        id="inter-duration"
                        onChange={handleAddFormChange}
                      >
                        <option disabled selected hidden>
                          Chọn...
                        </option>
                        <option value="8 Tuần">8 tuần</option>
                        <option value="12 Tuần">12 tuần</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.INTERNDATE}</label>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="preferredInternshipStartDate"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.INTERNTYPE}</label>
                    </td>
                    <td>
                      <select
                        name="internshipSchedule"
                        id="intern-schehdule"
                        onChange={handleAddFormChange}
                      >
                        <option disabled selected hidden>
                          Chọn...
                        </option>
                        <option value="Full time">Full time</option>
                        <option value="Part time">Part time</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.SKILL}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="preferredSkills"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.TYPEPC}</label>
                    </td>
                    <td>
                      <select name="pcType" onChange={handleAddFormChange}>
                        <option disabled selected hidden>
                          Chọn...
                        </option>
                        <option value="PC">PC</option>
                        <option value="Laptop">Laptop</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.INTERNBATCH}</label>
                    </td>
                    <td>
                      <select
                        className="inputTextCandi"
                        name="idInternshipCourse"
                        id="cars"
                        onChange={handleAddFormChange}
                      >
                        <option disabled selected hidden>
                          Chọn...
                        </option>
                        {batch?.map((itemBatch) => (
                          <option value={itemBatch.idInternshipCourse}>
                            {itemBatch.nameCoure}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.CVIDINFO}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="covidVaccinationiInformation"
                        onChange={handleAddFormChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.CVIDCERT}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="covidVaccinationCertificate"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.CERTDATE}</label>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="certificationDate"
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
                  <button
                    id="add-candi"
                    type="submit"
                    className="btn btn-danger-del"
                    onSubmit={handleAddFormSubmit}
                  >
                    Thêm
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
