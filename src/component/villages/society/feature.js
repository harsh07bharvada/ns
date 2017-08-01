import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import  Paper  from 'material-ui/Paper';
import  Grid  from 'material-ui/Grid';
import FeatureRow from './blocks/featureRow.js';
import SectionTitle from './blocks/sectionTitle.js';
const styleSheet = createStyleSheet('Feature', theme => ({
  root: {
    flexGrow: 1,
    paddingLeft:60,
      paddingRight:60,
      paddingTop:30,
      paddingBottom:50,
    backgroundColor:'linear-gradient(to top, #dfe9f3 0%, white 100%)',  
  },
    firstChild:{
        textAlign: 'center',
        
        
    },
  
}));



function Feature(props) {
  const classes = props.classes;
  
  
    
    return (
    <div className={classes.root}>
      <Grid container gutter={8}>
        
      
        <Grid item xs={12} sm={12} lg={12}>
          <div className={classes.firstChild}>
            <SectionTitle titleText="Unique Features" />
        </div>
        </Grid>
      
        <Grid item xs={12} sm={12} lg={12}>
          <FeatureRow/>
          
        </Grid>
      </Grid>
    </div>
  );
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Feature);