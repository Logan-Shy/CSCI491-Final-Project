import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  text-align: center;
`

const HomePage = styled.div`
  font-family: 'Times New Roman', Times, serif;
	font-size: 1.15rem;
	width: 100%;
`

const Home = () => {

  return (
    <HomePage>
      <Header>Home Page</Header>
    </HomePage>
  );
}

export default Home;