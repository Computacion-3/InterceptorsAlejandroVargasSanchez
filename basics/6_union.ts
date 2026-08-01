function getElement(arr: (number | string)[]): (number | string)[] {
    return arr.filter(item => typeof item === 'number');
}

function getId(id: number | string): string {
    if (typeof id === 'string') return id.toLowerCase();
    return `${id + 2}`;
}