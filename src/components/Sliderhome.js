import React from 'react';
import styled from 'styled-components';
import BgImg from './Img.jpg';

const Section = styled.section`
  background-image: url(${BgImg});
  margin-top:-50px;
  height: 785px;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  
  @media (max-height: 500px) {
    
      height: calc(100vh - 75px);
       
  }
  @media (max-width: 640px) {
    
      height: calc(80vh - 75px);    
  }
  
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
  
`;

const Left = styled.div`
  padding-left: 12vh;
  padding-top: 143px;
  @media (max-height: 400px) {
     
    padding-left: 10px;
    padding-top: 73px;
      
}
`;

const Title = styled.p`
  font-size: 65px;
  color: #fffff;
  font-weight: 700;
  @media (max-height: 600px) {
     
      font-size: 32px;
        
  }
  @media (max-width: 640px) {
    
      font-size: 32px;
    
`;

const Desc = styled.p`
  width: 47vw;
  font-size: 22px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 8px;
  @media (max-width: 768px) {
     
    font-size: 22px;
   
    width: 200px;
}
`;



const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Cari Cari
          </Title>
          <Desc>
            From their sofa to yours. Get closer to your favrorite artists, and never miss out.
          </Desc>
          
        </Left>
      </Content>
    </Section>
  );
};
 export default Hero;