import categories from '../data/categories.js';

export function randomIntBetween(min, max) {
    const randomFloat = Math.random();
    return Math.floor(randomFloat * (max - min + 1)) + min;
}

export function randomItemInArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function shuffleArray(array) {
    const shuffledArray = structuredClone(array);

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

export function isValidCategory(category) {
    if (!category) return false;
    return categories.includes(category);
}

export function isValidAmount(amount) {
    if (!amount) return false;
    return parseInt(amount).toString() === amount;
}
