import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('Subtitle', {
  root: {
    
   
      
  },
    sub:{
      color:'#556B2F',  
    },
});


function Subtitle(props) {
  const classes = props.classes;
  
  
    
    return (
   <div className={classes.root}>
      <Typography type={props.type} align={props.alignment} className={classes.sub} >
            {props.subText}
          </Typography>
    </div>
  );
}

Subtitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Subtitle);