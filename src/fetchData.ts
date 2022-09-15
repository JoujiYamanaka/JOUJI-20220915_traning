export function fetchData(): Promise<string> {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve('peanut butter');
        }, 3000)
    );
}  