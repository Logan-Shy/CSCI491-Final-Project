import React from 'react';
import styled from 'styled-components';
import { Headshot } from '../../components';

const Section = styled.p`
	text-indent: 40px;
	text-align: left;
    display: block;
    width: 35%;
    margin: 10px auto;
`
const Header = styled.h2`
	text-align: center;
	margin: 30px 0 10px 0;
`

const HeadshotContainer = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	padding: 0;
`;

const AboutPage = styled.div`
	font-family: 'Times New Roman', Times, serif;
	font-size: 1.15rem;
	width: 100%;
`

const About = () => {
	return (
		<AboutPage>
			<div className="section">
				<Header>Website Goal</Header>
				<Section>This website's goal is to be able to, with the
				click of a button, feed ones cat. Extended functionality
				includes the ability to create a feeding schedule, which
				will be adhered to automatically.
				</Section>
			</div>

			<div className="section">
				<Header>About</Header>
				<Section>
					The application frontend itself was predominantly coded in react, 
					with JSX and ES6 layered on top for a clean and readable codebase.
					Several packages are installed for a cleaner development process,
					and the website is 100% functional, so there aren't any classes or 
					uses of the word "this". No PHP is used throughout, with javascript
					being the sole scripting language of the stack.
				</Section>
				<Section>
					(Here you can talk a bit about the backend)
				</Section>
			</div>

			<div className="section">
				<Header>Team</Header>
				<HeadshotContainer>
					<Headshot imagePath="assets/logan.png" name="Logan Shy" gitPath="https://github.com/logan-shy" />
					<Headshot imagePath="assets/jesse.png" name="Jesse Arstein" gitPath="https://github.com/jessejohn01" />
				</HeadshotContainer>
			</div>
		</AboutPage>
	);
}

export default About;