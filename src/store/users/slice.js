import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../service/Data.json";

const initialState = {
    isAuthenticated: false,
    user: null,
  };

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
        } else {
          // Si las credenciales no son válidas, mantén el estado de autenticación como falso y borra la información del usuario
          state.isAuthenticated = false;
          state.user = null;
        }
      },
    logoutUser: (state) => {
      // Cuando el usuario cierra sesión, restablece el estado de autenticación y la información del usuario
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;