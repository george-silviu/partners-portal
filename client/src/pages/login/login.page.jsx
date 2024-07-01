//react imports
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//material ui components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//toast component
import { ToastContainer, toast } from "react-toastify";

//components
import { LoginContainer, LoginForm, LoginFormHeader } from "./login.styles";

const Login = () => {
  const userRef = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   userRef.current
  // }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  const handleLogin = () => {
    try {
      // throw new Error("error");
      toast.success("Login succesful!", { theme: "colored" });
    } catch (error) {
      toast.error("Login error!", { theme: "colored" });
    }

    // Perform login logic here
    // After successful login, navigate to /dashboard
    // navigate("/dashboard");
  };

  // const handleUsernameChange = () =>

  //   const handlePasswordChange = () =>

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <LoginContainer>
      <ToastContainer />

      <LoginForm>
        <div>
          <LoginFormHeader>Nice to see you again!</LoginFormHeader>
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
      </LoginForm>
      <p>
        No account? Register{" "}
        <a href="/register">
          {" "}
          <b>here</b>.
        </a>
      </p>
    </LoginContainer>
  );
};

export default Login;
