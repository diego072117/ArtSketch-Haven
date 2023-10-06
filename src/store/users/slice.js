import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../service/Data.json";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const authLocal = () => {
  const auth = localStorage.getItem("__auth__");
  return auth ? JSON.parse(auth) : { isAuthenticated: false, user: null };
};


const initialState = authLocal()

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
        const { username, password } = action.payload;
        const validUser = users.find(
          (user) => user.username === username && user.password === password
        );
  
        if (validUser) {
          // Almacena la información del usuario en el estado
     
          state.isAuthenticated = true;
          state.user = validUser;
          localStorage.setItem("__auth__", JSON.stringify(state));
        } else {
          // Si las credenciales no son válidas
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Credenciales incorrectas!",
          });
         
        }
      },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("__auth__");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
