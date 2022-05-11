import toast from "react-hot-toast";

export const SuccessToast = (message: string) => {
  toast(message, {
    style: {
      borderRadius: "8px",
      maxWidth: "516px",
      height: "43px",
      fontSize: "16px",
      fontFamily: "Pretendard400",
      background: "rgba(18, 24, 33, 0.8)",
      color: "#FFFFFF",
    },
  });
};

export const ErrorToast = (message: string) => {
  toast(message, {
    style: {
      borderRadius: "8px",
      maxWidth: "516px",
      height: "43px",
      fontSize: "16px",
      fontFamily: "Pretendard400",
      background: "rgba(234, 31, 31, 0.8)",
      color: "#FFFFFF",
    },
  });
};
