import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styled from 'styled-components';
import { EffectCoverflow , Navigation} from 'swiper/modules';

SwiperCore.use([Navigation, EffectCoverflow]);

interface SliderProps {
  data: {
    image: string;
    title: string;
    description: string;
  }[];
}

const SliderContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 50px;
  color: #080808;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    font-size: 16px;
    margin-top: 5px;
  }
`;

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <SliderContainer>
      <Swiper
        effect="coverflow"
        centeredSlides
        slideToClickedSlide
        slidesPerView={3}
        spaceBetween={30}
        
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 90,
          modifier: 5,
          slideShadows: true,
        }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide>
              <img src={slide.image} alt="Slider Image" />
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
