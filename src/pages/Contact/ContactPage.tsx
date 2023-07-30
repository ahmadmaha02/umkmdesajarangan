import React, { useState } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/navbar/navbar';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  color:black;
`;

const Label = styled.span`
  font-weight: bold;
`;

const ContactForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;



const FormInput = styled.input`
  padding: 8px;
  background-color: white;
  border: none;
  color:black;
`;

const FormTextarea = styled.textarea`
  padding: 8px;
  background-color: white;
  border: none;
  resize: none;
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
const FormSubmitButton = styled.button`
  padding: 8px;
  background-color: #1bc46e;
  color: white;
  border: none;
  cursor: pointer;

`;
const Connect =styled.div`
 color: black;
    display:flex;
    margin-top: 70px;
    justify-content: center;
    
    h1{
      font-size: 32px;
      font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
`;
const MapWrapper = styled(MapContainer)`
  margin-top: 40px;
  height: 400px;
  width: 100%;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    
    try {
      const response = await fetch('https://formspree.io/ahmadmaha41002@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('successfully!');
        
      } else {
        alert('under construction.');
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
      alert('An error occurred while sending the inquiry. Please try again later.');
    }
  };

  const position = L.latLng(-7.666204, 112.938736); 

  return (
    <>
    <Navbar/>
    <Container>
      <Title>Kontak Kami</Title>
      <ContactInfo>
        <Label>Alamat:</Label>
        <span>Desa Jarangan,Rejoso,Pasuruan</span>

        <Label>Email:</Label>
        <span>mmdub711@gmail.com</span>

        <Label>Telepon:</Label>
        <span>-</span>
      </ContactInfo>
      <MapWrapper center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Lokasi Kami</Popup>
        </Marker>
      </MapWrapper>
      <Connect>
        <h1>Let's Connect</h1>
      </Connect>
      <ContactForm onSubmit={handleSubmit}>
      <FormInput type="text" id="name" required placeholder="Nama Anda" />
        <FormInput type="email" id="email" required placeholder="Email Anda" />
        <FormTextarea id="message" rows={4} required placeholder="Pesan Anda" />
        <ButtonContainer>
        <FormSubmitButton type="submit">Kirim Pertanyaan</FormSubmitButton>
        </ButtonContainer>
      </ContactForm>
    </Container>
    <Footer/>
    </>
  );
};

export default ContactPage;
