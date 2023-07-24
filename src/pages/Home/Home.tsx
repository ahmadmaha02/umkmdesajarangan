import React from "react";
import Navbar from "../../components/navbar/navbar";
import ComingSoonPage from "../../components/Countdown/Countdown";
import { Section, Container, BannerContainer, ButtonContainer, SliderContainer } from "./HomeStyled";
import sample from "../../assets/image/splash.png"
import Button from "../../components/Button/Button";
import Slider from "../../components/Slider/Slider";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import Video from "../../assets/video/Background.mp4"
import OverlayText from "../../components/VideoBackground/OverlayText";


const Home=()=>{
  const videoSource =Video;
    const data = [
        {
          image: sample,
          title: 'Title 1',
          description: 'Description 1',
        },
        {
          image: sample,
          title: 'Title 2',
          description: 'Description 2',
        },
        {
          image: sample,
          title: 'Title 3',
          description: 'Description 3',
        },
        {
            image: sample,
            title: 'Title 3',
            description: 'Description 3',
          },
          {
            image: sample,
            title: 'Title 3',
            description: 'Description 3',
          },
          {
            image: sample,
            title: 'Title 3',
            description: 'Description 3',
          },
          {
            image: sample,
            title: 'Title 3',
            description: 'Description 3',
          },
          {
            image: sample,
            title: 'Title 3',
            description: 'Description 3',
          },
      ];
    return(
        <>
            <Navbar/>
            <Container>
            <VideoBackground videoSource={videoSource}>
            <OverlayText>
            Selamat datang di UMKM Jarangan Destinasi Terbaik untuk Menemukan Produk UMKM Berkualitas!  
          </OverlayText>  
            </VideoBackground>
                <Section>
                
                    <h1>
                    Selamat datang di  UMKM  Jarangan Destinasi Terbaik untuk Menemukan Produk UMKM Berkualitas!
                    </h1>
                    <img src={sample} alt="img" />
                </Section>
                <SliderContainer>
                <Slider data={data} />
                </SliderContainer>
                <BannerContainer>
                    <img src={sample} alt="img" />
                    <div>
                        <h1>UMKM JARANGAN</h1>
                        <h5>Temukan keanekaragaman UMKM yang menakjubkan di Desa Jarangan, Kota Pasuruan. Kami bangga memperkenalkan berbagai produk UMKM berkualitas tinggi yang berasal dari komunitas lokal</h5>
                        <ButtonContainer>
                        <Button backgroundColor="#f1f1f1;" textColor="#1c1c1c">Selengkapnya</Button>
                        </ButtonContainer>
                       
                    </div>

                </BannerContainer>

            </Container>
            
        </>
    );

}

export default Home;