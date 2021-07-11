export function staticImplements<T>() {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return <U extends T>(constructor: U) => {
        return constructor;
    };
}
