import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Project.css'

class CustomSlide extends Component {

  render() {
    const { index, ...props } = this.props;
      return (
        <div {...props}></div>
      );
  }
}

export default class Responsive extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className='slick slickproject'>
        <Slider {...settings}>

          <CustomSlide className='itm' index={1}>
          <div className="circle_box">
	               <div>
		               <svg>
		           	<circle cx="100" cy="100" r="98"/>
		            <circle cx="100" cy="100" r="98"/>
	            	</svg>
	         	<span> <i className="fa fa-heart-o"></i> <br/>456</span>
             	</div>	
	         
          </div>
          </CustomSlide>

          <CustomSlide className='itm' index={2}>
          <div className="circle_box">
	               <div>
		               <svg>
		           	<circle cx="100" cy="100" r="98"/>
		            <circle cx="100" cy="100" r="98"/>
	            	</svg>
	         	<span> <i className="fa fa-calendar-times-o"></i> <br/>745</span>
             	</div>	
	         
          </div>
          </CustomSlide>

          <CustomSlide className='itm' index={3}>
          <div className="circle_box">
	               <div>
		               <svg>
		           	<circle cx="100" cy="100" r="98"/>
		            <circle cx="100" cy="100" r="98"/>
	            	</svg>
	         	<span> <i className="fa fa-users"></i> <br/>+10K</span>
             	</div>	
	         
          </div>
          </CustomSlide>

          <CustomSlide className='itm' index={4}>
          <div className="circle_box">
	               <div>
		               <svg>
		           	<circle cx="100" cy="100" r="98"/>
		            <circle cx="100" cy="100" r="98"/>
	            	</svg>
	         	<span> <i className="fa fa-video-camera"></i> <br/>2+</span>
             	</div>	
	         
          </div>
          </CustomSlide>

        </Slider>
      </div>
    );
  }
}
