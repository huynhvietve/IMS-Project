import { createAction } from ".";
import Swal from "sweetalert2";
import { candirService } from "../../redux/services";
import {
  DELETE_CANDI,
  FETCH_CANDI,

} from "../type/type";

export const getCandi = () => {
  return (dispatch) => {
    candirService
      .getCandi()
      .then((res) => {
        dispatch(createAction(FETCH_CANDI, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteCandi = (idCandidate) => {
  return (dispatch) => {
    Swal.fire({
      title: "Bạn chắc chắn muốn xóa?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Hủy",
    })
      .then((result) => {
        if (result.isConfirmed) {
          candirService
            .deleteCandi(idCandidate).then((res) => {
            dispatch(createAction(DELETE_CANDI, res.data));
            dispatch(getCandi());
          });
          Swal.fire("Xóa thành công!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};