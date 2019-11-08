import React from 'react';
import styled from 'styled-components';

const HeadshotWrapper = styled.div`
    text-align: center;
    margin: 0 30px;
`

const Headshot = ({ imagePath, name, gitPath} ) => {
    return(
        <HeadshotWrapper>
            <a href={gitPath}>
                <img src={imagePath} alt={`Developer ${name}`} />
            </a>
            <p>{name}</p>
        </HeadshotWrapper>
    )
} 

export default Headshot;