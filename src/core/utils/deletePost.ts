import Swal from "sweetalert2";

import { handleDeletePost } from "src/core/api/post.api";
import { ErrorToast, SuccessToast } from "src/core/lib/Toast";

interface Props {
  idx: number;
  getAllPost: () => void | null;
  getUserProfile: () => void | null;
}

export const deletePost = ({ idx, getAllPost, getUserProfile }: Props) => {
  Swal.fire({
    icon: "question",
    title: "Really?",
    text: "게시글을 삭제하시겠습니까?",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      handleDeletePost({ data: { post_idx: idx } })
        .then((res) => {
          SuccessToast(res.detail);
          if (getAllPost === null && getUserProfile !== null) {
            getUserProfile();
          } else if (getAllPost !== null && getUserProfile === null) {
            getAllPost();
          }
        })
        .catch((err) => {
          ErrorToast(err.response.data.detail);
        });
    } else if (result.isDismissed) {
      SuccessToast("게시물 삭제를 취소하였습니다.");
    }
  });
};
