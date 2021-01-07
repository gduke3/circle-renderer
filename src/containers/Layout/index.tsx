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

	handleDocumentKeyDown(event: KeyboardEvent) {}

	handleCircleClick(event: React.MouseEvent<HTMLDivElement>) {}

	render() {
		return (
			<S.Layout>
				{this.storage.getStore().map(([key, circle]) => (
					<Circle
						key={`circle-${key}`}
						{...circle.getPosition()}
						radius={circle.getRadius()}
					/>
				))}
			</S.Layout>
		);
	}
}

export { Layout };
export interface Props {}
