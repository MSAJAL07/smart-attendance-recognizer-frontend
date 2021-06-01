import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import TakeAtt from './TakeAtt';
import TakeImg from './TakeImg';
import TrainModel from './TrainModel';

import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

import Class from './classroom'
import Teacher from './teacher'
import Student from './student'
import ViewAtt from './viewAtt'

import CreateClass from '../signup/create_class'
import CreateStudent from '../signup/student-registration'
import CreateTeacher from '../signup/teacher-registration'

import Orders from './Orders';
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard( props) {
  const classes = useStyles();
  let open = props.open 
  const handleDrawerClose = props.handleDrawerClose;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const pathname = window.location.pathname 
  console.log(pathname)

  const [show,setShow] = useState(false)
  const [id,setid] = useState("")
  const [name,setname] = useState("")

  const handleCancle = () => setShow(false)
  const handleopen = () => setShow(true)
  const handleId = (e) => setid(e.target.value)
  const handleName = (e) => setname(e.target.value)

  

  const collectImg = (event) => {
    const url = 'http://localhost:8000/api/v1/collectImg?' + "id="+id+"&&name="+name;
    event.preventDefault();
    setShow(false)
    axios.get(url)
    .then((response)=>{
        console.log(response)
    }
    )
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <Modal show={show} onHide={handleCancle}>
                <Modal.Header closeButton>
                <Modal.Title>Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Enter ID</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value = {id} onChange = {handleId}  />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Enter Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value = {name} onChange = {handleName}  />
                </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                {/* <Alert show= {quantityError} variant="danger" severity="error">Please enter valid quantity!</Alert> */}
                <Button variant="secondary" onClick={handleCancle}>
                    Close
                </Button>
                <Button variant="success" onClick={collectImg}>
                    Take Images
                </Button>
                </Modal.Footer>
            </Modal>




       { (pathname ==="/dashboard" || pathname ==="/dashboard/" ) &&
     ( <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <TakeImg id= {id} name = {name}  setShow = {setShow}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <TrainModel/>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <TakeAtt />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <Class/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
              <Teacher/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
               <Student/>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>)}
      {
        (pathname === "/dashboard/createClass" ) && (<CreateClass/>)
      }
      {
        (pathname === "/dashboard/createTeacher") && ( <CreateTeacher/>)
      }
      {
        (pathname === "/dashboard/createStudent") && (<CreateStudent/>)
      }
      {
        (pathname === "/dashboard/view") && (<ViewAtt/>)
      }
    </div>
       
  );
}


