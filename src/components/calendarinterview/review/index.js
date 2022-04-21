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
          <h4>XEM TRƯỚC NỘI DUNG KHI GỬI</h4>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="title__review">
          <h7>Xin chào ""</h7>
        </div>
        <div className="description__review">
          <span className="description__review-content">
            Như đã qua trao đổi bằng điện thoại, chúng tôi xin mời bạn đến với
            cuộc phỏng vấn chi tiết với trưởng dự án bằng link dưới đây.
          </span>
        </div>
        <div className="infor__review">
          <ul class="infor__review-item">
            <li class="infor__review-items">Email ứng viên</li>
            <li class="infor__review-items">Email người phỏng vấn</li>
            <li class="infor__review-items">Người phỏng vấn</li>
            <li class="infor__review-items">Thời gian</li>
            <li class="infor__review-items">Ngày phỏng vấn</li>
            <li class="infor__review-items">Link phỏng vấn</li>
          </ul>
        </div>

        <div>
          <button
            className="btn btn-danger-del"
            type="button"
            onClick={hidePreview}
          >
            OK
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};
export default Preview;
