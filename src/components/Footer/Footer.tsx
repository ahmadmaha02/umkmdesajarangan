import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Line,
  LinkWrap,
  LogoWrap,
  Section1,
  Section2,
  Section3,

  SocialMediaWrap,
  TextWrap,
} from "./styled";
import { section2, section3,   social } from "./fakeData";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <Container>
        <Section1>
          <LogoWrap>
            <img src="./assets/logo.svg" alt="" />
          </LogoWrap>
          <TextWrap>
          UMKM Jarangan Destinasi Terbaik untuk Menemukan Produk UMKM Berkualitas
          </TextWrap>
          <SocialMediaWrap>
            <div className="text">Tetap Terhubung Dengan Kami</div>
            <div className="social">
              {social?.map((data: any, idx: number) => (
                <Link to={data.url} target="_blank" key={idx}>
                  <img src={data.icon} alt={data.name} />
                </Link>
              ))}
            </div>
          </SocialMediaWrap>
        </Section1>
        <Line />
        <Section2>
          <div className="title">Lebih dekat</div>
          <div className="link">
            {section2?.map((data) => (
              <LinkWrap to={data.url} key={data.id}>
                {data.text}
              </LinkWrap>
            ))}
          </div>
        </Section2>
        <Line />
        <Section3>
          <div className="title">Layanan</div>
          <div className="link">
            {section3?.map((data) => (
              <LinkWrap to={data.url} key={data.id}>
                {data.text}
              </LinkWrap>
            ))}
          </div>
        </Section3>
        <Line />
       
       
      </Container>
      <Copyright />
    </>
  );
};

export default Footer;
