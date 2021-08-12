import {
  React,
  useState,
} from 'react';

import axios from 'axios';
import { useHistory } from 'react-router';

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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
     
      <Link color="inherit" href="https://material-ui.com/">
      </Link>
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
  
  const [signdata,Setsigndata] =useState({
    firstname:'',
    lastname:'',
    username:'',
    password:''

})

const history=useHistory()

const handleOnChange= (e) =>{
    Setsigndata((prev)=>{
        return {
            ...prev,
            [e.target.name]:e.target.value
        }
    })
    console.log(signdata);
}

const handleOnSubmit=()=>{
    
    axios.post("http://localhost:8083/api/postusers",signdata).then(res=>res.data).then((data)=>
    {
     
      console.log(data);
      history.push('./');
      console.log("data posted successfully..")
    
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
          Sign up
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="firstname"
                autoFocus
                onChange={handleOnChange}
                value={signdata.firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="lastname"
                name="lastname"
                onChange={handleOnChange}
                value={signdata.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                onChange={handleOnChange}
                value={signdata.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleOnChange}
                value={signdata.password}
              />
            </Grid>
          </Grid>
          <Button variant="outlined" color="default" onClick={handleOnSubmit} >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}