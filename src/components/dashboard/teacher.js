import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const handleClick = (event) => {
    window.location.href = "/dashboard/createTeacher"
   
  }
export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
   
      <div className = {classes.center}>
      <PersonAddIcon style={{ fontSize: 135 , color : "#92C5E7" , "text-align" : "center"  }} />
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
              Add Teacher
          </Button>
       </div>
    </React.Fragment>
  );
}