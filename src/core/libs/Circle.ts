import { constantsCommon } from "../constants";

class Circle implements ICircle {
	private x: number;
	private y: number;
	private radius: number;
	isHighlighted: boolean;

	constructor({ x, y, isHighlighted = false }: { x: number; y: number; isHighlighted?: boolean }) {
		const radius = constantsCommon.CIRCLE_RADIUS;

		this.x = x - radius;
		this.y = y - radius;
		this.radius = radius;
		this.isHighlighted = isHighlighted;
	}

	setPosition({ x, y }: { x: number; y: number }) {
		this.x = x;
		this.y = y;
	}

	getPosition() {
		return {
			x: this.x,
			y: this.y,
		};
	}

	getRadius() {
		return this.radius;
	}
}

export { Circle };
export interface ICircle {
	isHighlighted: boolean;
	setPosition: (position: { x: number; y: number }) => void;
	getPosition: () => { x: number; y: number };
	getRadius: () => number;
}
