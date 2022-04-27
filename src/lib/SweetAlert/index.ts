import type { NextRouter } from "next/router";
import Swal from "sweetalert2";

interface Props {
  icon: any;
  title: string;
  text: string;
  router: NextRouter | null;
  url: string | null;
}

export const CustomAlert = ({ icon, title, text, router, url }: Props) => {
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
