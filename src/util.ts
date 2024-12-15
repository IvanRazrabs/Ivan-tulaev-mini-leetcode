export const getRatio = () => {
    const {innerWidth, innerHeight} = window
    return innerWidth / innerHeight
}

export const getRandomIntInclusive = (min: number, max: number) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export const isObject = (value: unknown): value is object =>
    typeof value === "object" && value !== null && !Array.isArray(value);
