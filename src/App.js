
import logo from './logo.svg';
import './App.css';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './component/villages/society/header.js';
import Feature from './component/villages/society/feature.js';
import Testimonial from './component/villages/society/testimonials.js';

const styleSheet = createStyleSheet('App', theme => ({
 
  
}));
 
const App = () => (

  <MuiThemeProvider  >
    <div>
    
       
        <Header/>
  
        <Feature/>
    
     <Testimonial/>
    </div>
  </MuiThemeProvider>

);
export default withStyles(styleSheet)(App);