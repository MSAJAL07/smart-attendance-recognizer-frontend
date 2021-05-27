import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import PeopleIcon from '@material-ui/icons/People';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const url = 'http://localhost:8000/api/v1/takeatten'
const handleClick = (event) => {
    event.preventDefault();
    axios.get(url)
    .then((response)=>{
        console.log(response)
    }
    )
  }
export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
   
      <div className = {classes.center}>
      <PeopleIcon style={{ fontSize: 135 , color : "#92C5E7" , "text-align" : "center"  }} />
      </div>
      <div>
      <Button
            type="button"
            // fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick = {handleClick}
        
          >
              Take Attendance
          </Button>
       </div>
    </React.Fragment>
  );
}