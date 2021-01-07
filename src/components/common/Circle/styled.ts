import styled from "styled-components";

const Circle = styled.div<CircleProps>`
	position: absolute;
	width: ${(props) => props.$diameter}px;
	height: ${(props) => props.$diameter}px;
	top: ${(props) => props.$y}px;
	left: ${(props) => props.$x}px;
	background: ${(props) => (props.$isHighlighted ? "yellow" : "black")};
`;

export { Circle };
export interface CircleProps {
	$x: number;
	$y: number;
	$diameter: number;
	$isHighlighted: boolean;
}
