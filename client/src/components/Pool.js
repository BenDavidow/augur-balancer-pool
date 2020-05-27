import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import StyledButton from './StyledButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Pool(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} >
        <Grid item xs={6}>
          <Paper className={classes.paper} square={true} elevation={0}>
            <Box fontWeight="fontWeightBold" textAlign="left">    
              <form className={classes.root} noValidate autoComplete="off">
                <StyledButton onClick={props.approvePhaseStructure}>
                  Create new smart pool
                </StyledButton>
              </form><br/>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledButton onClick={props.approvePhaseStructure}>
                    Load existing smart pool
                </StyledButton>
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                  id="filled-basic" 
                  label="Address of smart pool to load" 
                  variant="filled" 
                  fullWidth={true} 
                  type="text" 
                  name="phaseName" 
                  value={props.phaseName} 
                  onChange={props.handleChange}
                />
              </form><br/>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} square={true} elevation={0}>
            <Box fontWeight="fontWeightBold" textAlign="left">    
            <form className={classes.root} noValidate autoComplete="off">
            <StyledButton onClick={props.definePhase}>
                  Approve payment
                </StyledButton><br/>
                <StyledButton onClick={props.definePhase}>
                  Bind new token
                </StyledButton><br/>
                <TextField 
                  id="filled-basic" 
                  label="Token name" 
                  variant="filled" 
                  type="number" 
                  name="lockedPayment" 
                  value={props.lockedPayment} 
                  onChange={props.handleChange}
                />
                <br/>
                <TextField 
                  id="filled-basic" 
                  label="Amount" 
                  variant="filled" 
                  type="number" 
                  name="lockedPayment" 
                  value={props.lockedPayment} 
                  onChange={props.handleChange}
                />
                <br/>
                <TextField 
                  id="filled-basic" 
                  label="Denorm" 
                  variant="filled" 
                  type="number" 
                  name="lockedPayment" 
                  value={props.lockedPayment} 
                  onChange={props.handleChange}
                />
                <br/>
             </form><br/>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper} square={true} elevation={0}>
            <Box fontWeight="fontWeightBold" textAlign="left">    
            <form className={classes.root} noValidate autoComplete="off">
                <StyledButton onClick={props.definePhase}>
                  Change balance/weight of token
                </StyledButton><br/>
                <TextField 
                  id="filled-basic" 
                  label="Token name" 
                  variant="filled" 
                  type="number" 
                  name="lockedPayment" 
                  value={props.lockedPayment} 
                  onChange={props.handleChange}
                />
                <br/>
                <TextField 
                  id="filled-basic" 
                  label="Amount" 
                  variant="filled" 
                  type="number" 
                  name="lockedPayment" 
                  value={props.lockedPayment} 
                  onChange={props.handleChange}
                />
                <br/>
                <TextField 
                  id="filled-basic" 
                  label="Denorm" 
                  variant="filled" 
                  type="number" 
                  name="lockedPayment" 
                  value={props.lockedPayment} 
                  onChange={props.handleChange}
                />
                <br/>
             </form><br/>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}