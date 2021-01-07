class Storage<T> implements IStorage<T> {
	private store: StoreItem<T>[] = [];

	constructor(initialStore: StoreItem<T>[] = []) {
		this.store = initialStore;
	}

	private getMaxKey() {
		return Math.max(...this.store.map(([key]) => Number(key)));
	}

	addItem(item: T) {
		const maxKey = this.getMaxKey();

		this.setItem(maxKey + 1, item);
	}

	getItem(key: number) {
		const item = this.store.find(([itemKey]) => key === itemKey);

		return item || null;
	}

	setItem(key: number, item: T) {
		const everyIsNotHaveThisKey = this.store.every(([itemKey]) => itemKey !== key);

		if (everyIsNotHaveThisKey) {
			this.store.push([key, item]);
		}
	}

	removeItem(key: number) {
		const item = this.getItem(key);

		if (item) {
			this.store = this.store.filter(([itemKey]) => itemKey !== key);
		}
	}

	getStore() {
		return this.store;
	}
}

export { Storage };
export interface IStorage<T> {
	getItem: (key: number) => StoreItem<T> | null;
	setItem: (key: number, item: T) => void;
	addItem: (item: T) => void;
	removeItem: (key: number) => void;
	getStore: () => StoreItem<T>[];
}
export type StoreItem<T> = [key: number, item: T];
