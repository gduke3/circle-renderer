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

	clearAllHighlights(without: number[] = []) {
		for (const [key, circle] of this.storage.getRawStore()) {
			if (circle.isHighlighted && without.includes(key) === false) {
				circle.isHighlighted = false;
			}
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
				.getRawStore()
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
				if (event.ctrlKey === false) {
					this.clearAllHighlights([key]);
					circle.isHighlighted = !circle.isHighlighted;
				} else {
					circle.isHighlighted = true;
				}

				this.forceUpdate();
			}
		};
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleDocumentKeyDown.bind(this));
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleDocumentKeyDown);
	}

	render() {
		return (
			<S.Layout onClick={this.handleLayoutClick.bind(this)}>
				{this.storage.getRawStore().map(([key, circle]) => (
					<Circle
						key={`circle-${key}`}
						{...circle.getPosition()}
						radius={circle.getRadius()}
						isHighlighted={circle.isHighlighted}
						onClick={this.handleCircleClick(key).bind(this)}
					/>
				))}
			</S.Layout>
		);
	}
}

export { Layout };
export interface Props {}
