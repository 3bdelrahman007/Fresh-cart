import Swal from "sweetalert2";

export default function Alert() {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}
