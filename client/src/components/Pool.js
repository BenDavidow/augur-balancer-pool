import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import StyledButton from './StyledButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
                <StyledButton onClick={props.createPool}>
                  Create new smart pool
                </StyledButton>
              </form><br/>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledButton onClick={props.loadExistingPool}>
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
                  name="bpoolToLoad" 
                  value={props.bpoolToLoad} 
                  onChange={props.handleChange}
                />
              </form><br/>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledButton onClick={props.setFee}>
                    Set swap fee
                </StyledButton>
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                  id="filled-basic" 
                  label="Enter swap fee from 0.000001 to 0.1" 
                  variant="filled" 
                  fullWidth={false} 
                  type="text" 
                  name="swapFee" 
                  value={props.swapFee} 
                  onChange={props.handleChange}
                />
              </form><br/>
              <br/>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledButton onClick={props.setPublic}>
                    Change public/private status
                </StyledButton>
            </form>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} square={true} elevation={0}>
            <Box fontWeight="fontWeightBold" textAlign="left">    
            <form className={classes.root} noValidate autoComplete="off">
            <StyledButton onClick={props.approveToken}>
              Approve token
            </StyledButton><br/>
            <StyledButton onClick={props.bindToken}>
              Bind new token
            </StyledButton><br/>
            <StyledButton onClick={props.rebindToken}>
              Rebind token
            </StyledButton><br/>
            <StyledButton onClick={props.unbindToken}>
              Unbind token
            </StyledButton><br/>
            <br/>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">Token</InputLabel>
                <Select
                  id="demo-simple-select-filled"
                  value={props.token}
                  onChange={props.handleChange}
                  type="text"
                  name="token"
                >
                  <MenuItem>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"WETH"}>WETH</MenuItem>
                  <MenuItem value={"DAI"}>DAI</MenuItem>
                  <MenuItem value={"MKR"}>MKR</MenuItem>
                </Select>
              </FormControl>
              <br/>
              <TextField 
                id="filled-basic" 
                label="Amount" 
                variant="filled" 
                type="number" 
                name="amount" 
                value={props.amount} 
                onChange={props.handleChange}
              />
              <br/>
              <TextField 
                id="filled-basic" 
                label="Denorm" 
                variant="filled" 
                type="number" 
                name="denorm" 
                value={props.denorm} 
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
