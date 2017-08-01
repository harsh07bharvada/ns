'use strict';

var React = require('react');

var Carousel = require('nuka-carousel');

const MyCarousel = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel >
        <img src="https://cdn.pixabay.com/photo/2014/04/23/14/47/school-330580_960_720.jpg"/>
        <img src="https://cdn.pixabay.com/photo/2017/06/16/10/29/kids-2408614_960_720.jpg"/>
        
        
       
      </Carousel>
    )
  }
});

module.exports = MyCarousel;