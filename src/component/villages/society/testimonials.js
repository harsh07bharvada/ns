import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import SectionTitle from './blocks/sectionTitle.js';
import Grid from 'material-ui/Grid';
import ImageTestimonial from './blocks/houses/imageTestimonial.js';
import man1 from '../../../images/man1.png';
import man2 from '../../../images/man2.jpg';
import man3 from '../../../images/man3.jpg';
import man4 from '../../../images/man4.png';

const styleSheet = createStyleSheet('Testimonial', theme => ({
  root: {
     background:'linear-gradient(to bottom, #fff1eb 0%, #ace0f9 100%)',
      paddingTop:50,
      paddingBottom:50,
      paddingLeft:60,
      paddingRight:60,
      
  },
    firstChild:{
        textAlign: 'center',
        
    },
   
  
}));



function Testimonial(props) {
  const classes = props.classes;
  
  
    
    return (
    <div className={classes.root}>
      <Grid container gutter={24}>
        
      
        <Grid item xs={12} sm={12} lg={12}>
          <div className={classes.firstChild}>
            <SectionTitle titleText="Our Change Leaders" />
        </div>
        </Grid>    
        
        <Grid item xs={12} sm={6} lg={6}  >
            <ImageTestimonial imgadd={man1} title="Ram Sharma" subheader="New Delhi" story="Ram is a resident of Connaught place in New Delhi. He is our top change leader . He has taken acre of 5 kids in his area hand has started a book keeping club. " />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}  >
            <ImageTestimonial imgadd={man2} title="Sachin Patel" subheader="Surat" story="Sachin is a resident of Surat. He is our top change leader . He has taken acre of 2 kids in his area hand has started a book keeping club. " />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}  >
            <ImageTestimonial imgadd={man3} title="Anik Sen" subheader="Kolkata" story="Anik is a resident of Kolkata. He is our top change leader . He has taken acre of 5 kids in his area hand has started a book keeping club. " />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}  >
            <ImageTestimonial imgadd={man4} title="Swarup Chandran" subheader="Bangalore" story="Swarup is a resident of Bangalore. He is our top change leader . He has taken acre of 5 kids in his area hand has started a book keeping club. " />
        </Grid>
       
      </Grid>
    </div>
  );
}

Testimonial.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Testimonial);