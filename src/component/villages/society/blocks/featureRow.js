import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import SimpleMediaCard from './houses/imageCard.js';
import meeting from '../../../../images/meeting.svg';
import book from '../../../../images/book.svg';
import money from '../../../../images/money.svg';
const styleSheet = createStyleSheet('FeatureRow', theme => ({
  root: {
    flexGrow: 1,
     paddingTop:15,
      paddingBottom:30,
    backgroundColor:'linear-gradient(to top, #dfe9f3 0%, white 100%)', 
  },
  
}));



function FeatureRow(props) {
  const classes = props.classes;
  
  
    
    return (
    <div className={classes.root}>
      <Grid container gutter={24}>
        
      
        <Grid item xs={12} sm={4} lg={4}>
          <SimpleMediaCard   cardText="Start a Book keeping club today by registering at our website." cardTitle=" Donate Time"  imgadd={meeting} />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <SimpleMediaCard  cardTitle=" Donate Books" cardText="Let our kids get the same privileges as us by reading the same or better books." imgadd={book} />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <SimpleMediaCard cardText="Donate money to fund for our talented kids so that they can have a bright future." cardTitle="Donate Money" imgadd={money} />
          
        </Grid>
      </Grid>
    </div>
  );
}

FeatureRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(FeatureRow);