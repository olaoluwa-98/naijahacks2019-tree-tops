import * as Yup from "yup";

const stringValidation = () => Yup.string().required("Required");
const emailValidation = () =>
  Yup.string()
    .email()
    .required("Required");
const passwordValidation = () =>
  Yup.string()
    .min(6)
    .required("Required");
const phoneValidation = () => Yup.number().required("Required");
const numberValidation = () => Yup.number().required("Required");
const dateValidation = () => Yup.date().required("Required");

const registerStudentSchema = Yup.object().shape({
  firstname: stringValidation(),
  lastname: stringValidation(),
  password: passwordValidation(),
  email: emailValidation(),
  university_id: numberValidation()
});

const loginStudentSchema = Yup.object().shape({
  password: passwordValidation(),
  email: emailValidation()
});

const setPreferencesSchema = Yup.object().shape({
  current_level: numberValidation().oneOf([100, 200, 300, 400, 500]),
  target_gpa: numberValidation(),
  current_gpa: numberValidation()
});

export { registerStudentSchema, loginStudentSchema, setPreferencesSchema };
