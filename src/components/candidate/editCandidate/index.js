import React, { useEffect, useState } from "react";
import * as constTable from "../../../constant/constTable";
import { candidateAPI } from "../../../api/service";

function EditCandidate() {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModalEdit"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
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
            <div className="modal-body">
              <table>
                <tr>
                  <td className="left-modal">
                    <label>Họ tên*:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="right-modal">
                    <label>SDT*:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Email*:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="right-modal">
                    <label>Tên DG*:</label>
                  </td>
                  <td>
                    <select name="name-dg" id="name-dg">
                      <option value="dg1">DG 1</option>
                      <option value="dg2">DG 2</option>
                      <option value="dg3">...</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Tên Mentor:</label>
                  </td>
                  <td>
                    <select name="name-mentor" id="name-mentor">
                      <option value="mentor1">Mentor 1</option>
                      <option value="mentor2">Mentor 2</option>
                      <option value="menter3">...</option>
                    </select>
                  </td>
                  <td className="right-modal">
                    <label>Vị trí thực tập*:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Kĩ năng:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="right-modal">
                    <label>Trường:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Ngành:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="right-modal">
                    <label>Năm học hiện tại:</label>
                  </td>
                  <td>
                    <select name="year-study" id="year-study">
                      <option value="nam1">Năm 1</option>
                      <option value="nam2">Năm 2</option>
                      <option value="nam3">Năm 3</option>
                      <option value="nam4">Năm 4</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Mã SV:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="right-modal">
                    <label>Điểm trung bình (Hệ 10)*:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Ngày bắt đầu thực tập*:</label>
                  </td>
                  <td>
                    <input type="date" />
                  </td>
                  <td className="right-modal">
                    <label>Thời gian thực tập:</label>
                  </td>
                  <td>
                    <select name="inter-duration" id="inter-duration">
                      <option value="">chưa biết</option>
                      <option value="" selected>
                        8 tuần
                      </option>
                      <option value="">12 tuần</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Loại thực tập:</label>
                  </td>
                  <td>
                    <select name="intern-schehdule" id="intern-schehdule">
                      <option value="fulltime">Full time</option>
                      <option value="parttimem">Part time</option>
                    </select>
                  </td>
                  <td className="right-modal">
                    <label>Khóa thực tập:</label>
                  </td>
                  <td>
                    <select name="batch" id="batch">
                      <option value="batch8">Batch 8</option>
                      <option value="batch9">Batch 9</option>
                    </select>
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
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Technical comments:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="right-modal">
                    <label>Technical score:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Attitude:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="right-modal">
                    <label>English communication:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Comments:</label>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="right-modal">
                    <label>Remarks:</label>
                  </td>
                  <td>
                    <input type="text" />
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
              >
                Sửa
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditCandidate;
