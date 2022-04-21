import type { NextRouter } from "next/router";
import Swal from "sweetalert2";

interface Props {
  icon: any;
  title: string;
  text: string;
  router: NextRouter | null;
}

export const CustomAlert = ({ icon, title, text, router }: Props) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  }).then((result) => {
    if (result.isConfirmed && router) {
      router.push("/dashboard");
    }
  });
};
