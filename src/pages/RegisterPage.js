import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "../components/Register";
import { register } from "../utils/api";
import "../styles/resgister.css";

function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>Register</h2>
      <Register register={onRegisterHandler} />
      <p>
        Ayo <Link to="/">Login</Link> Disini
      </p>
    </section>
  );
}

export default RegisterPage;
