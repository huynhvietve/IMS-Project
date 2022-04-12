import React, { useEffect, useState } from "react";
import { candidateAPI } from "../../../api/service";
import * as constTable from "../../../constant/constTable";
import * as constCandidate from "../../../constant/constCandidate";
export default function AddCandidate() {

  const [candi, setCandi] = useState([]);
  useEffect(() => {
    candidateAPI("candidate/batch/9", "Get", null).then((res) => {
      setCandi(res.data);
    });
  },[candi]);

  const [dg, setDg] = useState([]);
  useEffect(() => {
    candidateAPI("dg", "Get", null).then((res) => {
      setDg(res.data);
    });
  }, []);

  const [batch, setBatch] = useState([]);
  useEffect(() => {
    candidateAPI("internshipcourse", "Get", null).then((res) => {
      setBatch(res.data);
    });
  }, []);

  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    candidateAPI("mentor", "Get", null).then((res) => {
      setMentor(res.data);
    });
  }, []);

  const [addCandi, setAddCandi] = useState({
    fullName: "",
    tel: "",
    email: "",
    idDG: "",
    idMentor: "",
    internshipDomain: "",
    preferredSkills: "",
    university: "",
    faculty: "",
    currentYearofStudy: "",
    studentID: "",
    GraduationYear: "",
    GPA: "",
    pcType: "",
    preferredInternshipStartDate: "",
    preferredInternshipDuration: "",
    internshipSchedule: "",
    idInternshipCourse: "",
    ProjectExperience: "",
    ExpectedGraduationSchedule: "",
    CovidVaccinationiInformation: "",
    RemainingSubjects: "",
    CovidVaccinationCertificate: "",
    CertificationDate: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name","value");
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
      email: addCandi.email,
      idDG: addCandi.idDG,
      idMentor: addCandi.idMentor,
      internshipDomain: addCandi.internshipDomain,
      preferredSkills: addCandi.preferredSkills,
      university: addCandi.university,
      faculty: addCandi.faculty,
      currentYearofStudy: addCandi.currentYearofStudy,
      studentID: addCandi.studentID,
      GraduationYear: addCandi.GraduationYear,
      GPA: addCandi.GPA,
      pcType: addCandi.pcType,
      preferredInternshipStartDate: addCandi.preferredInternshipStartDate,
      preferredInternshipDuration: addCandi.preferredInternshipDuration,
      internshipSchedule: addCandi.internshipSchedule,
      idInternshipCourse: addCandi.idInternshipCourse,
      ProjectExperience: addCandi.ProjectExperience,
      ExpectedGraduationSchedule: addCandi.ExpectedGraduationSchedule,
      CovidVaccinationiInformation: addCandi.CovidVaccinationiInformation,
      RemainingSubjects: addCandi.RemainingSubjects,
      CovidVaccinationCertificate: addCandi.CovidVaccinationCertificate,
      CertificationDate: addCandi.CertificationDate,
    };

    candidateAPI("candidate/create", "POST", newCadidate).then((res) => {
      setCandi(res.data);
    });
    const newCadidates = [...candi, newCadidate];
    setCandi(newCadidates);
  };

  return (
    <>
      <div
        class="modal fade"
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
                        required="required"
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
                        required="required"
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
                        name="email"
                        onChange={handleAddFormChange}
                        required="required"
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.DGNAME}</label>
                    </td>
                    <td>
                      <select
                        className="inputTextCandi"
                        name="idDG"
                        id="cars"
                        onChange={handleAddFormChange}
                        // required="required"
                      >
                        {dg?.map((itemDG) => (
                          <option value={itemDG.idDG}>{itemDG.nameDG}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.MTNAME}</label>
                    </td>
                    <td>
                      <select
                        className="inputTextCandi"
                        name="idMentor"
                        id="cars"
                        onChange={handleAddFormChange}
                        // required="required"
                      >
                        {mentor?.map((itemMentor) => (
                          <option value={itemMentor.idMentor}>
                            {itemMentor.fullNameMentor}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.ITDOMAIN}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="internshipDomain"
                        onChange={handleAddFormChange}
                      />
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
                      <label>{constCandidate.SCHOOL}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="university"
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
                        <option value="Năm 1">Năm 1</option>
                        <option value="Năm 2">Năm 2</option>
                        <option value="Năm 3">Năm 3</option>
                        <option value="Năm 4">Năm 4</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.IDSTUDENT}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="studentID"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.GRAYEAR}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="GraduationYear"
                        onChange={handleAddFormChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.AVGSCORE}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="GPA"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.TYPEPC}</label>
                    </td>
                    <td>
                      <select
                        name="pcType"
                        onChange={handleAddFormChange}
                      >
                      <option value="PC">PC</option>
                      <option value="Laptop">Laptop</option>
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
                      <label>{constCandidate.INTERTIME}</label>
                    </td>
                    <td>
                      <select
                        name="preferredInternshipDuration"
                        id="inter-duration"
                        onChange={handleAddFormChange}
                      >
                        <option value="8 Tuần">
                          8 tuần
                        </option>
                        <option value="12 Tuần">12 tuần</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.INTERNTYPE}</label>
                    </td>
                    <td>
                      <select
                        name="internshipSchedule"
                        id="intern-schehdule"
                        onChange={handleAddFormChange}
                      >
                        <option value="Full time">
                          Full time
                        </option>
                        <option value="Part time">Part time</option>
                      </select>
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.INTERNBATCH}</label>
                    </td>
                    <td>
                      <select
                        className="inputTextCandi"
                        name="idInternshipCourse"
                        id="cars"
                        onChange={handleAddFormChange}
                        // required="required"
                      >
                        {batch?.map((itemBatch) => (
                          <option value={itemBatch.idInternshipCourse}>
                            {itemBatch.nameCoure}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.PRJEXP}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ProjectExperience"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.GRADUATION}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ExpectedGraduationSchedule"
                        onChange={handleAddFormChange}
                        maxLength={1000}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>{constCandidate.CVIDINFO}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="CovidVaccinationiInformation"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.REMSUB}</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="RemainingSubjects"
                        onChange={handleAddFormChange}
                        maxLength={1000}
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
                        name="CovidVaccinationCertificate"
                        onChange={handleAddFormChange}
                      />
                    </td>
                    <td className="right-modal">
                      <label>{constCandidate.CERTDATE}</label>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="CertificationDate"
                        onChange={handleAddFormChange}
                      />
                    </td>
                  </tr>
                </table>
                <div className="modal-footer">
                  {" "}
                  <button
                    id="add-candi"
                    type="submit"
                    className="btn btn-danger-del"
                    onSubmit={handleAddFormSubmit}
                  >
                    Thêm
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-light"
                    data-dismiss="modal"
                  >
                    Hủy
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