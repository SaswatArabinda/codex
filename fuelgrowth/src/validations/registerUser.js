import * as yup from "yup";

export const registerUserSchema = yup.object().shape({
  fname: yup.string().required(),
  lname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  "confirm-password": yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  terms: yup.bool().oneOf([true], "You must accept the terms and conditions"),
  role: yup.object().required(),
});
