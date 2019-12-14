import { toast } from "react-toastify";

export const errorToast = error => {
  toast.error(error);
};

export const successToast = message => {
  toast.success(message);
};
