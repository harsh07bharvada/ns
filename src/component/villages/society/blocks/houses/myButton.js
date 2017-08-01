import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('MyButton', {
  button: {
    background: '#1483ff',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    width:200,
    padding: '0 30px',
    boxShadow:'0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
});


function MyButton(props) {
  const classes = props.classes;
  
  
    
    return (
    <Button className={props.classes.button}>
      {props.name}
    </Button>
  );
}

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(MyButton);