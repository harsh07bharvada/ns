import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styleSheet = createStyleSheet('SimpleMediaCard', {
  card: {
    maxWidth: 345,
      boxShadow:'0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
    imgDetails:{
        
        maxWidth:175,
        
    }
});

const style = {
  height: 225,
  width: 345,
  paddingTop:40,
  background:'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
  textAlign: 'center',
  display: 'inline-block',
    
};

function SimpleMediaCard(props) {
  const classes = props.classes;
  return (
    <div>
      <Card className={classes.card}>
      <Paper style={style} zDepth={3} >
        <CardMedia >
          <img className={classes.imgDetails} src={props.imgadd}  />
        </CardMedia>
      </Paper>
        <CardContent>
          <Typography type="headline" align="center" component="h2">
            {props.cardTitle}
          </Typography>
          <Typography component="p">
            {props.cardText}
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleMediaCard);