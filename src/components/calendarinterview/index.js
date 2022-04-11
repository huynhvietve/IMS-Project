import "../../asset/css/interviewShedule.css";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../redux/store/popup";
import { useEffect, useState } from "react";
import { getInterview } from "../../api/service";
const CalendarInterview = () => {
  const dispatch = useDispatch();
  const showPopUp = useSelector((state) => state.popup.showModal);
  const hidePopUp = () => {
    dispatch(popUpActions.hide());
  };
  const dataIntern = useSelector((state) => state.popup.data);
  const [options, setOptions] = useState([
    { id: 1, name: "AAA", email: "aaa@gmail.com" },
    { id: 2, name: "BBB", email: "bbb@gmail.com" },
  ]);
  useEffect(async () => {
    // get data from server
    const res = await getInterview(1);
    console.log(res.data);
    const transformedOptions = res.data.map((item) => {
      return { id: item.id, name: item.mentor, email: item.email };
    });
    setOptions(transformedOptions);
  }, [dataIntern]);

  const selectEmail = (email) => {
    console.log("select email");
    console.log(email, email.target.value);
  };
  const fullName = dataIntern?.fullName;
  const changeFullName = (event) => {};

  return (
    <Modal show={showPopUp}>
      <ModalHeader>
        <div classname="header_1">
          <h3 style={{ color: "#007bff", margin: "2% 0 0 10%" }}>
            TẠO LỊCH PHỎNG VẤN
          </h3>
        </div>

        <div style={{ borderBottom: "0px solid" }}>
          <button type="button" class="close" onClick={hidePopUp}>
            &times;
          </button>
        </div>
      </ModalHeader>

      <ModalBody>
        <div>
          <div className="modal-header1">
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
                        value={fullName}
                        onChange={changeFullName}
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
                      <label>Email Ứng Viên *:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        required
                        placeholder="Nhập email"
                        value={dataIntern?.email}
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
                      <input type="text" required placeholder="Nhập email" />
                    </td>
                    <td classname="right-modal">
                      <label>Người phỏng vấn *:</label>
                    </td>
                    <td>
                      <select className="cart" onChange={selectEmail}>
                        {options.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </select>
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
                  Gửi
                </button>
                <button type="button">Xem trước</button>
                <button type="submit" className="btn1" onClick={hidePopUp}>
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
export default CalendarInterview;
