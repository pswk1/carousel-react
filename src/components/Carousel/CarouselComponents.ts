import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
    background: white;
`;

export interface ICarouselSlide {
	active?: boolean;
}

export const CarouselSlide = styled.div<ICarouselSlide>`
	flex: 0 0 auto;
	opacity: ${({ active }) => (active ? 1 : 0)};
	transition: all 0.5s ease;
	width: 100%;
`;

interface ICarouselProps {
	currentSlide: number;
}

export const CarouselSlides = styled.div<ICarouselProps>`
	display: flex;
	${(props) =>
		props.currentSlide &&
		`
			transform: translateX(-${props.currentSlide * 100}%);
		`};
	transition: all 0.5s ease;
`;

export const Button = styled.button`
	background-color: #ffffff;
	border: 1px solid #222222;
	border-radius: 8px;
	box-sizing: border-box;
	color: #222222;
	cursor: pointer;
	display: inline-block;
	font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
		'Helvetica Neue', sans-serif;
	font-size: 16px;
	font-weight: 600;
	line-height: 20px;
	margin: 0;
	outline: none;
	padding: 13px 23px;
	position: relative;
	text-align: center;
	text-decoration: none;
	touch-action: manipulation;
	transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
		transform 0.1s;
	user-select: none;
	-webkit-user-select: none;
	width: auto;
	&:focus-visible {
		box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
		transition: box-shadow 0.2s;
	}
	&:active {
		background-color: #f7f7f7;
		border-color: #000000;
		transform: scale(0.96);
	}
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
`