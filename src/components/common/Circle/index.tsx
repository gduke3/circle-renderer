import React from "react";
import * as S from "./styled";

const Circle = ({ x, y, radius, isHighlighted = false }: Readonly<Props>) => {
	return <S.Circle $x={x} $y={y} $diameter={radius * 2} $isHighlighted={isHighlighted} />;
};

export { Circle };
export interface Props {
	x: number;
	y: number;
	radius: number;
	isHighlighted?: boolean;
}
