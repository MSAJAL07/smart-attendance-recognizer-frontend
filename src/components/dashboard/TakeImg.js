import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Button from '@material-ui/core/Button';
import CameraEnhanceTwoToneIcon from '@material-ui/icons/CameraEnhanceTwoTone';
import axios from 'axios'


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },

  center : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
   
  },
 
});

export default function Deposits({id,name,setShow}) {
  const classes = useStyles();

const url = 'http://localhost:8000/api/v1/collectImg'
const handleClick = (event) => {
    // event.preventDefault();
    // axios.get(url)
    // .then((response)=>{
    //     console.log(response)
    // }
    // )
    setShow(true)
  } 

  return (
    <React.Fragment>
      {/* <Title>Take Image</Title> */}
      {/* <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography> */}
      <div className = {classes.center}>
      <CameraEnhanceTwoToneIcon style={{ fontSize: 140 , color : "#92C5E7" , "text-align" : "center"  }} />
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
              Take Image 
          </Button>
       
       
      </div>
    </React.Fragment>
  );
}