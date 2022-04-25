import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useState } from 'react';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email_id, setEmailId] = useState("")
  const [user_name, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [confirm_password, setConfirmPassword] = useState("")
  const [org_name, setOrg_name] = useState("")
  const [enrolmentnumber, setEnrolmentnumber] = useState("")

  const [mobileNo, setMobileNo] = useState("")
  const handlemobile = e => setMobileNo(e.target.value)

  const handleEamil = e => setEmailId(e.target.value)
  const handleuser_name = e => setUsername(e.target.value)
  // const handlepassword = e => setPassword(e.target.value)
  // const handleconfirm_password = e => setConfirmPassword(e.target.value)
  const handleorg_name = e => setOrg_name(e.target.value)

  const SignupUrl = 'http://localhost:8000/api/v1/student-registration'

  const signup = () => {
    const data = {
      "email_id": email_id,
      "name": user_name,
      // "password": password,
      // "confirm_password": confirm_password,
      "phone_number": mobileNo,
      "branch": org_name,
      "enrollment_number": enrolmentnumber,
      "year": 2022,
      "date_of_birth": "01-07-1999",
      "org_address": "string",
      "establishment_year": 10
    }
    axios.post(
      SignupUrl,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: JSON.parse(localStorage.getItem("user")).token
        }
      }).then((response) => {
        console.log(response.data)
        alert("Student created successfully")
        window.location.href = "/dashboard"
      }).catch((err) => {

      })
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Student Registation
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={user_name}
                onChange={handleuser_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email_id}
                onChange={handleEamil}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="mobile number"
                name="username"
                // autoComplete="username"
                value={mobileNo}
                onChange={handlemobile}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="branch"
                label="Branch"
                name="branch"
                autoComplete="branch"
                // value = {user_name}
                // onChange = {handleuser_name}
                value={org_name}
                onChange={handleorg_name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="enrolmentnumber"
                label="Enrollment Number"
                name="enrolmentnumber"
                autoComplete="enrolmentnumber"
                value={enrolmentnumber}
                onChange={(e) => setEnrolmentnumber(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
              {/* <FormControlLabel
                        value="start"
                         control= {<span style = {{fontSize: 23}}/>}
                        label="Gender"
                        labelPlacement="start"
                    />  */}
              {/* <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Female"
                labelPlacement="start"
              />
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Male"
                labelPlacement="start"
              /> */}
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value = {password}
                onChange = {handlepassword}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm_password"
                label="confirm_Password"
                type="password"
                id="confirm_password"
                autoComplete="current-password"
                value = {confirm_password}
                onChange = {handleconfirm_password}
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signup}
          >
            Register
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}