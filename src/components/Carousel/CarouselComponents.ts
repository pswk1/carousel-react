import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
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
