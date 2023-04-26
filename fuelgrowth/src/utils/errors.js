import toast from "react-hot-toast";

export const setError = (error) => {
  console.log("ERROR: ", error);
  toast.error(error?.statusText || error?.message);
};
