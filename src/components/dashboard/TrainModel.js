import React, {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Button from '@material-ui/core/Button';
import DataUsageIcon from '@material-ui/icons/DataUsage';

import axios from 'axios'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const [lable , setLable] = useState("Train Model")
  const url = 'http://localhost:8000/api/v1/trainData'
const handleClick = (event) => {
    event.preventDefault();
    setLable("Traning...")
    axios.get(url)
    .then((response)=>{
        setLable("Train Model")
        console.log(response)
    }
    )
  }
  return (
    <React.Fragment>
      {/* <Title>Take Image</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography> */}
      <div className = {classes.center}>
      <DataUsageIcon style={{ fontSize: 135 , color : "#92C5E7" , "text-align" : "center"  }} />
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
              {lable}
          </Button>
       </div>
    </React.Fragment>
  );
}