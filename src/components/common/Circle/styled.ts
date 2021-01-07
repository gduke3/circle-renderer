import styled from "styled-components";

const Circle = styled.div<CircleProps>`
	position: absolute;
	border-radius: 50%;
	width: ${(props) => props.$diameter}px;
	height: ${(props) => props.$diameter}px;
	top: ${(props) => props.$y}px;
	left: ${(props) => props.$x}px;
	background: ${(props) => (props.$isHighlighted ? "green" : "black")};
`;

export { Circle };
export interface CircleProps {
	$x: number;
	$y: number;
	$diameter: number;
	$isHighlighted: boolean;
}
