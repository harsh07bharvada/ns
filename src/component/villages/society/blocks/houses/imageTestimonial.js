import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardContent,} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar';

const styleSheet = createStyleSheet('ImageTestimonial', {
  card: {
    
      boxShadow:'0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
    
     bigAvatar: {
    width: 80,
    height: 80,
  },
  
});



function ImageTestimonial(props) {
  const classes = props.classes;
  
    
  return (
    <div>
      <Card className={classes.card}>
      <CardHeader
            avatar={
             <Avatar src={props.imgadd} className={classes.bigAvatar}/>
            }
            title={props.title}
            subheader={props.subheader}
          />
        <CardContent>
          
          <Typography component="p">
            {props.story}
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}

ImageTestimonial.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ImageTestimonial);