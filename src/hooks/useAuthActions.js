import { useDispatch } from "react-redux";
import { loginUser, logoutUser  } from "../store/users/slice";

export const useAuthActions = () => {
    const dispatch = useDispatch();
  
    const login = ({ username, password }) => {
      dispatch(loginUser({ username, password }));
    };
  
    const logout = () => {
      dispatch(logoutUser());
    };
  
    return { login, logout };
  };