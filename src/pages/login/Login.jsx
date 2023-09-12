import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../service/Data.json";
import "./Module.scss";
import Swal from "sweetalert2";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validateUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validateUser) {
      console.log("entre al if de usuario validado");
      if (validateUser.role === "admin") {
        navigate("/dashAdmin");
      } else if (validateUser.role === "user") {
        navigate("/products");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credenciales incorrectas!",
      });
    }
  };

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
