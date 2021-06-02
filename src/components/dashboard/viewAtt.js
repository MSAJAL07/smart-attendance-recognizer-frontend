import React, { useEffect,useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Button from '@material-ui/core/Button';
import axios from 'axios'



import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme)=>({
  center: {
    flex: 1,
    display: "flex",
    flexDirection : "column",
  justifyContent: "center",
  alignItems: "center",
   marginTop: theme.spacing(8),
  // marginBottom: theme.spacing(8),
  },
  table: {
    marginTop: theme.spacing(8),
    minWidth: 800,
  },
  
}));

export default function Deposits() {
  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/v1/get-attendance")
    .then((response)=>{
      console.log(response.data.data)
      setData(response.data.data)
    })
  },[])
  const classes = useStyles();
  return (
    <React.Fragment>
        <div className = {classes.center}>
        <Typography component="h1" variant="h5">
         <b> View Attendance </b>
        </Typography>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row[0].time}>
              <TableCell component="th" scope="row">
                {row[0].id}
              </TableCell>
              <TableCell align="right">{row[0].name}</TableCell>
              <TableCell align="right">{row[0].date}</TableCell>
              <TableCell align="right">{row[0].time}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </React.Fragment>
  );
}