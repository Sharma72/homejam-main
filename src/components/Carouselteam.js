import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.css'
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
      <div className="slick slickteam">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
          <div className="card">
  <img src="./img/team/Img4.png" alt="" />
  <div className="cardbody">
  <span className="badge badge-warning">Folk</span>
  <h1 className="title">Benny Dayal</h1>
  </div>
  <div className="btnBody">
  <p>View more <i className="fa fa-long-arrow-right"></i>
</p>
  <div >
    <a href="/#"><i className="fa fa-ticket"></i></a> 
    </div>
  </div>
  

</div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
          <div className="card">
  <img src="./img/team/Img3.png" alt="" />
  <div className="cardbody">
  <span className="badge badge-warning">Bollywood</span>
  <h1 className="title">Vijay Yesudas</h1>
  </div>
  <div className="btnBody">
  <p>View more <i className="fa fa-long-arrow-right"></i>
</p>
  <div >
    <a href="/#"><i className="fa fa-ticket"></i></a> 
    </div>
  </div>
  

</div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
          <div className="card">
  <img src="./img/team/Img2.png" alt="" />
  <div className="cardbody">
  <span className="badge badge-warning">Folk</span>
  <h1 className="title">Andrea Jeremiah</h1>
  </div>
  <div className="btnBody">
  <p>View more <i className="fa fa-long-arrow-right"></i>
</p>
  <div >
    <a href="/#"><i className="fa fa-ticket"></i></a> 
    </div>
  </div>
  

</div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
          <div className="card">
  <img src="./img/team/Img.png" alt="" />
  <div className="cardbody">
  <span className="badge badge-warning">Folk</span>
  <h1 className="title">Shilpa Rao</h1>
  </div>
  <div className="btnBody">
  <p>View more <i className="fa fa-long-arrow-right"></i>
</p>
  <div >
    <a href="/#"><i className="fa fa-ticket"></i></a> 
    </div>
  </div>
  

</div>
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
