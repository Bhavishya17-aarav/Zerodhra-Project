import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      },  {
      withCredentials: true
    });

      //localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
     setTimeout(() => {
      window.location.href ="http://localhost:5174/";
     }, 200);
    } catch (error) {
       toast.error(error.res?.data?.message || "Something went wrong")
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <ToastContainer position="bottom-right" autoClose={2000} />
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Zerodha Login</h3>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Signin;