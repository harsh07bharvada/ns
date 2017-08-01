import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Grid  from 'material-ui/Grid';
import ButtonAppBar from './blocks/navigation.js';
import HeadMain from './blocks/headMain.js';

const styleSheet = createStyleSheet('Feature', theme => ({
  root: {
     
  },
   
  
}));



function Header(props) {
  const classes = props.classes;
  
  
    
    return (
    <div className={classes.root}>
      <Grid container>
        
      
        <Grid item xs={12} sm={12} lg={12}>
            <ButtonAppBar/>
        </Grid>
      
        <Grid item xs={12} sm={12} lg={12}>
          
            <HeadMain/>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Header);