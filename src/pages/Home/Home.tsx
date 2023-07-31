import React from "react";
import Navbar from "../../components/navbar/navbar";
import ComingSoonPage from "../../components/Countdown/Countdown";
import { Section, Container, BannerContainer, ButtonContainer, SliderContainer } from "./HomeStyled";
import sample from "../../assets/image/UMKM.png"
import content from "../../assets/image/content.jpeg"
import Button from "../../components/Button/Button";
import Slider from "../../components/Slider/Slider";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import OverlayText from "../../components/VideoBackground/OverlayText";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { data } from "./data";


const Home=()=>{
  const videoSource ='https://drive.google.com/uc?export=download&id=1bv-QfTsPhh9MgY3sXayiXUSc73eNdUIz';
   
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
                    Desa Jarangan adalah sebuah permata tersembunyi di Kecamatan Rejoso, Kabupaten Pasuruan, Jawa Timur. Terletak di dataran rendah yang subur, desa ini menjadi tempat berkembangnya beragam usaha mikro, kecil, dan menengah (UMKM) yang kreatif dan inovatif. Keindahan alam dan kearifan lokal yang dimiliki oleh Desa Jarangan telah menginspirasi lahirnya berbagai jenis UMKM yang berhasil menyebar ke berbagai penjuru, mampu menciptakan citra khas yang memikat hati.
                    </h1>
                    <img src={content} alt="img" />
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
                          <Link to='/product'>
                        <Button backgroundColor="#f1f1f1;" textColor="#1c1c1c">Selengkapnya</Button>
                        </Link>
                        </ButtonContainer>
                       
                    </div>

                </BannerContainer>

            </Container>
            <Footer/>
        </>
    );

}

export default Home;