import { useState } from 'react';
import { Wrapper, CarouselSlide, CarouselSlides } from './CarouselComponents';

interface IProps {
	children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const activeSlide = children.map((slide, index) => (
		<CarouselSlide active={currentSlide === index} key={index}>
			{slide}
		</CarouselSlide>
	));

	return (
		<>
			<Wrapper>
				<CarouselSlides currentSlide={currentSlide}>
					{activeSlide}
				</CarouselSlides>
			</Wrapper>

			<button
				onClick={() => {
					setCurrentSlide(
						(currentSlide - 1 + activeSlide.length) % activeSlide.length
					);
				}}
			>
				Left
			</button>
			<button
				onClick={() => {
					setCurrentSlide((currentSlide + 1) % activeSlide.length);
				}}
			>
				Right
			</button>
		</>
	);
};

export default Carousel;
