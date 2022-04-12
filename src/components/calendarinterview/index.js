import "../../asset/css/interviewShedule.css";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../redux/store/popup";
import { useEffect, useState } from "react";
import { sendEmail } from "../../api/service";

const CalendarInterview = () => {
  const dispatch = useDispatch();
  const showPopUp = useSelector((state) => state.popup.showModal);
  const hidePopUp = () => {
    dispatch(popUpActions.hide());
  };
  const dataIntern = useSelector((state) => state.popup.data);

  useEffect(() => {
    setEnterInternName(dataIntern?.fullName);
    setEnterInternEmail(dataIntern?.email);
  }, [dataIntern]);

  const [enterEmail, setEnterEmail] = useState("");
  const [enterName, setEnterName] = useState("");
  const [enterLink, setEnterLink] = useState("");
  const [enterInternName, setEnterInternName] = useState("");
  const [enterInternEmail, setEnterInternEmail] = useState("");
  const [enterTime, setEnterTime] = useState();
  const [enterDate, setEnterDate] = useState();
  const addUserHandler = async (event) => {
    event.preventDefault();
    const data = {
      email: enterEmail,
      name: enterName,
      link: enterLink,
      internName: enterInternName,
      time: enterTime,
      date: enterDate,
      internEmail: enterInternEmail,
    };
    try {
      const result = await sendEmail(data);
      console.log(result.data);
      if (result.data) {
        alert("email send");
      }
    } catch (e) {
      console.log("error send email: ", e);
      alert("can not send email");
    }
  };
  const enterEmailChangeHandler = (event) => {
    setEnterEmail(event.target.value);
  };
  const enterNameChangeHandler = (event) => {
    setEnterName(event.target.value);
  };
  const enterLinkChangHanler = (event) => {
    setEnterLink(event.target.value);
  };

  const enterTimeHandler = (event) => {
    setEnterTime(event.target.value);
  };
  const enterDateHandler = (event) => {
    setEnterDate(event.target.value);
  };
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
            <form onSubmit={addUserHandler}>
              <table className="taolichpv">
                <tbody>
                  <tr>
                    <td className="left-modal">
                      <label>Họ tên *:</label>
                    </td>
                    <td>
                      <input type="text" required value={enterInternName} />
                    </td>
                    <td classname="right-modal">
                      <label>Ngày phỏng vấn *:</label>
                    </td>
                    <td>
                      <input
                        type="date"
                        required
                        onChange={enterDateHandler}
                        value={enterDate}
                      />
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
                        value={enterInternEmail}
                      />
                    </td>
                    <td classname="right-modal">
                      <label>Giờ bắt đầu *:</label>
                    </td>
                    <td>
                      <input
                        type="time"
                        required
                        onChange={enterTimeHandler}
                        value={enterTime}
                      />
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
                        onChange={enterEmailChangeHandler}
                        value={enterEmail}
                      />
                    </td>
                    <td classname="right-modal">
                      <label>Người phỏng vấn *:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        required
                        placeholder="Nhập Tên Người Phỏng vấn"
                        onChange={enterNameChangeHandler}
                        value={enterName}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td classname="left-modal">
                      <label>Link phỏng vấn *:</label>
                    </td>
                    <td>
                      <input
                        type="link"
                        onChange={enterLinkChangHanler}
                        value={enterLink}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="taolichpvfooter">
                <button type="submit" className="btn2">
                  Gửi
                </button>
                <button type="button">Xem trước</button>
                <button type="button" className="btn1" onClick={hidePopUp}>
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
