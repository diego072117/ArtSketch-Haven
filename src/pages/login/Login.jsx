import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../hooks/useAuthActions";
import "./Module.scss";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthActions();

  const handleLogin = () => {
    // Llama a la función login con las credenciales proporcionadas
    login({ username, password });
  };

  // Obtener el estado autenticado y el usuario desde el estado global
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === "admin") {
        navigate("/dashAdmin");
      } else if (user.role === "user") {
        navigate("/products");
      }
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <div className="container-login">
        <div className="login">
          <div className="image-login">
            <img
              src="https://i.pinimg.com/564x/13/d4/69/13d46928076fd31ce11ebe05677d3ac5.jpg"
              alt=""
            />
          </div>
          <div className="data-login">
            <h2>Ingresa a el sitio</h2>
            <input
              type="text"
              placeholder="User"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button onClick={handleLogin}>Ingresar</button>
          </div>
        </div>
      </div>
    </>
  );
};
