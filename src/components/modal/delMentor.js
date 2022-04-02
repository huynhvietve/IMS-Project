import React from 'react'

export default function DelMentor() {
  return (
    <div>
        <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <p class="text-muted">Bạn có muốn xóa người hướng dẫn này?</p>
            </div>
            <div class="modal-footer">
              {" "}
              <button type="button" class="btn btn-light" data-dismiss="modal">
                Hủy
              </button>{" "}
              <button type="button" class="btn btn-danger-del">
                Xóa
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
