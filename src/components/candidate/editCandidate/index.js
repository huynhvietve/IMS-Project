import React, { useEffect, useState } from "react";
import * as constTable from "../../../constant/constTable";
import { candidateAPI } from "../../../api/service";
import * as apiaxios from "../../../api/service"; 

function EditCandidate() {
  const [candi, setCandi] = useState([]);
  useEffect(() => {
    candidateAPI("candidate", "Get", null).then((res) => {
      setCandi(res.data.data);
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
    apiaxios.batchAPI("internshipcourse").then((res) => {
      setBatch(res.data.data);
    });
  }, []);

  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    candidateAPI("mentor", "Get", null).then((res) => {
      setMentor(res.data);
    });
  }, []);

  const [values, setValues] = useState({
    fullName: "",
    tel: "",
    emailCandidate: "",
    idDG: "",
    idMentor: "",
    interviewDate: "",
    interviewTime: "",
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
    idInternshipCourse: "",
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

  function handleUpdate(event) {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <>
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
                <h5
                  className="modal-title ml-2"
                  id="exampleModalLabel"
                  style={{ color: "#007bff" }}
                >
                  {constTable.H5EIDT}
                </h5>
              </div>{" "}
            </div>
            <div className="modal-body modal-body-edit">
              <table>
                <tr>
                  <td className="left-modal">
                    <label>Họ tên*:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="fullName"
                        onChange={handleUpdate}
                        required="required"
                        value={values.fullName}
                      />
                    </td>
                  <td className="right-modal">
                    <label>SDT*:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="tel"
                        onChange={handleUpdate}
                        required="required"
                      />
                    </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Email*:</label>
                  </td>
                  <td>
                      <input
                        type="email"
                        name="emailCandidate"
                        onChange={handleUpdate}
                        required="required"
                      />
                    </td>
                  <td className="right-modal">
                    <label>Tên DG*:</label>
                  </td>
                  <td>
                      <select
                        className="inputTextCandi"
                        name="idDG"
                        id="cars"
                        onChange={handleUpdate}
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
                    <label>Tên Mentor:</label>
                  </td>
                  <td>
                      <select
                        className="inputTextCandi"
                        name="idMentor"
                        id="cars"
                        onChange={handleUpdate}
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
                    <label>Vị trí thực tập*:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="internshipDomain"
                        onChange={handleUpdate}
                      />
                    </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Ngày phỏng vấn:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="interviewDate"
                        onChange={handleUpdate}
                        required="required"
                      />
                    </td>
                  <td className="right-modal">
                    <label>Giờ phỏng vấn:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="interviewTime"
                        onChange={handleUpdate}
                        required="required"
                      />
                    </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Kĩ năng:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="preferredSkills"
                        onChange={handleUpdate}
                      />
                    </td>
                  <td className="right-modal">
                    <label>Trường:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="university"
                        onChange={handleUpdate}
                      />
                    </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Ngành:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="faculty"
                        onChange={handleUpdate}
                      />
                    </td>
                  <td className="right-modal">
                    <label>Năm học hiện tại:</label>
                  </td>
                  <td>
                      <select
                        name="currentYearofStudy"
                        id="year-study"
                        onChange={handleUpdate}
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
                    <label>Mã SV:</label>
                  </td>
                  <td>
                      <input
                        type="text"
                        name="studentID"
                        onChange={handleUpdate}
                      />
                    </td>
                  <td className="right-modal">
                    <label>Điểm trung bình (Hệ 10)*:</label>
                  </td>
                  <td>
                    <input type="text" name="GPA"/>
                  </td>
                </tr>
                <tr>
                <td className="left-modal">
                      <label>Năm tốt nghiệp:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="GraduationYear"
                        onChange={handleUpdate}
                      />
                    </td>
                    <td className="right-modal">
                      <label>Dự kiến tốt nghiệp:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ExpectedGraduationSchedule"
                        onChange={handleUpdate}
                        maxLength={1000}
                      />
                    </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Ngày bắt đầu thực tập*:</label>
                  </td>
                  <td>
                      <input
                        type="date"
                        name="preferredInternshipStartDate"
                        onChange={handleUpdate}
                      />
                    </td>
                  <td className="right-modal">
                    <label>Thời gian thực tập:</label>
                  </td>
                  <td>
                      <select
                        name="preferredInternshipDuration"
                        id="inter-duration"
                        onChange={handleUpdate}
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
                    <label>Loại thực tập:</label>
                  </td>
                  <td>
                      <select
                        name="internshipSchedule"
                        id="intern-schehdule"
                        onChange={handleUpdate}
                      >
                        <option value="Full time">
                          Full time
                        </option>
                        <option value="Part time">Part time</option>
                      </select>
                    </td>
                  <td className="right-modal">
                    <label>Khóa thực tập:</label>
                  </td>
                  <td>
                      <select
                        className="inputTextCandi"
                        name="idInternshipCourse"
                        id="cars"
                        onChange={handleUpdate}
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
                      <label>Loại PC:</label>
                    </td>
                    <td>
                      <select
                        name="pcType"
                        onChange={handleUpdate}
                      >
                      <option value="PC">PC</option>
                      <option value="Laptop">Laptop</option>
                      </select>
                    </td>
                    <td className="right-modal">
                      <label>Môn học còn lại:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="RemainingSubjects"
                        onChange={handleUpdate}
                        maxLength={1000}
                      />
                    </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Kết quả:</label>
                  </td>
                  <td>
                    <select name="status" id="status">
                      <option value="pass">Pass</option>
                      <option value="fail">Fail</option>
                    </select>
                  </td>
                  <td className="right-modal">
                    <label>Remark:</label>
                  </td>
                  <td>
                    <input type="text" name="remark"/>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Nhận xét kỹ thuật:</label>
                  </td>
                  <td>
                    <input type="text" name="technicalComments"/>
                  </td>
                  <td className="right-modal">
                    <label>Điểm kỹ thuật:</label>
                  </td>
                  <td>
                    <input type="text" name="technicalScore"/>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Thái độ:</label>
                  </td>
                  <td>
                    <input type="text" name="attitude"/>
                  </td>
                  <td className="right-modal">
                    <label>Giao tiếp TA:</label>
                  </td>
                  <td>
                    <input type="text" name="englishCommunication"/>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Comments:</label>
                  </td>
                  <td>
                    <input type="text" name="comments"/>
                  </td>
                  <td className="right-modal">
                    <label>Remarks:</label>
                  </td>
                  <td>
                    <input type="text" name="remarks"/>
                  </td>
                </tr>
                <tr>
                    <td className="left-modal">
                      <label>Dự án đã tham gia:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="ProjectExperience"
                        onChange={handleUpdate}
                      />
                    </td>
                    <td className="right-modal">
                      <label>Thông tin tiêm chủng Covid:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="CovidVaccinationiInformation"
                        onChange={handleUpdate}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal">
                      <label>Giấy chứng nhận:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="CovidVaccinationCertificate"
                        onChange={handleUpdate}
                      />
                    </td>
                    <td className="right-modal">
                      <label>Ngày chứng nhận:</label>
                    </td>
                    <td>
                      <input
                        type="date"
                        name="CertificationDate"
                        onChange={handleUpdate}
                      />
                    </td>
                  </tr>
              </table>
            </div>
            <div className="modal-footer">
              {" "}
              <button
                id="edit-candi"
                type="button"
                className="btn btn-danger-del"
              >
                Sửa
              </button>{" "}
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
    </>
  );
}
export default EditCandidate;
