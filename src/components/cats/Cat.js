import React, { useState } from 'react';
import styled from 'styled-components';

const CatContainer = styled.div`
    ${'' /* max-width: 550px; */}
    display: flex;
    align-items: center;
    margin: 10px auto;
    justify-content: center;
`

const InfoContainer = styled.div`
    border: 5px solid black;
    min-width: 400px;
    max-height: 300px;
    padding: 0 15px 0 0;
    margin: 0 20px 0 0;
`

const ProfileImg = styled.img`
    float: left;
    margin: 5px 50px 5px 5px;
`

const ProfileInfo = styled.ul`
    max-height: 100px;
    max-width: 300px;
    margin: 1rem auto;
`


const Cat = ({ imagePath, name, weight, age}) => {
    const [isFed, setIsFed] = useState("Unfed");

    return(
        <CatContainer>
            <InfoContainer>
                <ProfileImg src={imagePath} alt="your pretty cat" width="100px" />
                <ProfileInfo>
                    <li>{`Name: ${name}`}</li>
                    <li>{`Age: ${age}`}</li>
                    <li>{`Weight: ${weight}`}</li>
                </ProfileInfo>
                <p>{`Hunger status: ${isFed}`}</p>
            </InfoContainer>
            <button type="button" onClick={() => setIsFed("Fed")}>
                Feed Cat
            </button>
        </CatContainer>
    )
}

export default Cat;