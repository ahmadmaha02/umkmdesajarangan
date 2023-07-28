import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 70px;
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: X768px) {
    margin-top: 70px;
  }
`;

export const Section = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  height: 422px;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  gap: 152px;
  background: var(--foundation-blue-normal, #264D4B);

  h1 {
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  img {
    max-width: 330.656px;
    max-height: 305.923px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 0;
    padding: 15px;
    gap: 50px;

    h1 {
      font-size: 16px;
    }

    img {
      width: 150px;
      height: 180px;
    }
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  max-width: 1120px;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  box-shadow: 5px 5px 4px 4px #888888;
  padding: 20px;
  border-radius: 10px;
  margin: auto;
  margin-top: 50px;
  background-color: #ffff;
  padding: 45px;

  img {
    width: 350px;
    height: 350px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      color: #1C1C1C;
      font-family: Poppins;
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    h5 {
      color: #1C1C1C;
      margin-top: 20px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 36px;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    img {
      width: 250px;
      height: 250px;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const SliderContainer =styled.div`
  margin-top: 50px;
  width: 100%;
`;