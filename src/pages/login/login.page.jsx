import React from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./login.styles.scss";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = () => {
    // Perform login logic here

    // After successful login, navigate to /dashboard
    navigate("/dashboard");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div>
          <h1 className="login-form-header">Nice to see you again!</h1>
          <p>Insert your credentials to jump back in. </p>
        </div>

        <TextField
          required
          id="outlined-required"
          label="Username"
          variant="outlined"
        />

        <FormControl
          sx={{ m: 1, width: "25ch" }}
          required
          id="outlined-required"
          variant="outlined"
          type="password"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button
          variant="contained"
          style={{
            backgroundColor: "#336699",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
      <p>
        No account? Register{" "}
        <a href="/register">
          {" "}
          <b>here</b>.
        </a>
      </p>
    </div>
  );
};

export default Login;
