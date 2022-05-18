import type { NextRouter } from "next/router";
import Swal from "sweetalert2";

interface AllProps {
  icon: any;
  title: string;
  text: string;
  router: NextRouter | null;
  url: string | null;
}

interface Props {
  text: string;
  router: NextRouter | null;
  url: string | null;
}

export const CustomAlert = ({ icon, title, text, router, url }: AllProps) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  }).then((result) => {
    if (result.isConfirmed && router && url) {
      router.push(url);
    } else if (result.isConfirmed && router) {
      router.reload();
    }
  });
};

export const SuccessAlert = ({ text, router, url }: Props) => {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: text,
  }).then((result) => {
    if (result.isConfirmed && router && url) {
      router.push(url);
    } else if (result.isConfirmed && router) {
      router.reload();
    }
  });
};

export const ErrorAlert = ({ text, router, url }: Props) => {
  Swal.fire({
    icon: "error",
    title: "Error!",
    text: text,
  }).then((result) => {
    if (result.isConfirmed && router && url) {
      router.push(url);
    } else if (result.isConfirmed && router) {
      router.reload();
    }
  });
};
