
export function handleError(message?: string, err?: any): void {
    // tslint:disable-next-line
    console.error(`MUDJS: ${message || 'Error in MUDJS'}`);
    if (err) {
        // tslint:disable-next-line
        console.error(err);
    }
}
