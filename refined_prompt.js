/**
 * Converts a given string to camelCase.
 *
 * The function normalizes the input by replacing underscores, hyphens, and whitespace
 * with spaces, then splits the string into words. The first word is lowercased,
 * and each subsequent word is capitalized and concatenated, resulting in camelCase.
 *
 * @param {string} input - The string to convert to camelCase. Accepts strings with spaces, underscores, or hyphens as word separators.
 * @returns {string} The camelCase version of the input string. Returns an empty string if the input is empty or contains only separators.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 */

/**
 * Converts a given string to dot.case.
 *
 * The function normalizes the input by replacing underscores, hyphens, and whitespace
 * with spaces, then splits the string into words. All words are lowercased and joined
 * together with dots as separators.
 *
 * @param {string} input - The string to convert to dot.case. Accepts strings with spaces, underscores, or hyphens as word separators.
 * @returns {string} The dot.case version of the input string. Returns an empty string if the input is empty or contains only separators.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Only strings are allowed in the prompt.');
    }

    // Replace all separators with a space, then split into words
    const words = input
        .replace(/[_\-\s]+/g, ' ')
        .trim()
        .split(' ')
        .filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase all words, except capitalize first letter of each except the first
    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber
// console.log(toCamelCase(123)); // Throws error

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Only strings are allowed in the prompt.');
    }

    // Replace all separators with a space, then split into words
    const words = input
        .replace(/[_\-\s]+/g, ' ')
        .trim()
        .split(' ')
        .filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase all words and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number