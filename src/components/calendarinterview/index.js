import "../../asset/css/interviewShedule.css";
const CalendarInterview = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
      >
        Thêm
      </button>

      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header" style={{ borderBottom: "0px solid" }}>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className="modal-header1">
                <div classname="header_1">
                  <h3 style={{ color: "#007bff", margin: "2% 0 0 30%" }}>
                    TẠO LỊCH PHỎNG VẤN
                  </h3>
                </div>
                <form>
                  <table className="taolichpv">
                    <tbody>
                      <tr>
                        <td className="left-modal">
                          <label>Họ tên *:</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            required
                            placeholder="nhập họ và tên"
                          />
                        </td>
                        <td classname="right-modal">
                          <label>Ngày phỏng vấn *:</label>
                        </td>
                        <td>
                          <input type="date" required />
                        </td>
                      </tr>
                      <tr>
                        <td classname="left-modal">
                          <label>Email Inter *:</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            required
                            placeholder="Nhập email"
                          />
                        </td>
                        <td classname="right-modal">
                          <label>Giờ bắt đầu *:</label>
                        </td>
                        <td>
                          <input type="time" required />
                        </td>
                      </tr>
                      <tr>
                        <td classname="left-modal">
                          <label>Email Mentor *:</label>
                        </td>
                        <td>
                          <input
                            type="text"
                            required
                            placeholder="Nhập email"
                          />
                        </td>
                        <td classname="right-modal">
                          <label>Người phỏng vấn *:</label>
                        </td>
                        <td>
                          <input type="text" required />
                        </td>
                      </tr>
                      <tr>
                        <td classname="left-modal">
                          <label>Link phỏng vấn *:</label>
                        </td>
                        <td>
                          <input type="link" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="taolichpvfooter">
                    <button type="submit" className="btn2">
                      Thêm
                    </button>
                    <button type="submit" className="btn1">
                      Hủy
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalendarInterview;
