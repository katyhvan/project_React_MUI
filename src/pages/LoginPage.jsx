import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { Box, TextField, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  function handleLogin() {
    login(username, password);
  }
  return (
    <div>
      <Box
        className="login-form"
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          flexDirection: "column",
        }}
      >
        <h2 className="login-title">Login Form</h2>
        <TextField
          className="login-input"
          helperText=""
          id="demo-helper-text-aligned"
          label="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="login-input"
          helperText=""
          id="demo-helper-text-aligned-no-helper"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={handleLogin}>
          Login
        </Button>
      </Box>

      {/* <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button> */}
    </div>
  );
};

export default LoginPage;
