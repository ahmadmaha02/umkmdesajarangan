import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/Footer';

const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
`;
const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ContactUs: React.FC = () => {
  useEffect(() => {
   
    const map = L.map('map').setView([-7.678701, 112.762129], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

  
    const marker = L.marker([-7.678701, 112.762129]).addTo(map);
    marker.bindPopup('Desa Jarangnan, Kecamatan Resojo, Pasuruan');
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Formulir telah dikirim!');
  };

  return (
    <>
    <Navbar/>
    <Container>
      <Title>Hubungi Kami</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nama" required />
        <Input type="email" placeholder="Email" required />
        <TextArea placeholder="Pesan" required />
        <Button type="submit">Kirim Pesan</Button>
      </Form>
      <MapWrapper>
        <MapContainer id="map" style={{ width: '100%', height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          <Marker position={[-7.678701, 112.762129]}>
            <Popup>Desa Jarangnan, Kecamatan Resojo, Pasuruan</Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>
    </Container>
    <Footer/>
    </>
  );
};

export default ContactUs;
