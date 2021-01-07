class Storage<T> implements IStorage<T> {
	private store: StoreItem<T>[] = [];

	constructor(initialStore: StoreItem<T>[] = []) {
		this.store = initialStore;
	}

	getItem(key: number | string) {
		const item = this.store.find(([itemKey]) => key === itemKey);

		return item || null;
	}

	setItem(key: number | string, item: T) {
		const everyIsNotHaveThisKey = this.store.every(([itemKey]) => itemKey !== key);

		if (everyIsNotHaveThisKey) {
			this.store.push([key, item]);
		}
	}

	removeItem(key: number | string) {
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
	getItem: (key: number | string) => StoreItem<T> | null;
	setItem: (key: number | string, item: T) => void;
	removeItem: (key: number) => void;
	getStore: () => StoreItem<T>[];
}
export type StoreItem<T> = [key: number | string, item: T];
