export interface Options {
    caseSensitive?: boolean;
    fieldMatching?: boolean;
    maxInsertions?: number;
}
export interface Pattern {
    value: string;
    insertions: number;
    matchIndexes: number[];
}
export declare type Entry = Record<string, string>;
export interface EntryResult {
    field: string;
    patterns: Pattern[];
}
export interface Result {
    entry: Entry;
    info: EntryResult[];
    score: number;
}
export declare type Fields = Record<string, boolean>;
declare const smartSearch: (entries: Entry[], patterns: string | string[], fields: string | Fields, options: Options) => Result[] | undefined;
export default smartSearch;
