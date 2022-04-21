import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../../redux/store/popup";

const Preview = () => {
  const showPopUp = useSelector((state) => state.popup.showPreview);
  const dispatch = useDispatch();
  const hidePreview = () => {
    dispatch(popUpActions.hidePreview());
    dispatch(popUpActions.show());
  };
  return (
    <Modal show={showPopUp}>
      <ModalHeader>
        <div>
          <h5>XEM TRƯỚC NỘI DUNG KHI GỬI</h5>
        </div>
      </ModalHeader>
      <ModalBody>
        <div>
          <button type="button" onClick={hidePreview}>
            OK
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};
export default Preview;
