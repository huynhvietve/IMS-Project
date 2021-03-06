import "../../../asset/css/interviewShedule.css";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../../redux/store/popup";
import { dataAction } from "../../../redux/store/datapreview";
import { useEffect, useState } from "react";
import { sendEmail, saveDataInterview } from "../../../api/service";
import Swal from "sweetalert2";

const CalendarInterview = () => {
  const dispatch = useDispatch();
  const showPopUp = useSelector((state) => state.popup.showModal);
  const hidePopUp = () => {
    dispatch(popUpActions.hide());
  };
  const showPreview = () => {
    dispatch(popUpActions.showPreview());
    dispatch(popUpActions.hide());
    dispatch(
      dataAction.setDataPreview({
        name: enterInternName,
        email: enterInternEmail,
        mentor: enterName,
        emailMentor: enterEmail,
        link: enterLink,
        date: enterDate,
        time: enterTime,
        tite: title,
      })
    );
  };

  const dataIntern = useSelector((state) => state.popup.data);

  useEffect(() => {
    setEnterInternName(dataIntern?.fullName);
    setEnterInternEmail(dataIntern?.email);
    setId(dataIntern?.id);
  }, [dataIntern]);
  const [title, setTitle] = useState("");
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
      subject: title,
      interviewer: enterName,
      emailInterviewer: enterEmail,
      interviewTime: enterTime,
      interviewDate: enterDate,
      interviewLink: enterLink,
      listCandidates: [
        {
          emailCandidate: enterInternEmail,
          fullName: enterInternName,
        },
      ],
    };
    try {
      const result = await saveDataInterview(id, saveData);
      const emailResult = await sendEmail(emailData);
      console.log(result.status);

      console.log(result.data);
      console.log(emailResult.data);
      if (result.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "T???o l???ch ph???ng v???n th??nh c??ng",
          showConfirmButton: false,
          timer: 1500,
          style: "display:block",
        });
        setEnterEmail("");
        setEnterName("");
        setEnterLink("");
        setEnterTime("");
        setEnterDate("");
        setTitle("");
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          text: error.response.data.error,
          confirmButtonText: "X??c nh???n",
        });
      } else if (error.request) {
        Swal.fire({
          icon: "error",
          text: error.request,
          confirmButtonText: "X??c nh???n",
        });
      } else {
        console.log("Error", error.message);
        Swal.fire({
          icon: "error",
          text: error.message,
          confirmButtonText: "X??c nh???n",
        });
      }
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
  const enterTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  return (
    <Modal
      show={showPopUp}
      className="modal-content2"
      contentClassName="modal-content1"
    >
      <ModalHeader>
        <div className="header_2">
          <h5 style={{ color: "#007bff" }}>T???O L???CH PH???NG V???N</h5>
        </div>

        <div style={{ borderBottom: "0px solid" }}></div>
      </ModalHeader>

      <ModalBody>
        <div>
          <div className="modal-header1">
            <form onSubmit={addUserHandler}>
              <table>
                <tbody>
                  <tr>
                    <td className="left-modal2">
                      <label>H??? t??n :</label>
                    </td>
                    <td>
                      <input type="text" value={enterInternName} disabled />
                    </td>
                    <td className="right-modal2">
                      <label className="lable-right">Ng??y ph???ng v???n :</label>
                    </td>
                    <td>
                      <input
                        type="date"
                        style={{ width: "190px" }}
                        onChange={enterDateHandler}
                        value={enterDate}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal2">
                      <label>Email ???ng vi??n :</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Nh???p email"
                        value={enterInternEmail}
                        disabled
                      />
                    </td>
                    <td className="right-modal2">
                      <label className="lable-right">Gi??? b???t ?????u :</label>
                    </td>
                    <td>
                      <input
                        type="time"
                        style={{ width: "190px" }}
                        onChange={enterTimeHandler}
                        value={enterTime}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal2">
                      <label>Email ng?????i ph???ng v???n :</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Nh???p email"
                        onChange={enterEmailChangeHandler}
                        value={enterEmail}
                      />
                    </td>
                    <td className="right-modal2">
                      <label className="lable-right">Ng?????i ph???ng v???n :</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Nh???p h??? t??n..."
                        onChange={enterNameChangeHandler}
                        value={enterName}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="left-modal2">
                      <label>Link ph???ng v???n :</label>
                    </td>
                    <td>
                      <input
                        type="link"
                        onChange={enterLinkChangHanler}
                        value={enterLink}
                        placeholder="Nh???p link"
                      />
                    </td>
                    <td className="right-modal2">
                      <label className="lable-right">Ti??u ????? :</label>
                    </td>
                    <td>
                      <input
                        placeholder="Nh???p ti??u ?????"
                        type="text"
                        onChange={enterTitleHandler}
                        value={title}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="taolichpvfooter">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={showPreview}
                >
                  Xem tr?????c
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                  data-dismiss="modal"
                  onClick={hidePopUp}
                >
                  H???y
                </button>
                <button type="submit" className="btn btn-danger-del">
                  G???i
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
