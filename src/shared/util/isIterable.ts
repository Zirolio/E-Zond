export default function isIterable(obj: unknown): obj is Iterable<unknown> {
    return obj != null && typeof (obj as { [Symbol.iterator]?: unknown })[Symbol.iterator] === "function";
}