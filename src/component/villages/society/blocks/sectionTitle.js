import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Title from './houses/title.js';
import Divider from 'material-ui/Divider';

const styleSheet = createStyleSheet('SectionTitle', theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  display: 'inline-block',
    
  },
    
}));



function SectionTitle(props) {
  const classes = props.classes;
  
    return (
    <div className={classes.root}>
      <Grid container >
        
        <Grid item xs={12} sm={12} lg={12} >
            
                <Title hText={props.titleText} type="headline" alignment="center"/>
    
        </Grid>
        
        <Grid item xs={12} sm={12} lg={12} >
            
                <Divider light />
            
        </Grid>
        
        
     </Grid>
    </div>
  );
}

SectionTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SectionTitle);