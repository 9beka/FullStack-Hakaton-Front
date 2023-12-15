// Схема валидации Yup
import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
   name: Yup.string()
     .min(3, "Minimum 3 symbols are required")
     .max(20, "Maximum 20 symbols are required")
     .matches(/^[a-z]+$/, "Name should contain lowercase letters")
     .required("Name is required"),
   email: Yup.string().email("Invalid email").required("Email is required"),
   password: Yup.string()
     .matches(
       /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
       "Password must contain at least 1 symbol, 1 uppercase letter, 1 number"
     )
     .min(7, "Password length must be between 7 and 15 symbols")
     .max(15, "Password length must be between 7 and 15 symbols")
     .required("Password is required"),
 });