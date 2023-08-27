import authReducer from "./auth/authSlice";
import { combineReducers } from "redux";
import systemReducer from "./system/systemSlice";
import userReducer from "./users/userSlice";

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  system: systemReducer
});

export default rootReducer;
