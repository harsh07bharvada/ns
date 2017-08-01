import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import CallToAction from './callToAction.js';
import MyCarousel from './houses/myCarousel.js';


const styleSheet = createStyleSheet('HeadMain', theme => ({
  root: {
     background:'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
      
  },
    firstChild:{
      paddingTop:60,
      paddingBottom:60,
        paddingLeft:60,
        paddingRight:30,
    },
    secondChild:{
      paddingTop:60,
      paddingBottom:60,
    paddingRight:30    
    },
  
}));



function HeadMain(props) {
  const classes = props.classes;
  
  
    
    return (
    <div className={classes.root}>
      <Grid container gutter={24}>
        
      
        <Grid item xs={12} sm={6} lg={6} align="left" >
           
            <div className={classes.firstChild}>
                <CallToAction/>
            </div>
        </Grid>
        
        
        <Grid item xs={12} sm={6} lg={6}>
          <div className={classes.secondChild}>
            <MyCarousel/>
        </div>
        </Grid>
       
      </Grid>
    </div>
  );
}

HeadMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(HeadMain);