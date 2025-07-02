import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config.jsx';
import { signOut } from 'firebase/auth';


const TopNavbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1db954;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 999;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;

`;
const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;
const LogoOne = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const NavbarButton = styled.button`
  background: #fff;
  color: #000;
  border: none;
  border-radius: 20px;
  padding: 0.4rem 1rem;
  font-weight: bold;
`;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    border: none;
    height: 100%;
    background-color: #242424;
  }
`;


const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #121212;
  color: white;
  font-family: 'Helvetica Neue', sans-serif;
  padding-top: 60px;
`;


const Sidebar = styled.div`
  width: 250px;
  background-color: #000;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const Main = styled.main`
  flex: 1;
  padding: 2rem;
`;


const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;


const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.2rem;
`;


const AlbumCard = styled.div`
  background-color: #181818;
  border-radius: 8px;
  padding: 1rem;
  transition: background-color 0.3s;
  text-align: center;
`;

const AlbumImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 0.8rem;
`;


const AlbumTitle = styled.p`
  font-weight: bold;
  font-size: 0.95rem;
`;


const AlbumArtist = styled.p`
  font-size: 0.8rem;
  color: #b3b3b3;
`;


const LogoutButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-top: auto;
`;

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => navigate('/'));
  };


 const albums = [
  {
    title: 'Verano Rosa',
    artist: 'Karol G, Feid',
    image: 'https://res.cloudinary.com/dpl13am8i/image/upload/v1750708844/images_yk6zdj.png',
  },
  {
    title: 'Frecuencia',
    artist: 'Los Dareyes De La Sierra',
    image: 'https://res.cloudinary.com/dpl13am8i/image/upload/v1750708844/images_yk6zdj.png',
  },
  {
    title: 'Little Demon',
    artist: 'Anuel AA',
    image: 'https://res.cloudinary.com/dpl13am8i/image/upload/v1750708844/images_yk6zdj.png',
  },
  {
    title: 'YO y TÚ',
    artist: 'Ovy, Quevedo, Beéle',
    image: 'https://res.cloudinary.com/dpl13am8i/image/upload/v1750708844/images_yk6zdj.png',
  },
  {
    title: 'Adiós',
    artist: 'Gustavo Cerati',
    image: 'https://res.cloudinary.com/dpl13am8i/image/upload/v1750708844/images_yk6zdj.png',
  },
];


  return (
    <>
    <GlobalStyle/>
  <TopNavbar>
  <LogoGroup>
    <Logo src="https://res.cloudinary.com/dpl13am8i/image/upload/v1750708844/images_yk6zdj.png" />
    <LogoOne>Kodigo Music</LogoOne>
  </LogoGroup>
  <NavbarButton onClick={logout}>Cerrar sesión</NavbarButton>
</TopNavbar>
    <Layout>
      <Sidebar>
        <div>
          <h2 style={{ marginBottom: '2rem' }}>Tu biblioteca</h2>
          <p style={{ marginBottom: '1rem' }}>Crea tu primera lista</p>
          <button style={{ padding: '0.5rem 1rem', borderRadius: '20px' }}>
            Crear lista
          </button>
        </div>
        <LogoutButton onClick={logout}>Cerrar sesión</LogoutButton>
      </Sidebar>

      <Main>
        <SectionTitle>Canciones en tendencia</SectionTitle>
        <CardGrid>
          {albums.map((album, index) => (
            <AlbumCard key={index}>
              <AlbumImage src={album.image} alt={album.title} />
              <AlbumTitle>{album.title}</AlbumTitle>
              <AlbumArtist>{album.artist}</AlbumArtist>
            </AlbumCard>
          ))}
        </CardGrid>
        <SectionTitle>Álbumes populares</SectionTitle>
        <CardGrid>
          {albums.map((album, index) => (
            <AlbumCard key={index}>
              <AlbumImage src={album.image} alt={album.title} />
              <AlbumTitle>{album.title}</AlbumTitle>
              <AlbumArtist>{album.artist}</AlbumArtist>
            </AlbumCard>
          ))}
        </CardGrid>
      </Main>
    </Layout>
    </>
  );
}
