import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Paper from 'material-ui/Paper';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    marginTop: 0,
    width: '100%',
    
  },
  flex: {
    flex: 1,
  },
    
});

const style = {
  background:'white',
  border: 0,
  color: 'black',
  boxShadow: 'none',
};




function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={style}>
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex} >
            Nanha Sitara
          </Typography>
           <Button >Register</Button>
          <Button >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);