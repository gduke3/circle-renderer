import React, { Component } from "react";
import { Storage, IStorage } from "../../core/libs/Storage";
import { Circle as CircleHelper, ICircle as ICircleHelper } from "../../core/libs/Circle";
import { Circle } from "../../components/common/Circle";
import * as S from "./styled";

class Layout extends Component {
	storage: IStorage<ICircleHelper>;

	constructor(props: Readonly<Props>) {
		super(props);
		this.storage = new Storage<ICircleHelper>();
	}

	clearAllHighlights() {
		for (const [key, circle] of this.storage.getStore()) {
			if (circle.isHighlighted) {
				circle.isHighlighted = false;
			}
			this.storage.setItem(key, circle);
		}
	}

	handleLayoutClick(event: React.MouseEvent<HTMLDivElement>) {
		const position = { x: event.clientX, y: event.clientY };
		const circle = new CircleHelper({ ...position, isHighlighted: true });

		this.clearAllHighlights();
		this.storage.addItem(circle);

		this.forceUpdate();
	}

	handleDocumentKeyDown(event: KeyboardEvent) {
		if (event.key === "Delete") {
			const highlightedCircles = this.storage
				.getStore()
				.filter(([, circle]) => circle.isHighlighted);

			for (const [key] of highlightedCircles) {
				this.storage.removeItem(key);
			}

			this.forceUpdate();
		}
	}

	handleCircleClick(key: number) {
		return (event: React.MouseEvent<HTMLDivElement>) => {
			event.preventDefault();
			event.stopPropagation();

			const [, circle] = this.storage.getItem(key) || [];

			if (circle) {
				if (event.altKey === false) {
					this.clearAllHighlights();
				}
				circle.isHighlighted = true;
				this.storage.setItem(key, circle);

				this.forceUpdate();
			}
		};
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleDocumentKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleDocumentKeyDown);
	}

	render() {
		return (
			<S.Layout onClick={this.handleLayoutClick}>
				{this.storage.getStore().map(([key, circle]) => (
					<Circle
						key={`circle-${key}`}
						{...circle.getPosition()}
						radius={circle.getRadius()}
						onClick={this.handleCircleClick(key)}
					/>
				))}
			</S.Layout>
		);
	}
}

export { Layout };
export interface Props {}
