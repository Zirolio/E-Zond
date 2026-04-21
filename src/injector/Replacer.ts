import type { ReplacerItem } from "@shared/types/ReplacerItem.type";
import isIterable from "@shared/util/isIterable";

export default class Replacer {
    private readonly items: Set<ReplacerItem> = new Set();
    get replacerItems() { return this.items; }
    
    constructor(...items: ReplacerItem[]);
    constructor(...items: (ReplacerItem | Iterable<ReplacerItem>)[]) {
        for (const item of items) {
            if (isIterable(item)) {
                for (const i of item) this.items.add(i);
            } else {
                this.items.add(item);
            }
        }
    }

    protected addReplacer(searchValue: ReplacerItem["searchValue"], replace: ReplacerItem["replace"]) {
        this.items.add({ searchValue, replace });
    }
}