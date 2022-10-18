import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { Box, TextField, Button } from "@mui/material";
import "../styles/RegistrationPage.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  function handleRegister() {
    register(username, password);
  }

  return (
    <div>
      <Box
        className="register-form"
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
          flexDirection: "column",
        }}
      >
        <h2 className="register-title">Register Form</h2>
        <TextField
          className="register-input"
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="register-input"
          helperText="Please enter your password"
          id="demo-helper-text-aligned-no-helper"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="register-btn"
          variant="outlined"
          onClick={handleRegister}
        >
          Register
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
      <button onClick={handleRegister}>Register</button> */}
    </div>
  );
};

export default RegistrationPage;
