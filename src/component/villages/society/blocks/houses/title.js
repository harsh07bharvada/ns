import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('Title', {
  root: {
    color:'gray',
      
      paddingTop:15,
      marginBottom:0,
      
  },
});


function Title(props) {
  const classes = props.classes;
  
  
    
    return (
    <div className={classes.root}>
      <Typography type={props.type} align={props.alignment} >
            {props.hText}
          </Typography>
    </div>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Title);