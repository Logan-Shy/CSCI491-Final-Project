import React from 'react';
import styled from 'styled-components';
import Cat from './Cat';

const CatsPage = styled.div`
  font-family: 'Times New Roman', Times, serif;
  width: 100%;
`

const Header = styled.h1`
  text-align: center;
  margin: 8vh auto;
`

const Cats = () => {
  
  return (
    <CatsPage>
      <Header>My Cats</Header>
      <Cat name="Charlie" age="24" weight="37lbs." imagePath="assets/charlie.png" />
      <Cat name="Murphy" age="100" weight="CHONK" imagePath="assets/murphy.jpg" />
    </CatsPage>
  );
}

export default Cats;