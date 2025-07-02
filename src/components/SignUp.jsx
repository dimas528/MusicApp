import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config.jsx';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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

const ContainerM = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212;
`;

const Container = styled.section`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Logo = styled.img`
  border-radius: 12px;
  width: 150px;
  margin: 1.5rem auto;
  display: block;
`;

const GoogleButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s;
  margin: 0 auto;
`;

export default function SignUp() {
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      alert('Error al iniciar con Google: ' + error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <ContainerM>
        <Container>
          <Title>Inicia sesión en Kodigo Music</Title>

          
          <Logo
            src="https://res.cloudinary.com/dpl13am8i/image/upload/v1750708844/images_yk6zdj.png"
            alt="Logo"
          />

          
          <GoogleButton onClick={handleGoogleSignup}>
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
            />
            Continuar Con Google
          </GoogleButton>
        </Container>
      </ContainerM>
    </>
  );
}