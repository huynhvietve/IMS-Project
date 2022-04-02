import React from 'react'

export default function editMentor() {
  return (
    <div>
        <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ width: "70%" }}>
            <div className="modal-header">
              <div className="container d-flex pl-0">
                <h5
                  className="modal-title ml-2"
                  id="exampleModalLabel"
                  style={{ color: "#007bff" }}
                >
                  CHI TIẾT NGƯỜI HƯỚNG DẪN
                </h5>
              </div>{" "}
            </div>
            <div className="modal-body">
              <table>
                <tr>
                  <td className="left-modal">
                    <label>Họ tên:</label>
                  </td>
                  <td>
                    <label>Van A</label>
                  </td>
                  <td className="right-modal">
                    <label>Chức vụ:</label>
                  </td>
                  <td>
                    <label>PM</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Ngày sinh:</label>
                  </td>
                  <td>
                    <label>1/1/2022</label>
                  </td>
                  <td className="right-modal">
                    <label>Email:</label>
                  </td>
                  <td>
                    <label>sdas@example.com</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Giới tính:</label>
                  </td>
                  <td>
                    <label>nma/nư</label>
                  </td>
                  <td className="right-modal">
                    <label>Tên DG:</label>
                  </td>
                  <td>
                    <label>DG 5</label>
                  </td>
                </tr>
                <tr>
                  <td className="left-modal">
                    <label>Nơi công tác:</label>
                  </td>
                  <td>
                    <label>Mentor 123</label>
                  </td>
                  <td className="right-modal">
                    <label>Địa chỉ:</label>
                  </td>
                  <td>
                    <label>PM</label>
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
    </div>
  )
}
