import "../../../asset/css/interviewShedule.css";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../../redux/store/popup";
import { useEffect, useState } from "react";
import { sendEmail, saveDataInterview } from "../../../api/service";
import Swal from "sweetalert2";

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
    setId(dataIntern?.id);
  }, [dataIntern]);

  const [enterEmail, setEnterEmail] = useState("");
  const [enterName, setEnterName] = useState("");
  const [enterLink, setEnterLink] = useState("");
  const [enterInternName, setEnterInternName] = useState("");
  const [enterInternEmail, setEnterInternEmail] = useState("");
  const [id, setId] = useState("");
  const [enterTime, setEnterTime] = useState();
  const [enterDate, setEnterDate] = useState();
  const addUserHandler = async (event) => {
    event.preventDefault();
    const saveData = {
      interviewTime: enterTime,
      interviewDate: enterDate,
      interviewLink: enterLink,
      interviewer: enterName,
      emailInterviewer: enterEmail,
    };
    const emailData = {
      emailCandidate: enterInternEmail,
      fullName: enterInternName,
      interviewer: enterName,
      emailInterviewer: enterEmail,
      interviewTime: enterTime,
      interviewDate: enterDate,
      interviewLink: enterLink,
    };
    try {
      const result = await saveDataInterview(id, saveData);
      const emailResult = await sendEmail(emailData);

      console.log(result.data);
      console.log(emailResult.data);
      if (result.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tạo lịch phỏng vấn thành công",
          showConfirmButton: false,
          timer: 1500,
          style: "display:block",
        });
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tạo lịch phỏng vấn thất bại",
      });
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
        <div classname="header_2">
          <h3 style={{ color: "#007bff", margin: "2% 0 0 10%", width: "249%" }}>
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
                      <input
                        type="text"
                        required
                        value={enterInternName}
                        disabled
                      />
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
                      <label>Email ứng viên *:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        required
                        placeholder="Nhập email"
                        value={enterInternEmail}
                        disabled
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
                      <label>Email người phỏng vấn *:</label>
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
                <button type="submit" class="btn btn-primary">
                  Gửi
                </button>
                <button type="button" class="btn btn-success">
                  Xem trước
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={hidePopUp}
                >
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
