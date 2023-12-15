import {configureStore} from "@reduxjs/toolkit"
import RegistrationSlicer from "./LoginSlicer.js"
import CrmSlicer from "./CrmSlicer.js"
export const store = configureStore({
   reducer: {
      login: RegistrationSlicer,
      crm : CrmSlicer,
   }
})