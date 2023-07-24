import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width:100%;
  background-color: #1BC46E;
  color: #fff;
  font-family: Arial, sans-serif;
  padding:50px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const CountdownItem = styled.div`
  margin-right: 10px;
  background-color: #ebe8e890;
  padding: 20px;
  border-radius: 5px;
`;

const CountdownValue = styled.span`
  font-size: 48px;
`;

const CountdownLabel = styled.span``;

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const SubscribeTitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
`;

const SubscribeInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  width: 300px;
  max-width: 100%;
  margin-right: 10px;
`;

const SubscribeButton = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ComingSoonPage: React.FC = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countDownDate = new Date("July 31,2023 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <Title>Coming Soon</Title>
      <Description>Our website is under construction</Description>
      <CountdownContainer>
        <CountdownItem>
          <CountdownValue>{countdown.days}</CountdownValue>
          <CountdownLabel>Days</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{countdown.hours}</CountdownValue>
          <CountdownLabel>Hours</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{countdown.minutes}</CountdownValue>
          <CountdownLabel>Minutes</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{countdown.seconds}</CountdownValue>
          <CountdownLabel>Seconds</CountdownLabel>
        </CountdownItem>
      </CountdownContainer>
    
    </Container>
  );
};

export default ComingSoonPage;
