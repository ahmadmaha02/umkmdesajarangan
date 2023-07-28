// Import dependencies
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled, { keyframes } from 'styled-components';
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/Footer";

const Container = styled.div`
margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  h1{
    color: #000000;
    font-size: 32px;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  color: #000000;
`;

const TeamCard = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const TeamName = styled.h3`
  margin: 10px 0 5px;
  color: #000000;
`;

const TeamRole = styled.p`
  margin: 5px 0;
  color: #000000;
`;

const TeamPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const GoalsContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  h1{
    font-size: 32px;
    color:#000;
  }
  p{
    color: #000;
    font-size: 18px;
  }
`;

// Data for the team members and their roles
const teamMembers = [
  { name: 'John Doe', role: 'Kordes', photo: '/john-doe.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  { name: 'Jane Smith', role: 'Wakordes', photo: '/jane-smith.jpg' },
  // Add more team members here
];

// Goals of the team
const teamGoals = 'kegiatan Pengabdian Kepada masyarakat Perguruan Tinggi secara umum sebagaimana dinyatakan dalam UU Nomor 12 tahun 2012, yaitu merupakan kegiatan sivitas akademika dalam mengamalkan dan membudayakan ilmu, pengetahuan, teknologi untuk memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa.';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Navbar/>
    <Container>
      <h1 data-aos="fade-right">Meet Our Team</h1>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <TeamCard data-aos="flip-up" key={index}>
            <TeamPhoto src={member.photo} alt={member.name} />
            <TeamName>{member.name}</TeamName>
            <TeamRole>{member.role}</TeamRole>
          </TeamCard>
        ))}
      </TeamContainer>
      <GoalsContainer>
        <h1 >Our Goals</h1>
        <p>{teamGoals}</p>
      </GoalsContainer>
    </Container>
    <Footer/>
    </>
  );
};

export default About;
