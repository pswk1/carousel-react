import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	align-items: center;
	display: flex;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px 10px;
`;

interface IProps {
	header: string;
	text: string;
	color: string;
}

const Slide = ({ header, text, color }: IProps) => {
	const imgURL = `https://via.placeholder.com/400/${color}/ffffff`;
	return (
		<Container>
			<TextWrapper>
				<h1>{header}</h1>
				<p>{text}</p>
			</TextWrapper>
			<img src={imgURL} alt='carousel slide' />
		</Container>
	);
};

export default Slide;
