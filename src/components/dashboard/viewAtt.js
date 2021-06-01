import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const useStyles = makeStyles({
  center: {
    flex: 1,
    display: "flex",
  justifyContent: "center",
  alignItems: "center"
  },
  
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <div className = {classes.center}>
            showlist
        </div>
    </React.Fragment>
  );
}