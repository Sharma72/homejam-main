import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';
import Slider from '../components/Sliderhome';

import Carouselprojects from '../components/Carouselprojects';
import Carouselteam from '../components/Carouselteam';

import ReviewCard from '../components/ReviewCard'
import { Efect, Efect1, Efect2  } from "../styles/effect.styles";

const Home = ({ history }) => {


  return (
    <div>

      <Efect/>
      <Efect1/>
      <Efect2/>

      <Reveal effect="fadeIn">
       <Slider/>
      </Reveal>
      
      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects/>
            </div>
          </div>
        </section>
      </Reveal>
      
      
      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Upcoming Shows</div>
            </div>
            <div className='col-12'>
              <Carouselteam/>
            </div>
          </div>
        </section>
      </Reveal>
    

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading '>Reviews</div>
            </div>
            <div className='col-12'>
              <ReviewCard/>
            </div>
          </div>
        </section>
      </Reveal>
   
     

  
    </div>
  );
};

export default withRouter(Home);
