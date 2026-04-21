export interface ReplacerItem {
    searchValue: string | RegExp;
    replace: (substring: string, ...args: object[]) => string;
}