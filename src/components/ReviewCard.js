import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      dots: false,
      infinite: false,
      speed: 500,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
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
      <div className="slick">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
          
    <div className="box">
    <div className="content">
    <div className="image">
          <img src="./img/feature/img.png" alt=""/>
        </div>
        <div className="info">
          <div className="name">Hellen Jummy</div>
          <div className="job">Palo Alto, CA</div>
        
        </div>
       
      </div>
      <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
     
    </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
          <div className="box">
    <div className="content">
    <div className="image">
          <img src="./img/feature/img(1).png" alt=""/>
        </div>
        <div className="info">
          <div className="name">Issac Smith</div>
          <div className="job">Palo Alto, CA</div>
        
        </div>
       
      </div>
      <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
     
    </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
          <div className="box">
    <div className="content">
    <div className="image">
          <img src="./img/feature/img(2).png" alt=""/>
        </div>
        <div className="info">
          <div className="name">Hellen Jummy</div>
          <div className="job">Palo Alto, CA</div>
        
        </div>
       
      </div>
      <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
     
    </div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
          <div className="box">
    <div className="content">
    <div className="image">
          <img src="./img/feature/img.png" alt=""/>
        </div>
        <div className="info">
          <div className="name">Alex Smith</div>
          <div className="job">Palo Alto, CA</div>
        
        </div>
       
      </div>
      <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
     
    </div>
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
