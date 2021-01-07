import React from "react";
import * as S from "./styled";

const Circle = ({ x, y, radius, isHighlighted = false, onClick }: Readonly<Props>) => {
	return (
		<S.Circle
			$x={x}
			$y={y}
			$diameter={radius * 2}
			$isHighlighted={isHighlighted}
			onClick={onClick}
		/>
	);
};

export { Circle };
export interface Props {
	x: number;
	y: number;
	radius: number;
	isHighlighted?: boolean;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
