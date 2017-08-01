import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Title from './houses/title.js';
import MyButton from './houses/myButton.js';
import Subtitle from './houses/subtitle.js';

const styleSheet = createStyleSheet('CallToAction', theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  display: 'inline-block',
    
  },
    thirdChild:{
      textAlign:'left',  
    },
    
}));



function CallToAction(props) {
  const classes = props.classes;
  
    return (
    <div className={classes.root}>
      <Grid container >
        
        <Grid item xs={12} sm={12} lg={12} >
            
                <Title hText="Our Kids deserve a better future than ours." type="display2" alignment="left"/>
    
        </Grid>
        
        
        <Grid item xs={12} sm={12} lg={12} >
            
                <Subtitle subText="Engage with kids and make a difference to their lives.Start a Book Reading Club in your area. Spread a smile by donating books money and your precious time.Be the change leader and take responsibilities for these lovely kids." type="subheading" alignment="left" />
            
        </Grid>
        
        <Grid item xs={12} sm={12} lg={12} className={classes.thirdChild} >
        
            <MyButton name="Join Now" />
        
        </Grid>
        
        
     </Grid>
    </div>
  );
}

CallToAction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CallToAction);